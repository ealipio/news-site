import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Cod3a News",
  description: "Your News in real time",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-100 transition-all duration-700 dark:bg-zinc-900`}
      >
        <Header />
        <div className="max-w-6xl">{children}</div>
      </body>
    </html>
  );
}
