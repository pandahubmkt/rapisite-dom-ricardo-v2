import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bodoniModa = Bodoni_Moda({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Barbearia Dom Ricardo | Premium Barber Shop em Sorocaba",
  description: "Cortes clássicos e modernos, barba, hidratação capilar e tratamentos exclusivos. Ambiente sofisticado com cerveja artesanal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${bodoniModa.variable} ${jost.variable} antialiased bg-background text-text`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
