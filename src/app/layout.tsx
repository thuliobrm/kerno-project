import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import './global.css';

const rubik = Rubik({ 
  subsets: ['latin'],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Férias de julho por aqui",
  description: "Férias de julho no Salinas Maragogi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
