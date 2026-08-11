/**
 * Botanique — le système graphique du site.
 * Épis de blé, graminées, tournesols et champs : dessinés en SVG,
 * générés procéduralement pour que deux tiges ne soient jamais identiques.
 * Aucune image, aucune dépendance : tout est vectoriel et animable.
 */

type EpiProps = {
  className?: string;
  /** nombre de grains de chaque côté */
  grains?: number;
  /** graine de génération, pour varier les silhouettes */
  seed?: number;
  /** couleur explicite ; par défaut la tige hérite de la couleur du parent (`text-*`) */
  couleur?: string;
  opacite?: number;
};

/** Générateur pseudo-aléatoire déterministe (même rendu serveur / client). */
function alea(seed: number) {
  let s = seed * 9301 + 49297;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

/** Un épi de blé complet : tige, grains en chevrons, barbes. */
export function Epi({ className = "", grains = 7, seed = 1, couleur, opacite = 1 }: EpiProps) {
  const rnd = alea(seed);
  const courbure = 4 + rnd() * 8;
  const hauteurEpi = 12 * grains;
  const sommet = 200 - hauteurEpi - 60;

  const items = Array.from({ length: grains }, (_, i) => {
    const y = sommet + 10 + i * 12;
    const echelle = 0.72 + (i / grains) * 0.35;
    return { y, echelle, i };
  });

  return (
    <svg
      viewBox="0 0 70 200"
      className={className}
      fill="none"
      aria-hidden="true"
      style={{ ...(couleur ? { color: couleur } : {}), opacity: opacite }}
    >
      {/* tige */}
      <path
        d={`M35 200 C ${35 - courbure} 168, ${35 + courbure * 0.6} 140, 35 ${sommet + hauteurEpi}`}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {/* feuille */}
      <path
        d={`M35 ${150 + rnd() * 14} C ${18 - rnd() * 8} ${142}, ${10} ${124}, ${14} ${112}
            C ${24} ${122}, ${32} ${134}, 35 ${146} Z`}
        fill="currentColor"
        opacity="0.5"
      />
      {/* grains, en chevrons alternés */}
      {items.map(({ y, echelle, i }) => (
        <g key={i}>
          {[-1, 1].map((sens) => (
            <g key={sens} transform={`translate(${35 + sens * 5.4} ${y}) rotate(${sens * 26}) scale(${echelle})`}>
              <path
                d="M0 -11 C 5 -6.5, 6 1, 0 11 C -6 1, -5 -6.5, 0 -11 Z"
                fill="currentColor"
              />
              {/* barbe */}
              <path
                d="M0 -11 L 0 -30"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeLinecap="round"
                opacity="0.62"
              />
            </g>
          ))}
        </g>
      ))}
      {/* grain de tête */}
      <g transform={`translate(35 ${sommet}) scale(1.05)`}>
        <path d="M0 -12 C 5 -7, 6 1, 0 12 C -6 1, -5 -7, 0 -12 Z" fill="currentColor" />
        <path d="M0 -12 L 0 -34" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.62" />
      </g>
    </svg>
  );
}

/** Une graminée souple, plus légère que l'épi. */
export function Graminee({ className = "", seed = 2, couleur }: EpiProps) {
  const rnd = alea(seed);
  const sens = rnd() > 0.5 ? 1 : -1;
  const amplitude = 14 + rnd() * 16;
  return (
    <svg
      viewBox="0 0 70 200"
      className={className}
      fill="none"
      aria-hidden="true"
      style={couleur ? { color: couleur } : undefined}
    >
      <path
        d={`M35 200 C ${35 + sens * amplitude} 150, ${35 - sens * amplitude * 0.4} 100, ${35 + sens * amplitude * 1.4} 44`}
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      {Array.from({ length: 9 }, (_, i) => {
        const t = i / 9;
        const x = 35 + sens * amplitude * (1.4 * t + 0.6 * Math.sin(t * 3));
        const y = 200 - t * 156 - 44;
        return (
          <path
            key={i}
            d={`M${x} ${y} q ${sens * 9} -5 ${sens * 15} -14`}
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity={0.55 + t * 0.4}
          />
        );
      })}
    </svg>
  );
}

/** Tournesol stylisé, en aplat. */
export function Tournesol({
  className = "",
  petales = 13,
  couleurPetale = "currentColor",
  couleurCoeur = "currentColor",
}: {
  className?: string;
  petales?: number;
  couleurPetale?: string;
  couleurCoeur?: string;
}) {
  return (
    <svg viewBox="-50 -50 100 100" className={className} aria-hidden="true" fill="none">
      <g>
        {Array.from({ length: petales }, (_, i) => (
          <path
            key={i}
            d="M0 -14 C 7 -24, 8 -36, 0 -44 C -8 -36, -7 -24, 0 -14 Z"
            fill={couleurPetale}
            transform={`rotate(${(360 / petales) * i})`}
          />
        ))}
      </g>
      <circle r="15" fill={couleurCoeur} />
      <circle r="15" fill="none" stroke={couleurPetale} strokeWidth="1.5" opacity="0.5" />
    </svg>
  );
}

/**
 * Bande de champ : collines douces + rangée d'épis et de graminées.
 * Utilisée en bas des bannières et en séparateur de sections.
 */
export function Champ({
  className = "",
  densite = 16,
  anime = true,
}: {
  className?: string;
  densite?: number;
  anime?: boolean;
}) {
  const tiges = Array.from({ length: densite }, (_, i) => {
    const rnd = alea(i + 7);
    const gauche = (i / densite) * 100 + rnd() * (100 / densite) * 0.8;
    const taille = 96 + rnd() * 128;
    const epi = rnd() > 0.42;
    return {
      i,
      gauche,
      taille,
      epi,
      inclinaison: (rnd() - 0.5) * 12,
      duree: 6 + rnd() * 6,
      retard: rnd() * 5,
      teinte: rnd(),
    };
  });

  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <div className="relative h-full w-full">
        {tiges.map((t) => (
          <div
            key={t.i}
            className={anime ? "tige absolute bottom-0" : "absolute bottom-0"}
            style={
              {
                left: `${t.gauche}%`,
                height: `${t.taille}px`,
                width: `${t.taille * 0.35}px`,
                marginLeft: `${-t.taille * 0.175}px`,
                "--inclinaison": `${t.inclinaison}deg`,
                "--amplitude": `${1.6 + t.teinte * 2.6}deg`,
                "--duree": `${t.duree}s`,
                "--retard": `-${t.retard}s`,
              } as React.CSSProperties
            }
          >
            {t.epi ? (
              <Epi
                className="h-full w-full"
                seed={t.i * 3 + 1}
                grains={5 + Math.round(t.teinte * 3)}
                couleur={t.teinte > 0.55 ? "var(--color-sable)" : "var(--color-olive)"}
                opacite={0.5 + t.teinte * 0.4}
              />
            ) : (
              <Graminee
                className="h-full w-full"
                seed={t.i * 5 + 2}
                couleur={t.teinte > 0.5 ? "var(--color-olive)" : "var(--color-sable)"}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Collines superposées, en aplats, pour les fonds de bannière. */
export function Collines({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="colline-1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-lin)" stopOpacity="0.75" />
          <stop offset="100%" stopColor="var(--color-lin)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="colline-2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-tendre)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--color-tendre)" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="colline-3" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-olive)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--color-olive)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 150 C 180 100, 320 170, 520 146 C 760 118, 900 174, 1120 140 C 1280 116, 1360 136, 1440 128 L1440 320 L0 320 Z"
        fill="url(#colline-1)"
      />
      <path
        d="M0 206 C 220 172, 400 226, 640 204 C 880 182, 1040 232, 1240 206 C 1340 193, 1400 200, 1440 196 L1440 320 L0 320 Z"
        fill="url(#colline-2)"
      />
      <path
        d="M0 258 C 260 234, 460 274, 720 258 C 980 242, 1180 278, 1440 260 L1440 320 L0 320 Z"
        fill="url(#colline-3)"
      />
    </svg>
  );
}

/** Empreinte de patte — repris du logo, utilisé comme puce et séparateur. */
export function Patte({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 46" className={className} aria-hidden="true" fill="currentColor">
      <ellipse cx="24" cy="30" rx="11.5" ry="9.5" />
      <ellipse cx="10" cy="18.5" rx="5.4" ry="6.8" transform="rotate(-18 10 18.5)" />
      <ellipse cx="38" cy="18.5" rx="5.4" ry="6.8" transform="rotate(18 38 18.5)" />
      <ellipse cx="18" cy="7.5" rx="5" ry="6.6" transform="rotate(-8 18 7.5)" />
      <ellipse cx="30" cy="7.5" rx="5" ry="6.6" transform="rotate(8 30 7.5)" />
    </svg>
  );
}
