import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Avery Collins — Frontend Developer",
  description:
    "Portfolio for Avery Collins, a frontend engineer with three years of experience shaping high-performing web experiences with React and Angular.",
  keywords: [
    "frontend developer",
    "React developer",
    "Angular developer",
    "UI engineer",
    "design systems",
    "Next.js",
  ],
  authors: [{ name: "Avery Collins" }],
  openGraph: {
    title: "Avery Collins — Frontend Developer",
    description:
      "Three years building delightful UI platforms with React, Angular, and design systems expertise.",
    url: "https://agentic-5008cb9c.vercel.app",
    siteName: "Avery Collins Portfolio",
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://agentic-5008cb9c.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
