import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "My Portfolio",
  description: "Showcasing my work and projects",
};

export default function Layout({ children }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="antialiased">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
      </body>
    </html>
  );
}