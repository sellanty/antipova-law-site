type CrimeCategoryIconProps = {
  type: "economic" | "official" | "personality" | "management" | "drugs" | "other";
};

export function CrimeCategoryIcon({ type }: CrimeCategoryIconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const
  };

  if (type === "economic") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7">
        <path {...common} d="M8 37h32" />
        <path {...common} d="M12 33V18h8v15" />
        <path {...common} d="M20 33V11h8v22" />
        <path {...common} d="M28 33V23h8v10" />
        <path {...common} d="M35 10c3 0 5 1.4 5 3.2s-2 3.2-5 3.2-5-1.4-5-3.2S32 10 35 10Z" />
        <path {...common} d="M30 13.2v5.5c0 1.8 2 3.2 5 3.2s5-1.4 5-3.2v-5.5" />
      </svg>
    );
  }

  if (type === "official") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7">
        <path {...common} d="M15 18v-4a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v4" />
        <path {...common} d="M9 18h30v20H9z" />
        <path {...common} d="M9 25h30" />
        <path {...common} d="M21 24h6v5h-6z" />
        <path {...common} d="M17 38v-5h14v5" />
      </svg>
    );
  }

  if (type === "personality") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7">
        <path {...common} d="M24 7 38 13v10c0 10-6.1 16-14 19-7.9-3-14-9-14-19V13L24 7Z" />
        <path {...common} d="M24 21c2.8-5.3 11-2.2 8.2 4.3-1.7 4-5.4 6.4-8.2 8.2-2.8-1.8-6.5-4.2-8.2-8.2C13 18.8 21.2 15.7 24 21Z" />
      </svg>
    );
  }

  if (type === "management") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7">
        <path {...common} d="M10 20h28" />
        <path {...common} d="M13 20v18M21 20v18M29 20v18M37 20v18" />
        <path {...common} d="M8 38h32" />
        <path {...common} d="M24 8 8 17h32L24 8Z" />
        <path {...common} d="M24 13h.01" />
      </svg>
    );
  }

  if (type === "drugs") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7">
        <path {...common} d="M16.3 31.7 31.7 16.3a7.2 7.2 0 0 1 10.2 10.2L26.5 41.9a7.2 7.2 0 0 1-10.2-10.2Z" />
        <path {...common} d="m24 24 10 10" />
        <path {...common} d="M7 11.5 12.5 6l10 10-5.5 5.5" />
        <path {...common} d="M10.5 9.5 6 5" />
        <path {...common} d="M17 16 9 24" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true" className="h-7 w-7">
      <path {...common} d="M14 8h16l6 6v26H14z" />
      <path {...common} d="M30 8v7h7" />
      <path {...common} d="M20 22h12M20 28h12M20 34h7" />
      <path {...common} d="M10 14v26h4" />
    </svg>
  );
}
