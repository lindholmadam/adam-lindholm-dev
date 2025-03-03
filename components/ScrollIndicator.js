"use client";
import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const sections = [
    { id: "hero", label: "Start" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.3; 

      let newActiveSection = sections[0].id; 

      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            newActiveSection = id;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => (e) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hidden md:flex fixed top-1/2 right-4 transform -translate-y-1/2 flex-col gap-10 z-50">
      {sections.map(({ id, label }, index) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={handleClick(id)}
          className="relative flex items-center justify-end text-xs font-light transition-all duration-300"
        >
          <span
            className={`absolute transition-all duration-300 ${
              activeSection === id ? "opacity-0 translate-x-3" : "opacity-100 translate-x-0"
            } text-gray-500`}
          >
            0{index + 1}
          </span>

          <span
            className={`absolute transition-all duration-300 ${
              activeSection === id ? "opacity-100 translate-x-0 text-blue-500" : "opacity-0 -translate-x-3"
            }`}
          >
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
