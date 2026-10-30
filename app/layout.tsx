import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/landing/navbar";
import { Footer } from "@/components/landing/footer";

import "./globals.css";

const inter = localFont({
  src: "../public/fonts/inter-latin.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: "../public/fonts/space-grotesk-latin.woff2",
  weight: "300 700",
  style: "normal",
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetBrainsMono = localFont({
  src: "../public/fonts/jetbrains-mono-latin.woff2",
  weight: "100 800",
  style: "normal",
  variable: "--font-jb-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Software Factory — Ship software at the speed of ideas",
  description:
    "Software Factory is an AI-assisted delivery platform that turns product ideas into production software through reusable workflows, agent orchestration, and automated engineering.",
};

export const viewport: Viewport = {
  themeColor: "#0d0913",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
