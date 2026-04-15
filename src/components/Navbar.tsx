"use client";

import { useState } from "react";

const navItems = [
    { label: "Summary", href: "#summary" },
    { label: "Impact", href: "#impact" },
    { label: "Certifications", href: "#certifications" },
    { label: "Experience", href: "#experience" },
    { label: "Strengths", href: "#strengths" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
            <div className="mx-auto w-full max-w-6xl px-6 py-4 sm:px-8 lg:px-12">
                <div className="flex items-center justify-between">
                    <a
                        href="#"
                        className="text-sm font-semibold tracking-[0.18em] text-slate-900"
                    >
                        HOTHYFA
                    </a>

                    <nav className="hidden gap-6 md:flex">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm text-slate-600 transition hover:text-slate-900"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    <button
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={`inline-flex items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition md:hidden
                            ${isOpen
                                ? "bg-slate-900 text-white shadow-[0_10px_30px_rgba(15,23,42,0.25)]"
                                : "border border-slate-300 text-slate-900 hover:border-slate-900"
                            }
                        `}
                    >
                        Menu
                    </button>
                </div>

                {isOpen && (
                    <nav className="mt-4 flex flex-col gap-2 border-t border-slate-200 pt-4 md:hidden">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={handleLinkClick}
                                className="rounded-lg px-2 py-3 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}