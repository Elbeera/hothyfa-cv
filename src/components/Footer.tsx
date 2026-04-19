"use client";

import { useLanguage } from "@/components/language/LanguageProvider";

export default function Footer() {
    const { language } = useLanguage();
    const isArabic = language === "ar";

    return (
      <footer className="border-t border-slate-200 px-6 py-8 sm:px-8 lg:px-12 dark:border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {isArabic
              ? `© ${new Date().getFullYear()} هذيفة البعيرة. جميع الحقوق محفوظة.`
              : `© ${new Date().getFullYear()} Hothyfa Elbeera. All rights reserved.`}
          </p>
  
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {isArabic ? "مهندس برمجيات أول" : "Senior Software Engineer"}
          </p>
        </div>
      </footer>
    );
  }