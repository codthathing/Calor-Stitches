import type { Metadata } from "next";
import { Cormorant_Infant, Roboto, Yantramanav } from "next/font/google";
import "./globals.css";
import NavigateProvider from "@/store/providers/NavigateProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageLayout from "@/components/layout/PageLayout";
import NewsSection from "@/components/news-letter/NewsSection";
import PageComponents from "@/components/layout/PageComponents";
import { ReactNode } from "react";

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
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Calor Stitches",
  description: "Calor Stitches offers unique handmade clothing. Shop our latest collection of t-shirts, outerwears, activewears, jeans, dresses, sweaters, singlets, bags",
};

export default function RootLayout({
  children,
  auth_modal,
  user_modal,
  preview_modal,
}: Readonly<{
  children: ReactNode;
  auth_modal: ReactNode;
  user_modal: ReactNode;
  preview_modal: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorantInfant.variable} ${roboto.variable} ${yantramanav.variable}`}>
        <NavigateProvider>
          <PageLayout>
            <Header />
            {children}
            {auth_modal}
            {user_modal}
            {preview_modal}
            <NewsSection />
            <PageComponents />
            <Footer />
          </PageLayout>
        </NavigateProvider>
      </body>
    </html>
  );
}
