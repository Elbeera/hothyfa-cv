import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="min-w-[320px] bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}