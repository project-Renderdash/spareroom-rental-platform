import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/shared/layout/header";
import { Footer } from "@/components/shared/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpareRoom - Find Your Perfect Room",
  description: "Find rooms to rent or advertise your spare room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 bg-background">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
