"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

/**
 * Embarque le calendrier Calendly de façon paresseuse :
 * le script n'est chargé qu'au moment où le bloc entre dans le viewport,
 * ce qui évite de pénaliser le chargement initial (et donc le SEO).
 */
export default function Calendly() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);

    // Filet de sécurité : le calendrier est la principale voie de conversion,
    // il ne doit jamais rester bloqué si l'observateur ne se déclenche pas.
    const secours = window.setTimeout(() => setVisible(true), 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(secours);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Ouverture anticipée de la connexion vers Calendly : le calendrier
          s'affiche plus vite sans pénaliser le chargement initial. */}
      <link rel="preconnect" href="https://assets.calendly.com" />
      <link rel="preconnect" href="https://calendly.com" />

      {visible && (
        <>
          <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
          <div
            className="calendly-inline-widget overflow-hidden rounded-[26px] border border-brun/12 bg-papier"
            data-url={`${site.contact.calendly}?background_color=fbf7f1&text_color=3a2718&primary_color=a35c3d`}
            style={{ minWidth: "320px", height: "760px" }}
          />
        </>
      )}
      <noscript>
        <a href={site.contact.calendly} target="_blank" rel="noopener noreferrer">
          Ouvrir le calendrier de réservation
        </a>
      </noscript>
    </div>
  );
}
