"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function ProjectCard({ 
  title, 
  description, 
  youtubeId,
  imageSrc,
  caseStudyLink, 
  demoLink, 
  githubLink
}) {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigation = (e) => {
    e.preventDefault();
    setIsNavigating(true); 

    setTimeout(() => {
      router.push(caseStudyLink);
    }, 800); 
  };

  return (
    <section className="project-wrapper relative">
      <FadeInWhenVisible>
        <div className="project-content">
          <div className="project-detail">
            <div className="project__detail-container">
              <h3 className="text-2xl font-bold mb-5">{title}</h3>
              <p className="text-gray-800">{description}</p>

              {/* Länkar och knappar */}
              <div className="project-links">
                {caseStudyLink && (
                  <Button onClick={handleNavigation} variant="default">
                    Case Study
                  </Button>
                )}
                {demoLink && (
                  <div className="flex flex-col items-start items-center">
                    <Button asChild variant="default">
                      <Link href={demoLink} target="_blank">Live Demo</Link>
                    </Button>

                    {/* Visar "Slow Bootup" för specifika projekt baserat på titeln */}
                    {(title === "MERN Authentication System" || title === "ART Portfolio & Blog Platform") && (
                      <span className="text-xs text-gray-500 mt-1">
                        (Slow Bootup)
                      </span>
                    )}
                  </div>
                )}
                {githubLink && (
                  <Button asChild variant="default" className="github-button">
                    <Link href={githubLink} target="_blank"><FaGithub size={20} /></Link>
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Video eller Bild */}
          <div className="project-preview md:rounded-lg relative">
            {youtubeId ? (
              <div className="iframe-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&rel=0&modestbranding=1&playsinline=1`} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="no-interaction"
                ></iframe>
              </div>
            ) : (
              <div className="w-full aspect-video overflow-hidden relative">
                <Image 
                  src={imageSrc} 
                  alt={title} 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Svart overlay-animation (bara sveper in) */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-[#080C13] z-50"
          />
        )}
      </AnimatePresence>
    </section>
  );
}
