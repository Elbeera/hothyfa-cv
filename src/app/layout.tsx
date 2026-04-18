import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Hothyfa | Senior Software Engineer",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Senior Software Engineer building scalable web platforms, backend APIs, and AI-assisted systems.",
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
  } catch (e) {}
})();`,
          }}
        />
      </head>
      <body className="min-w-[320px] bg-white font-sans text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}