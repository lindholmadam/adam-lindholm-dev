"use client";
import Hero from "@/components/Hero";
import ProjectsIntro from "@/components/ProjectsIntro";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollIndicator from "@/components/ScrollIndicator";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HomePage() {
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#projects") {
        const section = document.getElementById("projects");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleHashChange(); 
    window.addEventListener("hashchange", handleHashChange); 

    return () => window.removeEventListener("hashchange", handleHashChange); 
  }, [pathname]); 

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

