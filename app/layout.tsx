import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Index";
import { Footer } from "@/components/Index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "KingVac Rentals",
  description: "Take a ride with your favourite cars ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
