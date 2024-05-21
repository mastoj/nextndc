import { Toaster } from "@/components/ui/sonner";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
// // import { GeistMono } from 'geist/font/mono';
// import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextNDC",
  description: "Demo application and slides for NDC Oslo 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
