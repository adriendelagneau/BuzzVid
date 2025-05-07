import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BuzzVid – Stream, Discover, Create",
  description:
    "BuzzVid is a next-gen video platform to stream, upload, and discover content from creators around the world.",
  keywords: [
    "BuzzVid",
    "video streaming",
    "upload videos",
    "video sharing",
    "content creator",
    "YouTube alternative",
    "watch videos",
  ],
  authors: [{ name: "BuzzVid Team", url: "https://buzzVid.app" }],
  creator: "BuzzVid",
  metadataBase: new URL("https://buzzVid.app"),
  openGraph: {
    title: "BuzzVid – Stream, Discover, Create",
    description:
      "Join BuzzVid – the next-gen video platform to share, explore, and create content with a global community.",
    url: "https://buzzVid.app",
    siteName: "BuzzVid",
    images: [
      {
        url: "https://buzzVid.app/og-image.jpg", // Replace with your actual image
        width: 1200,
        height: 630,
        alt: "BuzzVid – Stream and Discover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BuzzVid – Stream, Discover, Create",
    description:
      "Next-gen video sharing platform. Upload, discover, and watch content from creators worldwide.",
    images: ["https://buzzVid.app/og-image.jpg"], // Match OpenGraph image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
