import type { Metadata } from "next";
import { Cormorant_Infant, Roboto, Yantramanav } from "next/font/google";
import "./globals.css";
import { useUpdateProducts } from "@/hooks/useUpdateProducts";
import NavigateProvider from "@/store/providers/NavigateProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorantInfant = Cormorant_Infant({
  subsets: ["latin"],
  variable: "--font-cormorant-infant",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const yantramanav = Yantramanav({
  subsets: ["latin"],
  variable: "--font-yantramanav",
  weight: "100",
});

export const metadata: Metadata = {
  title: "Calor Stitches",
  description: "Calor Stitches offers unique handmade clothing. Shop our latest collection of t-shirts, outerwears, activewears, jeans, dresses, sweaters, singlets, bags",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useUpdateProducts();

  return (
    <html lang="en">
      <NavigateProvider>
        <body className={`${cormorantInfant.variable} ${roboto.variable} ${yantramanav.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </NavigateProvider>
    </html>
  );
}
