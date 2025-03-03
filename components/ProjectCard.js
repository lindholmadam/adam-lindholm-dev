import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function ProjectCard({ 
  title, 
  description, 
  youtubeId, 
  caseStudyLink, 
  demoLink, 
  githubLink
}) {

  return (
    <section className="project-wrapper">
      <FadeInWhenVisible>
      <div className="project-content">
        <div className="project-detail">
          <div className="project__detail-container">
            <h3 className="text-xl font-bold mb-5">{title}</h3>
            <p>{description}</p>

            {/* Länkar och knappar */}
            <div className="project-links">
              {caseStudyLink && (
                <Button asChild variant="default">
                  <Link href={caseStudyLink}>Case Study</Link>
                </Button>
              )}
              {demoLink && (
                <Button asChild variant="default">
                  <Link href={demoLink} target="_blank">Live Demo</Link>
                </Button>
              )}
              {githubLink && (
                <Button asChild variant="default" className="github-button ">
                  <Link href={githubLink} target="_blank"><FaGithub size={20} /></Link>
                </Button>
              )}
            </div>
          </div>
        </div>

        <div className="project-preview">
          <div className="iframe-wrapper">
            <iframe 
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&rel=0&modestbranding=1&playsinline=1`} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="no-interaction"
            ></iframe>
          </div>
        </div>
      </div>
      </FadeInWhenVisible>
    </section>
  );
}