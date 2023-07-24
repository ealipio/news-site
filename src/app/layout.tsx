import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import { Providers } from "./providers";
import "./globals.css";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <main className="bg-gray-100 transition-all duration-700 dark:bg-zinc-900">
            <Header />
            <div className="mx-auto max-w-6xl">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
