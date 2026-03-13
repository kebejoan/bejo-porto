import type { Metadata } from "next";
import { Geist, Geist_Mono, Google_Sans, Jersey_15 } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

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
  description: "Industrial grade modern web applications from yours truly",
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
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${googleSans.variable} ${pixelFont.variable} antialiased show-outlines`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
