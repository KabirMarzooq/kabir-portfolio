import type { Metadata } from "next";
import {
  Playfair_Display,
  Libre_Baskerville,
  Space_Mono,
  IBM_Plex_Mono,
  Archivo_Black,
  Inter,
  Bricolage_Grotesque,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { THEMES, themeToVars, DEFAULT_THEME_ID } from "@/lib/themes";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const baskerville = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-baskerville" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono" });
const archivoBlack = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-archivo-black" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", variable: "--font-instrument" });

const fontVars = [
  playfair, baskerville, spaceMono, plexMono,
  archivoBlack, inter, bricolage, instrument,
].map((f) => f.variable).join(" ");

export const metadata: Metadata = {
  title: "Marzooq Kabir — Developer",
  description: "Computer Engineering student & full-stack developer. Ten looks, one portfolio.",
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
};

const VAR_MAP = Object.fromEntries(THEMES.map((t) => [t.id, themeToVars(t)]));
const initScript = `(function(){try{
var id=localStorage.getItem('portfolio-theme')||'${DEFAULT_THEME_ID}';
var map=${JSON.stringify(VAR_MAP)};
var vars=map[id]||map['${DEFAULT_THEME_ID}'];
var root=document.documentElement;
for(var k in vars)root.style.setProperty(k,vars[k]);
root.setAttribute('data-theme',id);
}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVars} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: initScript }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
