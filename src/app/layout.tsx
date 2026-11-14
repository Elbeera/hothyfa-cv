import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { LanguageProvider } from "@/components/language/LanguageProvider";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});


export const metadata: Metadata = {
  metadataBase: new URL("https://www.hothyfa.co.uk"),

  title:
    "Hothyfa Elbeera | Senior Software Engineer | AI-Enabled Systems",

  description:
    "Hothyfa Elbeera is a Senior Software Engineer with 7+ years of experience in AI-enabled engineering, distributed systems and cloud-native architecture. Currently engineering Justice Redact at the UK Ministry of Justice.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Hothyfa Elbeera | Senior Software Engineer",
    description:
      "AI-enabled software engineering, distributed systems and cloud-native architecture. Explore my experience, engineering projects and AI-powered CV Assistant.",
    url: "https://www.hothyfa.co.uk/",
    siteName: "Hothyfa Elbeera",
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary",
    title:
      "Hothyfa Elbeera | Senior Software Engineer",
    description:
      "AI-enabled engineering, distributed systems and cloud-native architecture.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          // Avoid theme flash before hydration.
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    var theme = localStorage.getItem('theme') || 'system';
    var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = theme === 'dark' || (theme === 'system' && prefersDark);
    document.documentElement.classList.toggle('dark', isDark);
    var language = localStorage.getItem('language') || 'en';
    document.documentElement.lang = language === 'ar' ? 'ar' : 'en';
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  } catch (e) {}
})();`,
          }}
        />
      </head>
      <body
        className={`${tajawal.variable} min-w-[320px] bg-white font-sans text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100`}
      >
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}