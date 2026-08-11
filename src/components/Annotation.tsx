/**
 * Annotation manuscrite + flèche dessinée à la main.
 * Reprise directe du langage graphique des brochures tarifaires
 * (« Vos envies », « Votre mode de vie »…).
 */

type Direction = "bas-droite" | "bas-gauche" | "haut-droite" | "haut-gauche" | "droite" | "gauche";

const courbes: Record<Direction, { d: string; pointe: string; box: string }> = {
  "bas-droite": {
    d: "M6 8 C 34 18, 62 34, 80 66",
    pointe: "M80 66 L 68 58 M80 66 L 78 51",
    box: "0 0 96 80",
  },
  "bas-gauche": {
    d: "M90 8 C 62 18, 34 34, 16 66",
    pointe: "M16 66 L 28 58 M16 66 L 18 51",
    box: "0 0 96 80",
  },
  "haut-droite": {
    d: "M6 72 C 34 62, 62 46, 80 14",
    pointe: "M80 14 L 68 22 M80 14 L 78 29",
    box: "0 0 96 80",
  },
  "haut-gauche": {
    d: "M90 72 C 62 62, 34 46, 16 14",
    pointe: "M16 14 L 28 22 M16 14 L 18 29",
    box: "0 0 96 80",
  },
  droite: {
    d: "M4 44 C 30 22, 58 22, 84 40",
    pointe: "M84 40 L 71 37 M84 40 L 76 29",
    box: "0 0 96 80",
  },
  gauche: {
    d: "M92 44 C 66 22, 38 22, 12 40",
    pointe: "M12 40 L 25 37 M12 40 L 20 29",
    box: "0 0 96 80",
  },
};

export function Fleche({
  direction = "bas-droite",
  className = "",
}: {
  direction?: Direction;
  className?: string;
}) {
  const c = courbes[direction];
  return (
    <svg viewBox={c.box} className={className} fill="none" aria-hidden="true">
      <path
        d={c.d}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        className="trace"
        style={{ "--long": 200 } as React.CSSProperties}
      />
      <path
        d={c.pointe}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        className="trace"
        style={{ "--long": 60 } as React.CSSProperties}
      />
    </svg>
  );
}

export default function Annotation({
  children,
  direction = "bas-droite",
  className = "",
  rotation = -3,
}: {
  children: React.ReactNode;
  direction?: Direction;
  className?: string;
  rotation?: number;
}) {
  const flecheAGauche = direction.endsWith("gauche");
  return (
    <div className={`flex items-start gap-1 text-sable ${className}`} aria-hidden="true">
      {flecheAGauche && <Fleche direction={direction} className="mt-1 h-10 w-12 shrink-0" />}
      <span
        className="main-note block whitespace-pre-line"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {children}
      </span>
      {!flecheAGauche && <Fleche direction={direction} className="mt-1 h-10 w-12 shrink-0" />}
    </div>
  );
}
