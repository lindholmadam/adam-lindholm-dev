"use client";
import Hero from "@/components/Hero";
import ProjectsIntro from "@/components/ProjectsIntro";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ScrollIndicator from "@/components/ScrollIndicator";


export default function HomePage() {

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

