import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Adam Lindholm | Web Developer",
  description: "Portfolio showcasing my work in web development, UX/UI design, and digital strategy.",
  keywords: [
    "web development",
    "UX/UI design",
    "JavaScript",
    "React",
    "Next.js",
    "portfolio",
    "business",
  ],
  author: "Adam Lindholm",
  metadataBase: new URL("https://adam-lindholm.dev"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Adam Lindholm | Web Developer",
    description: "Explore my portfolio featuring web development, UX/UI design, and digital strategy projects.",
    url: "https://adam-lindholm.dev",
    siteName: "Adam Lindholm Portfolio",
    images: [
      {
        url: "/adam-dev.png",
        width: 1200,
        height: 630,
        alt: "Adam Lindholm Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adam Lindholm | Web Developer",
    description: "Explore my portfolio featuring web development, UX/UI design, and digital strategy projects.",
    images: ["/adam-dev.png"], 
  },
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