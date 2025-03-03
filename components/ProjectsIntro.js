import ProjectCard from "@/components/ProjectCard";
import CodePen from "@/components/CodePen";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";



export default function ProjectsIntro() {
  return (
    <section className="section text-white">
      <FadeInWhenVisible>
      <h2 className="h2-start text-center">Selected Projects</h2>
      <p className="text-center max-w-3xl mx-auto mb-10 text-gray-300 text-lg md:text-xl"> 
        A selection of projects showcasing my work in development and digital solutions.
      </p>
      </FadeInWhenVisible>

      <div className="flex flex-col gap-[90px]">
        <ProjectCard 
          title="MERN Authentication System"
          description="A secure and modular authentication system using the MERN stack, featuring JWT for authentication, OAuth integration, and Redux for efficient session management."
          youtubeId="iNfjhBDV0Y8"
          caseStudyLink="/projects/mern-authentication"
          demoLink="https://mern-authentication-hgkc.onrender.com/"
          githubLink="https://github.com/lindholmadam/MERN-Authentication-System"
          techStack={[<SiJavascript />, <SiHtml5 />, <SiCss3 />]}
        />
        <ProjectCard 
          title="E-commerce store"
          description="An automated e-commerce store built on Shopify, designed for efficiency with seamless product management, streamlined order processing, and a data-driven approach to marketing and sales."
          youtubeId="gKGUAbRZ1Hs"
          caseStudyLink="/projects/ecommerce-case-study"
          demoLink="https://nordicasa.se/"
          techStack={[<SiJavascript />, <SiHtml5 />, <SiCss3 />]}
        />

        <ProjectCard 
          title="ART Portfolio & Blog Platform"
          description="A fullstack portfolio and blog platform for an artist, featuring a custom CMS for artwork uploads, blog management, and a simple authentication system."
          youtubeId="3-w4cc1hMyE"
          caseStudyLink="/projects/portfolio-blog-platform"
          demoLink="https://artportfolio-ao0q.onrender.com/"
          githubLink="https://github.com/lindholmadam/artportfolio"
          techStack={[<SiJavascript />, <SiHtml5 />, <SiCss3 />]}
        />

        <ProjectCard 
          title="adam-lindholm.dev"
          description="A modern and minimalistic developer portfolio showcasing my work in web development, UX/UI design, and digital strategy. Built with Next.js and Tailwind CSS."
          caseStudyLink="/projects/adam-lindholm-portfolio"
          githubLink="https://github.com/lindholmadam/adam-lindholm-dev"
          techStack={[<SiJavascript />, <SiHtml5 />, <SiCss3 />]}
          imageSrc="/adam-dev.png"
        />
          <CodePen />
      </div>
    </section>
  );
}