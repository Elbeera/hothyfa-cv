"use client";

import { Language, useLanguage } from "./LanguageProvider";

const options: Array<{ id: Language; label: string; flag: string }> = [
  { id: "en", label: "English", flag: "🇬🇧" },
  { id: "ar", label: "العربية", flag: "🇸🇦" },
];

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="radiogroup"
      aria-label="Language"
      className="inline-flex items-center rounded-xl border border-slate-300 bg-white p-1 shadow-sm dark:border-slate-700 dark:bg-slate-950"
    >
      {options.map((option) => {
        const isActive = option.id === language;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={option.label}
            title={option.label}
            onClick={() => setLanguage(option.id)}
            className={[
              "inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-xs font-medium transition",
              "focus:outline-none focus:ring-2 focus:ring-slate-400/40 dark:focus:ring-slate-500/40",
              isActive
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
            ].join(" ")}
          >
            <span aria-hidden="true" className="text-sm leading-none">
              {option.flag}
            </span>
            <span className="hidden sm:inline">{option.id.toUpperCase()}</span>
          </button>
        );
      })}
    </div>
  );
}

