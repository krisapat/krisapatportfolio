import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navber";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "KrisapatPortfolio",
  description: "KrisapatPortfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body>
    <Navbar />
      {children}
      <Footer />
  </body>
    </html >
  );
}
