"use client";

import { ThemeMode, useTheme } from "./ThemeProvider";

const options: Array<{ id: ThemeMode; label: string }> = [
  { id: "light", label: "Light" },
  { id: "system", label: "System" },
  { id: "dark", label: "Dark" },
];

function ThemeIcon({ mode }: { mode: ThemeMode }) {
  if (mode === "light") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M12 4a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1Zm0 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 2a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm8-8a1 1 0 0 1 1 1v.02a1 1 0 1 1-2 0V12a1 1 0 0 1 1-1ZM3 12a1 1 0 0 1 1 1v.02a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1Zm14.66-5.66a1 1 0 0 1 1.41 0l.01.01a1 1 0 0 1-1.42 1.41l-.01-.01a1 1 0 0 1 0-1.41ZM5.34 16.66a1 1 0 0 1 1.41 0l.01.01a1 1 0 0 1-1.42 1.41l-.01-.01a1 1 0 0 1 0-1.41ZM18 18.97a1 1 0 0 1-.71-.29l-.01-.01a1 1 0 0 1 1.42-1.41l.01.01A1 1 0 0 1 18 18.97ZM6 8a1 1 0 0 1-.71-.29l-.01-.01a1 1 0 0 1 1.42-1.41l.01.01A1 1 0 0 1 6 8Zm6 12a1 1 0 0 1 1 1v.02a1 1 0 0 1-2 0V21a1 1 0 0 1 1-1Z"
        />
      </svg>
    );
  }

  if (mode === "dark") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <path
          fill="currentColor"
          d="M14.5 2.5a1 1 0 0 1 .9 1.41A8.5 8.5 0 1 0 20.1 14.6a1 1 0 0 1 1.4 1A10.5 10.5 0 1 1 13.4 2.1a1 1 0 0 1 1.1.4Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        fill="currentColor"
        d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-4v2h2a1 1 0 1 1 0 2H8a1 1 0 0 1 0-2h2v-2H6a2 2 0 0 1-2-2V5Zm2 0v8h12V5H6Z"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Theme mode"
      className="inline-flex items-center rounded-xl border border-slate-300 bg-white p-1 shadow-sm dark:border-slate-700 dark:bg-slate-950"
    >
      {options.map((option) => {
        const isActive = theme === option.id;

        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={option.label}
            title={option.label}
            onClick={() => setTheme(option.id)}
            className={[
              "inline-flex h-8 items-center justify-center gap-1.5 rounded-lg px-2.5 text-xs font-medium transition",
              "focus:outline-none focus:ring-2 focus:ring-slate-400/40 dark:focus:ring-slate-500/40",
              isActive
                ? "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
            ].join(" ")}
          >
            <ThemeIcon mode={option.id} />
            <span className="hidden sm:inline">{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}

