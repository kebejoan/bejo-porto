import type { Metadata } from "next";
import {
  Bungee_Hairline,
  DotGothic16,
  Geist,
  Geist_Mono,
  Google_Sans,
  Jacquard_24,
  Jersey_10,
  Jersey_15,
  Jersey_15_Charted,
  Jersey_25,
  Micro_5,
  Pixelify_Sans,
  Press_Start_2P,
  Silkscreen,
  VT323,
} from "next/font/google";
import "./globals.css";
import { dot } from "node:test/reporters";

const googleSans = Google_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pixelFont = Jersey_15({
  variable: "--font-pixel",
  subsets: ["latin"],
  weight: ["400"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kebejoan's Portfolio | Full-Stack Developer",
  description: "This is Kebejoan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden show-outlines"
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${googleSans.className} ${pixelFont.variable} antialiased show-outlines`}
      >
        {children}
      </body>
    </html>
  );
}
