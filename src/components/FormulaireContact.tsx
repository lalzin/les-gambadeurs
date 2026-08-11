"use client";

import { useActionState, useEffect, useId, useRef } from "react";
import { Patte } from "@/components/Botanique";
import { envoyerDemande } from "@/lib/actions";
import { SUJETS, etatInitial } from "@/lib/contact";
import { site } from "@/lib/site";

const champBase =
  "w-full rounded-2xl border border-brun/15 bg-papier px-4 py-3 text-[15px] text-encre placeholder:text-encre/35 transition-colors focus:border-terre focus:outline-none";

function Erreur({ id, texte }: { id: string; texte?: string }) {
  if (!texte) return null;
  return (
    <p id={id} className="mt-1.5 text-[13px] text-terre">
      {texte}
    </p>
  );
}

export default function FormulaireContact() {
  const [etat, action, enCours] = useActionState(envoyerDemande, etatInitial);
  const formRef = useRef<HTMLFormElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const id = useId();

  // Après un envoi réussi, on vide le formulaire et on amène le lecteur
  // (y compris un lecteur d'écran) sur le message de confirmation.
  useEffect(() => {
    if (etat.statut === "succes") {
      formRef.current?.reset();
      resumeRef.current?.focus();
    }
  }, [etat.statut]);

  const v = etat.valeurs ?? {};
  const e = etat.erreurs ?? {};

  return (
    <div className="rounded-[28px] border border-brun/12 bg-creme/40 p-6 sm:p-9">
      <div
        ref={resumeRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="scroll-mt-28 outline-none"
      >
        {etat.statut === "succes" && (
          <div className="mb-7 flex items-start gap-4 rounded-2xl border border-olive/40 bg-tendre/40 p-5">
            <Patte className="mt-0.5 h-5 w-5 shrink-0 text-mousse" />
            <div>
              <p className="titre text-[19px] text-mousse">Message bien reçu</p>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-encre/80">{etat.message}</p>
            </div>
          </div>
        )}
        {etat.statut === "erreur" && (
          <div className="mb-7 rounded-2xl border border-terre/35 bg-terre/8 p-5">
            <p className="text-[14.5px] leading-relaxed text-brun">{etat.message}</p>
          </div>
        )}
      </div>

      <form ref={formRef} action={action} noValidate className="grid gap-5">
        {/* Piège à robots : invisible et hors du parcours au clavier. */}
        <div aria-hidden className="absolute left-[-9999px] h-px w-px overflow-hidden">
          <label htmlFor={`${id}-site`}>Ne pas remplir</label>
          <input id={`${id}-site`} type="text" name="site_web" tabIndex={-1} autoComplete="off" />
        </div>

        <fieldset className="grid gap-3">
          <legend className="mb-1 text-[13px] font-medium text-brun">Votre demande concerne</legend>
          <div className="flex flex-wrap gap-2.5">
            {SUJETS.map((s, i) => (
              <label
                key={s.valeur}
                className="cursor-pointer rounded-full border border-brun/15 bg-papier px-4 py-2.5 text-[14px] text-encre/80 transition-colors has-checked:border-terre has-checked:bg-terre has-checked:text-creme"
              >
                <input
                  type="radio"
                  name="sujet"
                  value={s.valeur}
                  defaultChecked={v.sujet ? v.sujet === s.valeur : i === 0}
                  className="sr-only"
                />
                {s.label}
              </label>
            ))}
          </div>
        </fieldset>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-nom`} className="mb-1.5 block text-[13px] font-medium text-brun">
              Votre nom <span className="text-terre">*</span>
            </label>
            <input
              id={`${id}-nom`}
              name="nom"
              required
              autoComplete="name"
              defaultValue={v.nom}
              aria-invalid={!!e.nom}
              aria-describedby={e.nom ? `${id}-nom-err` : undefined}
              className={champBase}
              placeholder="Camille Durand"
            />
            <Erreur id={`${id}-nom-err`} texte={e.nom} />
          </div>

          <div>
            <label htmlFor={`${id}-email`} className="mb-1.5 block text-[13px] font-medium text-brun">
              Votre e-mail <span className="text-terre">*</span>
            </label>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              defaultValue={v.email}
              aria-invalid={!!e.email}
              aria-describedby={e.email ? `${id}-email-err` : undefined}
              className={champBase}
              placeholder="camille@exemple.fr"
            />
            <Erreur id={`${id}-email-err`} texte={e.email} />
          </div>

          <div>
            <label htmlFor={`${id}-tel`} className="mb-1.5 block text-[13px] font-medium text-brun">
              Téléphone
            </label>
            <input
              id={`${id}-tel`}
              name="telephone"
              type="tel"
              autoComplete="tel"
              defaultValue={v.telephone}
              className={champBase}
              placeholder="06 12 34 56 78"
            />
            <Erreur id={`${id}-tel-err`} texte={e.telephone} />
          </div>

          <div>
            <label htmlFor={`${id}-commune`} className="mb-1.5 block text-[13px] font-medium text-brun">
              Votre commune
            </label>
            <input
              id={`${id}-commune`}
              name="commune"
              autoComplete="address-level2"
              defaultValue={v.commune}
              className={champBase}
              placeholder="Hédé-Bazouges"
            />
            <Erreur id={`${id}-commune-err`} texte={e.commune} />
          </div>
        </div>

        <div>
          <label htmlFor={`${id}-animal`} className="mb-1.5 block text-[13px] font-medium text-brun">
            Votre animal
          </label>
          <input
            id={`${id}-animal`}
            name="animal"
            defaultValue={v.animal}
            className={champBase}
            placeholder="Chatte de 4 ans, ou projet d'adoption d'un lapin"
          />
          <Erreur id={`${id}-animal-err`} texte={e.animal} />
        </div>

        <div>
          <label htmlFor={`${id}-message`} className="mb-1.5 block text-[13px] font-medium text-brun">
            Votre message <span className="text-terre">*</span>
          </label>
          <textarea
            id={`${id}-message`}
            name="message"
            required
            rows={5}
            defaultValue={v.message}
            aria-invalid={!!e.message}
            aria-describedby={e.message ? `${id}-message-err` : undefined}
            className={`${champBase} resize-y`}
            placeholder="Vos dates, le rythme de votre animal, ses habitudes, ce qui vous fait hésiter…"
          />
          <Erreur id={`${id}-message-err`} texte={e.message} />
        </div>

        <div>
          <label className="flex cursor-pointer items-start gap-3 text-[13.5px] leading-relaxed text-encre/75">
            <input
              type="checkbox"
              name="consentement"
              required
              aria-invalid={!!e.consentement}
              aria-describedby={e.consentement ? `${id}-cons-err` : undefined}
              className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-terre)]"
            />
            <span>
              J&apos;accepte que ces informations soient utilisées pour me recontacter. Elles ne
              seront ni revendues ni transmises à des tiers (
              <a
                href="/politique-de-confidentialite"
                className="text-terre underline underline-offset-4"
              >
                politique de confidentialité
              </a>
              ).
            </span>
          </label>
          <Erreur id={`${id}-cons-err`} texte={e.consentement} />
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-5">
          <button
            type="submit"
            disabled={enCours}
            className="group inline-flex items-center gap-2.5 rounded-full bg-terre px-7 py-3.5 text-[14px] font-medium text-creme transition-all duration-400 hover:-translate-y-0.5 hover:bg-brun hover:shadow-[0_16px_38px_-16px_var(--color-brun)] disabled:pointer-events-none disabled:opacity-60"
          >
            {enCours ? "Envoi en cours…" : "Envoyer ma demande"}
            <span className="inline-block transition-transform duration-400 group-hover:translate-x-1">
              →
            </span>
          </button>
          <p className="text-[13px] text-encre/55">
            Ou appelez le{" "}
            <a href={`tel:${site.contact.phoneHref}`} className="text-terre hover:underline">
              {site.contact.phone}
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}
