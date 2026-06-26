export type HeroLayout = "left" | "center" | "split";

export interface Theme {
  id: string;
  name: string;
  desc: string;
  dark: boolean;
  hero: HeroLayout;
  numbered: boolean;
  prompt?: string;
  bg: string;
  surface: string;
  text: string;
  muted: string;
  accent: string;
  accent2?: string;
  accentText: string;
  border: string;
  radius: number;
  borderW: number;
  cardShadow: string;
  fontDisplay: string;
  fontBody: string;
  labelTransform: "uppercase" | "none";
  labelTracking: string;
  labelWeight: number;
  labelSize: number;
  tagBg: string;
  tagText: string;
  tagBorder: string;
  tagRadius: number;
}

export const DEFAULT_THEME_ID = "botanical";

export const THEMES: Theme[] = [
  {
    id: "editorial", name: "The Editorial",
    desc: "Literary masthead. Hairline rules, serif headlines, a printed-page calm.",
    dark: false, hero: "split", numbered: true,
    bg: "#faf8f3", surface: "#f3efe6", text: "#1b1b1b", muted: "#5c574e",
    accent: "#8b1e2d", accentText: "#ffffff", border: "#d8d2c4",
    radius: 0, borderW: 1, cardShadow: "none",
    fontDisplay: "var(--font-playfair), Georgia, serif",
    fontBody: "Georgia, 'Times New Roman', serif",
    labelTransform: "uppercase", labelTracking: "0.22em", labelWeight: 600, labelSize: 11,
    tagBg: "transparent", tagText: "#8b1e2d", tagBorder: "#d8d2c4", tagRadius: 0,
  },
  {
    id: "brutalist", name: "The Brutalist",
    desc: "Raw concrete. Monospace, thick black frames, hard offset shadows.",
    dark: false, hero: "left", numbered: true,
    bg: "#fbfbf9", surface: "#ffffff", text: "#0a0a0a", muted: "#444444",
    accent: "#1d4aff", accentText: "#ffffff", border: "#0a0a0a",
    radius: 0, borderW: 3, cardShadow: "6px 6px 0 #0a0a0a",
    fontDisplay: "var(--font-space-mono), monospace",
    fontBody: "var(--font-space-mono), monospace",
    labelTransform: "uppercase", labelTracking: "0.05em", labelWeight: 700, labelSize: 12,
    tagBg: "#0a0a0a", tagText: "#ffffff", tagBorder: "#0a0a0a", tagRadius: 0,
  },
  {
    id: "swiss", name: "The Swiss",
    desc: "International style. A strict grid, one red accent, surgical whitespace.",
    dark: false, hero: "left", numbered: true,
    bg: "#ffffff", surface: "#f6f6f6", text: "#111111", muted: "#6b6b6b",
    accent: "#e8412a", accentText: "#ffffff", border: "#111111",
    radius: 0, borderW: 1, cardShadow: "none",
    fontDisplay: "var(--font-archivo-black), 'Helvetica Neue', sans-serif",
    fontBody: "var(--font-inter), 'Helvetica Neue', sans-serif",
    labelTransform: "uppercase", labelTracking: "0.04em", labelWeight: 700, labelSize: 11,
    tagBg: "transparent", tagText: "#111111", tagBorder: "#111111", tagRadius: 0,
  },
  {
    id: "terminal", name: "The Terminal",
    desc: "A glowing CRT. Phosphor green on black, command prompts.",
    dark: true, hero: "left", numbered: true, prompt: "kabir@dev:~$ ",
    bg: "#0a0f0a", surface: "#0f160f", text: "#b9f5c0", muted: "#5a8a60",
    accent: "#39ff14", accentText: "#0a0f0a", border: "#1f3b22",
    radius: 0, borderW: 1, cardShadow: "0 0 0 1px #1f3b22",
    fontDisplay: "var(--font-plex-mono), monospace",
    fontBody: "var(--font-plex-mono), monospace",
    labelTransform: "uppercase", labelTracking: "0.15em", labelWeight: 600, labelSize: 11,
    tagBg: "transparent", tagText: "#39ff14", tagBorder: "#1f3b22", tagRadius: 0,
  },
  {
    id: "almanac", name: "The Almanac",
    desc: "Warm kraft paper. Terracotta ink, soft corners, a handmade feel.",
    dark: false, hero: "center", numbered: false,
    bg: "#f4ecd8", surface: "#efe3c9", text: "#3a2e22", muted: "#7a6a55",
    accent: "#c0622d", accentText: "#fff8ef", border: "#d9c9a6",
    radius: 14, borderW: 1, cardShadow: "0 4px 18px rgba(120,80,30,0.10)",
    fontDisplay: "var(--font-baskerville), Georgia, serif",
    fontBody: "var(--font-inter), system-ui, sans-serif",
    labelTransform: "uppercase", labelTracking: "0.18em", labelWeight: 600, labelSize: 11,
    tagBg: "#efe3c9", tagText: "#8a4a22", tagBorder: "#d9c9a6", tagRadius: 999,
  },
  {
    id: "memphis", name: "The Memphis",
    desc: "Loud 80s geometry. Hot pink and teal, bold blocks, colored shadows.",
    dark: false, hero: "left", numbered: false,
    bg: "#fff8f0", surface: "#ffffff", text: "#161527", muted: "#56546b",
    accent: "#ff3d77", accent2: "#22b8b0", accentText: "#ffffff", border: "#161527",
    radius: 8, borderW: 2.5, cardShadow: "5px 5px 0 #22b8b0",
    fontDisplay: "var(--font-archivo-black), sans-serif",
    fontBody: "var(--font-inter), system-ui, sans-serif",
    labelTransform: "uppercase", labelTracking: "0.06em", labelWeight: 700, labelSize: 12,
    tagBg: "#161527", tagText: "#fff8f0", tagBorder: "#161527", tagRadius: 6,
  },
  {
    id: "noir", name: "The Noir",
    desc: "Maximum contrast. Towering type, pure black, a single bleeding-red mark.",
    dark: true, hero: "center", numbered: true,
    bg: "#0b0b0b", surface: "#141414", text: "#f5f5f5", muted: "#9a9a9a",
    accent: "#e10600", accentText: "#ffffff", border: "#2a2a2a",
    radius: 0, borderW: 1, cardShadow: "none",
    fontDisplay: "var(--font-bricolage), 'Archivo Black', sans-serif",
    fontBody: "var(--font-inter), sans-serif",
    labelTransform: "uppercase", labelTracking: "0.3em", labelWeight: 600, labelSize: 11,
    tagBg: "transparent", tagText: "#f5f5f5", tagBorder: "#2a2a2a", tagRadius: 0,
  },
  {
    id: "botanical", name: "The Botanical",
    desc: "Quiet and verdant. Sage greens, airy serifs, the pace of a slow garden.",
    dark: false, hero: "center", numbered: false,
    bg: "#f2f5ee", surface: "#e8efe1", text: "#2c3a2a", muted: "#5f7257",
    accent: "#5a7a4e", accentText: "#f6faf2", border: "#cdd9c4",
    radius: 18, borderW: 1, cardShadow: "0 6px 24px rgba(50,80,40,0.08)",
    fontDisplay: "var(--font-baskerville), Georgia, serif",
    fontBody: "var(--font-inter), system-ui, sans-serif",
    labelTransform: "uppercase", labelTracking: "0.2em", labelWeight: 600, labelSize: 11,
    tagBg: "#e8efe1", tagText: "#42613a", tagBorder: "#cdd9c4", tagRadius: 999,
  },
  {
    id: "dusk", name: "The Dusk",
    desc: "Neon at midnight. Indigo depths, magenta and cyan glow, monospace edges.",
    dark: true, hero: "left", numbered: true,
    bg: "#120f20", surface: "#1a1630", text: "#ece8f8", muted: "#9089b8",
    accent: "#ff4d8d", accent2: "#4dd6ff", accentText: "#120f20", border: "#2e2750",
    radius: 10, borderW: 1, cardShadow: "0 0 22px rgba(255,77,141,0.16)",
    fontDisplay: "var(--font-space-mono), monospace",
    fontBody: "var(--font-inter), system-ui, sans-serif",
    labelTransform: "uppercase", labelTracking: "0.16em", labelWeight: 600, labelSize: 11,
    tagBg: "transparent", tagText: "#4dd6ff", tagBorder: "#2e2750", tagRadius: 6,
  },
  {
    id: "atelier", name: "The Atelier",
    desc: "Refined and sparse. Thin display serif, muted gold, gallery whitespace.",
    dark: false, hero: "center", numbered: false,
    bg: "#fbfbf8", surface: "#f4f3ee", text: "#1c1c1a", muted: "#86827a",
    accent: "#9a7b46", accentText: "#ffffff", border: "#e3e0d6",
    radius: 2, borderW: 1, cardShadow: "none",
    fontDisplay: "var(--font-instrument), Georgia, serif",
    fontBody: "var(--font-inter), system-ui, sans-serif",
    labelTransform: "uppercase", labelTracking: "0.32em", labelWeight: 500, labelSize: 10,
    tagBg: "transparent", tagText: "#9a7b46", tagBorder: "#e3e0d6", tagRadius: 0,
  },
];

export function themeToVars(t: Theme): Record<string, string> {
  return {
    "--bg": t.bg,
    "--surface": t.surface,
    "--text": t.text,
    "--muted": t.muted,
    "--accent": t.accent,
    "--accent-2": t.accent2 ?? t.accent,
    "--accent-text": t.accentText,
    "--border": t.border,
    "--radius": `${t.radius}px`,
    "--border-w": `${t.borderW}px`,
    "--card-shadow": t.cardShadow,
    "--font-display": t.fontDisplay,
    "--font-body": t.fontBody,
    "--label-transform": t.labelTransform,
    "--label-tracking": t.labelTracking,
    "--label-weight": String(t.labelWeight),
    "--label-size": `${t.labelSize}px`,
    "--tag-bg": t.tagBg,
    "--tag-text": t.tagText,
    "--tag-border": t.tagBorder,
    "--tag-radius": `${t.tagRadius}px`,
  };
}

export function getTheme(id: string): Theme {
  return THEMES.find((t) => t.id === id) ?? THEMES.find((t) => t.id === DEFAULT_THEME_ID)!;
}
