import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { CartProvider } from '@/app/components/cartcheck'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hackathon-3",
  description: "Emad`s Bandage Clothing Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
