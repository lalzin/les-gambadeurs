import Image from "next/image";
import Link from "next/link";
import { entreprise } from "@/lib/legal";
import { nav, navLegal, site } from "@/lib/site";

export default function Footer() {
  const annee = new Date().getFullYear();
  const siret = entreprise.siret.trim();

  return (
    <footer className="relative overflow-hidden bg-brun text-creme">
      <div className="relative mx-auto max-w-[1240px] px-5 pt-24 pb-10 sm:px-8">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1fr]">
          {/* Identité */}
          <div>
            <Image
              src="/brand/logo-lockup-creme.png"
              alt="Les Gambadeurs"
              width={300}
              height={209}
              className="h-24 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-creme/70">
              Garde d&apos;animaux et conseil à l&apos;adoption en Ille-et-Vilaine. Chiens, chats et
              NAC.
              <br />
              <span className="font-hand text-lg text-lin">
                Les comprendre, pas seulement les aimer.
              </span>
            </p>
            <p className="mt-6 max-w-xs text-[12.5px] leading-relaxed text-creme/45">
              Titulaire de l&apos;ACACED, activité déclarée auprès de la DDPP et couverte par une
              assurance responsabilité civile professionnelle.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Pages du site">
            <h2 className="text-[11px] tracking-[0.24em] text-sable uppercase">Le site</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-creme/75 transition-colors hover:text-creme">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-[11px] tracking-[0.24em] text-sable uppercase">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`tel:${site.contact.phoneHref}`} className="text-creme/75 hover:text-creme">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className="text-creme/75 hover:text-creme">
                  {site.contact.email}
                </a>
              </li>
              <li className="text-creme/60">
                {site.zone.ville} ({site.zone.departementCode}), {site.zone.departement}
              </li>
              <li className="text-creme/45">
                Garde dans un rayon de {site.zone.rayonGardeKm} km
              </li>
              {site.social.instagram && (
                <li>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-creme/75 hover:text-creme"
                  >
                    Instagram
                  </a>
                </li>
              )}
              {site.social.facebook && (
                <li>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-creme/75 hover:text-creme"
                  >
                    Facebook
                  </a>
                </li>
              )}
            </ul>
            <Link
              href="/contact"
              className="mt-7 inline-block rounded-full border border-creme/30 px-5 py-2.5 text-[13px] transition-colors hover:border-creme hover:bg-creme hover:text-brun"
            >
              Me contacter
            </Link>
          </div>
        </div>

        {/* Barre légale */}
        <div className="mt-16 border-t border-creme/12 pt-8">
          <nav aria-label="Informations légales">
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[12.5px]">
              {navLegal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-creme/60 transition-colors hover:text-creme">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/sitemap.xml"
                  className="text-creme/60 transition-colors hover:text-creme"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Plan du site
                </a>
              </li>
            </ul>
          </nav>

          <div className="mt-7 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <Image
              src="/brand/logo-badge-creme.png"
              alt=""
              width={120}
              height={120}
              className="h-14 w-14 opacity-60"
            />
            <p className="text-center text-[11.5px] leading-relaxed text-creme/40 sm:text-right">
              © {annee} {entreprise.raisonSociale}
              {siret && ` · SIRET ${siret}`}
              <br />
              Garde d&apos;animaux &amp; conseil à l&apos;adoption en {site.zone.departement}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
