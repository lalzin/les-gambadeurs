"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** délai d'apparition, en ms */
  delai?: number;
  className?: string;
  as?: ElementType;
};

/** Délai au-delà duquel on révèle sans attendre l'observateur (ms). */
const FILET_SECURITE = 2500;

/**
 * Révèle son contenu à l'entrée dans le viewport.
 * Respecte prefers-reduced-motion via les règles CSS globales.
 *
 * Le masquage initial n'est appliqué que si <html> porte la classe « anim »
 * (voir le script d'amélioration progressive dans app/layout.tsx). Deux filets
 * de sécurité complètent le dispositif pour qu'aucun contenu ne puisse rester
 * invisible : l'absence d'IntersectionObserver, et le cas où l'observateur
 * existe mais ne se déclenche jamais.
 */
export default function Reveal({ children, delai = 0, className = "", as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [vu, setVu] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Repli si l'API n'est pas disponible : on affiche tout au prochain rendu.
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setVu(true));
      return () => cancelAnimationFrame(id);
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVu(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    io.observe(el);

    // Filet de sécurité. Si le bloc est bel et bien à l'écran alors que
    // l'observateur ne s'est jamais manifesté, c'est que celui-ci est
    // inopérant (extension, navigateur exotique, contexte d'intégration).
    // On désactive alors le mode animé pour toute la page : tout redevient
    // visible d'un coup, plutôt que de laisser des sections vides au fil du
    // défilement.
    const secours = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      const aLEcran = r.top < window.innerHeight && r.bottom > 0 && r.height > 0;
      if (aLEcran) {
        setVu(true);
        document.documentElement.classList.remove("anim");
      }
    }, FILET_SECURITE);

    return () => {
      io.disconnect();
      window.clearTimeout(secours);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${vu ? "vu" : ""} ${className}`}
      style={{ "--delai": `${delai}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
