import type { Metadata } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";

import { person } from "@/lib/data";

import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#05060b", // Matches --background
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Anjali Singh | Computer Science Engineer",
  description: "Computer Science Engineering student focused on AI, full-stack development, and computer vision.",
  keywords: ["Anjali Singh", "Developer Portfolio", "AI", "Full Stack", "Computer Vision", "Software Engineer"],
  authors: [{ name: "Anjali Singh" }],
  openGraph: {
    title: "Anjali Singh | Computer Science Engineer",
    description: "Computer Science Engineering student focused on AI, full-stack development, and computer vision.",
    url: "https://anjalisingh.dev", // Using a placeholder since a live URL isn't verified
    siteName: "Anjali Singh Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
