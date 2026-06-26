"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeSwitcher() {
  const { themes, themeId, setThemeId } = useTheme();

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-[0_1px_0_rgba(0,0,0,0.02)]">
      <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center gap-3">
        <div className="flex flex-col leading-tight shrink-0">
          <span className="text-[13px] font-bold text-neutral-900">Pick a vibe</span>
          <span className="text-[11px] text-neutral-400">10 looks · live</span>
        </div>
        <div className="vibe-scroll flex gap-1.5 overflow-x-auto flex-1 pb-0.5">
          {themes.map((t) => {
            const active = t.id === themeId;
            return (
              <button
                key={t.id}
                onClick={() => setThemeId(t.id)}
                title={t.desc}
                aria-pressed={active}
                className="whitespace-nowrap shrink-0 cursor-pointer text-[12.5px] font-semibold px-3.5 py-1.5 rounded-full border transition-colors"
                style={{
                  borderColor: active ? t.accent : "#e0e0e4",
                  background: active ? t.accent : "#ffffff",
                  color: active ? t.accentText : "#55555e",
                }}
              >
                {t.name.replace("The ", "")}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
