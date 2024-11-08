import type { Metadata } from "next";
import "./globals.css";
import Footer from "./_components/footer/Footer";
import NextTopLoader from "nextjs-toploader";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#FE595E" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
