import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import AosInit from "./_Components/AosInit";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dropplace - Soluções Logísticas",
  description: "Empodere PMEs e e-commerces com uma plataforma whitelabel flexível para dominar sua logística.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logo.png" />
      </head>
      <body
        className={`${poppins.variable} overflow-x-hidden`}
      >
        <AosInit />
        {children}
      </body>
    </html>
  );
}
