"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [defile, setDefile] = useState(false);
  const [ouvert, setOuvert] = useState(false);

  useEffect(() => {
    const onScroll = () => setDefile(window.scrollY > 24);
    const id = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = ouvert ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [ouvert]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        defile || ouvert
          ? "border-b border-brun/10 bg-papier/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1240px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Les Gambadeurs — accueil">
          <Image
            src="/brand/logo-mark.png"
            alt=""
            width={110}
            height={105}
            priority
            className="h-9 w-auto transition-transform duration-500 group-hover:-translate-y-0.5"
          />
          <span className="leading-none">
            <span className="titre block text-[13px] tracking-[0.14em] uppercase sm:text-[15px] sm:tracking-[0.16em]">
              Les Gambadeurs
            </span>
            <span className="mt-1 hidden text-[10px] tracking-[0.22em] text-sable uppercase sm:block">
              Garde &amp; conseil
            </span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-7 lg:flex">
          {nav.slice(1).map((l) => {
            const actif = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={actif ? "page" : undefined}
                className={`relative py-1 text-[13.5px] tracking-wide transition-colors ${
                  actif ? "text-brun" : "text-encre/70 hover:text-brun"
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-px bg-terre transition-all duration-400 ${
                    actif ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="hidden rounded-full bg-terre px-5 py-2.5 text-[13px] font-medium text-creme transition-all duration-300 hover:bg-brun hover:shadow-[0_10px_28px_-12px_var(--color-brun)] sm:inline-block"
          >
            {site.contact.phone}
          </a>

          <button
            type="button"
            onClick={() => setOuvert((o) => !o)}
            aria-expanded={ouvert}
            aria-label={ouvert ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brun/15 text-brun lg:hidden"
          >
            <span className="relative block h-3 w-4.5">
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  ouvert ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-px w-full bg-current transition-all duration-300 ${
                  ouvert ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-brun/10 bg-papier transition-[max-height,opacity] duration-500 lg:hidden ${
          ouvert ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav aria-label="Navigation mobile" className="mx-auto max-w-[1240px] px-5 py-6 sm:px-8">
          {nav.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOuvert(false)}
              aria-current={pathname === l.href ? "page" : undefined}
              className="titre block border-b border-brun/8 py-4 text-[26px] last:border-0"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="mt-5 block rounded-full bg-terre px-5 py-3.5 text-center text-sm text-creme"
          >
            Appeler le {site.contact.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
