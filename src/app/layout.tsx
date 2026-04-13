import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hothyfa | Senior Full Stack Engineer",
  icons: {
    icon: "/favicon.png",
  },
  description:
    "Senior Full Stack Engineer building scalable web platforms, backend APIs, and AI-assisted systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}