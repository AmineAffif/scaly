import type { Metadata } from "next";
import { Instrument_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif-display",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans-body",
});

export const metadata: Metadata = {
  title: "Scaly | Agrandissez vos images par IA, sans perte",
  description:
    "Scaly agrandit et restaure vos images par IA : jusqu'à 4× la résolution d'origine, prêtes pour l'impression comme pour la vente. 10 images offertes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} font-body`}
      >
        {children}
      </body>
    </html>
  );
}
