"use client";
import Hero from "@/components/Hero";
import ProjectsIntro from "@/components/ProjectsIntro";
import Codepen from "@/components/CodePen";
import About from "@/components/About";
import TechGrid from "@/components/TechGrid";
import Contact from "@/components/Contact";
import ScrollIndicator from "@/components/ScrollIndicator";

import { useEffect } from "react";
import { usePathname } from "next/navigation"; // Rätt import för App Router

export default function HomePage() {
  const pathname = usePathname(); // Hämta nuvarande sökväg

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#projects") {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashChange(); // Kör direkt vid sidladdning om hash finns
    window.addEventListener("hashchange", handleHashChange); // Lyssna på hashändringar

    return () => window.removeEventListener("hashchange", handleHashChange); // Städa upp eventlistener
  }, [pathname]); // Uppdatera vid sidbyte

  return (
    <>
      <ScrollIndicator />
      <section id="start" className="bg-gradient-to-b from-gray-900 to-black w-full">
        <Hero />
      </section>
      <section id="about" className="bg-gradient-to-b from-black to-gray-900 w-full">
        <About />
      </section>
      <section id="projects" className="bg-gradient-to-b from-gray-900 to-black w-full">
        <ProjectsIntro />
      </section>
      <section id="contact" className="bg-gradient-to-b from-black to-gray-900 w-full">
        <Contact />
      </section>
    </>
  );
}

