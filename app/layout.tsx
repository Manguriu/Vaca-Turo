import type { Metadata } from "next";
import { Navbar } from "@/components/Index";
import { Footer } from "@/components/Index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { CarDetailsProvider } from "./CarDetails/content/CarDetailsContext";

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
        <Navbar userName={""} />
        <CarDetailsProvider>{children}</CarDetailsProvider>
        <Footer />
      </body>
    </html>
  );
}
