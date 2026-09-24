import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mahesh Ghamand — Software Engineer (Backend & Cloud Infrastructure)",
  description:
    "Software Engineer specializing in backend systems, distributed storage proxies, Git transport internals, and streaming database pipelines. Creator of S3-Split, Repo Backups, and SQL Backups.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
  },
  keywords: [
    "Mahesh Ghamand",
    "Software Engineer",
    "Backend Engineer",
    "Cloud Infrastructure",
    "Storage Gateway",
    "S3",
    "SigV4",
    "Git Bundles",
    "Database Streaming",
    "Go",
    "TypeScript",
    "PostgreSQL",
  ],
  authors: [{ name: "Mahesh Ghamand", url: "https://mahesh0.dev" }],
  creator: "Mahesh Ghamand",
  openGraph: {
    title: "Mahesh Ghamand — Software Engineer (Backend & Cloud Infrastructure)",
    description:
      "Software Engineer specializing in backend systems, distributed storage proxies, Git transport internals, and streaming database pipelines.",
    url: "https://youngmahesh.vercel.app",
    siteName: "Mahesh Ghamand Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mahesh Ghamand — Software Engineer",
    description:
      "Software Engineer specializing in backend systems, distributed storage proxies, Git transport internals, and streaming database pipelines.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink font-sans selection:bg-primary/20 selection:text-ink">
        {children}
      </body>
    </html>
  );
}
