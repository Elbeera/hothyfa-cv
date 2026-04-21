"use client";

import { useState } from "react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LanguageToggle from "@/components/language/LanguageToggle";
import { useLanguage } from "@/components/language/LanguageProvider";

const arTranslations: Record<string, string> = {
    "Settings": "إعدادات",
};

const navItems = {
    en: [
        { label: "Ask my CV", href: "#ask-my-cv" },
        { label: "Summary", href: "#summary" },
        { label: "Impact", href: "#impact" },
        { label: "Certifications", href: "#certifications" },
        { label: "Experience", href: "#experience" },
        { label: "Strengths", href: "#strengths" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ],
    ar: [
        { label: "اسأل السيرة", href: "#ask-my-cv" },
        { label: "الملخص", href: "#summary" },
        { label: "الأثر", href: "#impact" },
        { label: "الشهادات", href: "#certifications" },
        { label: "الخبرة", href: "#experience" },
        { label: "المهارات", href: "#strengths" },
        { label: "المشاريع", href: "#projects" },
        { label: "التواصل", href: "#contact" },
    ],
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage();
    const items = navItems[language];
    const isArabic = language === "ar";
    const t = (value: string) => (isArabic ? arTranslations[value] ?? value : value);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
            <div className="mx-auto w-full max-w-6xl px-6 py-4 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between">
                    <a
                        href="#"
                        className="text-sm font-semibold tracking-[0.18em] text-slate-900 dark:text-slate-100"
                    >
                        HOTHYFA
                    </a>

                    <nav className="hidden items-center gap-6 md:flex">
                        {items.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <details className="group relative">
                                <summary
                                    className="inline-flex list-none items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-medium !text-white shadow-[0_10px_30px_rgba(15,23,42,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_16px_40px_rgba(15,23,42,0.35)] active:translate-y-0 active:scale-[0.98] dark:bg-slate-100 dark:!text-slate-950 dark:hover:bg-white cursor-pointer [&::-webkit-details-marker]:hidden"
                                >
                                    {t("Settings")}
                                </summary>
                                <div className="absolute z-20 mt-2 min-w-full rounded-xl border border-slate-200 bg-white p-1 shadow-lg dark:border-slate-700 dark:bg-slate-900">
                                    <LanguageToggle />
                                    <ThemeToggle />
                                </div>
                            </details>
                        </div>

                    </nav>

                    <button
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={`inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition md:hidden
                            ${isOpen
                                ? "bg-slate-900 text-white shadow-[0_10px_30px_rgba(15,23,42,0.25)] dark:bg-slate-100 dark:text-slate-950"
                                : "border border-slate-300 text-slate-900 hover:border-slate-900 dark:border-slate-700 dark:text-slate-100 dark:hover:border-slate-300"
                            }
                        `}
                    >
                        {language === "ar" ? "القائمة" : "Menu"}
                    </button>
                </div>

                {isOpen && (
                    <nav className="mt-4 flex flex-col gap-2 border-t border-slate-200 pt-4 dark:border-slate-800 md:hidden">
                        {items.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={handleLinkClick}
                                className="rounded-lg px-2 py-3 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="flex items-center gap-2 px-2 py-2">
                            <LanguageToggle />
                            <ThemeToggle />
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
}