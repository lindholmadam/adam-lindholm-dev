import ProjectCard from "@/components/ProjectCard";
import CodePen from "@/components/CodePen";
import { SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";



export default function ProjectsIntro() {
  return (
    <section className="section text-white">
      <h2 className="h2-start text-center">Featured Projects</h2>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
        Here are some of the selected projects that showcase my passion for front-end development.
      </p>

      {/* Lista med projektkort */}
      <div className="flex flex-col gap-[90px]">
        <ProjectCard 
          title="MERN Authentication System"
          description="A secure and modular authentication system using the MERN stack, featuring JWT for authentication, OAuth integration, and Redux for efficient session management."
          youtubeId="iNfjhBDV0Y8"
          caseStudyLink="http://localhost:3000/projects/mern-authentication"
          demoLink="https://mern-authentication-hgkc.onrender.com/"
          githubLink="#"
          techStack={[<SiJavascript />, <SiHtml5 />, <SiCss3 />]}
        />

        <ProjectCard 
          title="E-commerce store"
          description="An automated e-commerce store built on Shopify, designed for efficiency with seamless product management, streamlined order processing, and a data-driven approach to marketing and sales."
          youtubeId="gKGUAbRZ1Hs"
          caseStudyLink="http://localhost:3000/projects/ecommerce-case-study"
          demoLink="https://nordicasa.se/"
          techStack={[<SiJavascript />, <SiHtml5 />, <SiCss3 />]}
        />

        <ProjectCard 
          title="ART Portfolio & Blog Platform"
          description="A fullstack portfolio and blog platform for an artist, featuring a custom CMS for artwork uploads, blog management, and a simple authentication system."
          youtubeId="3-w4cc1hMyE"
          caseStudyLink="http://localhost:3000/projects/portfolio-blog-platform"
          demoLink="https://artportfolio-ao0q.onrender.com/"
          githubLink="#"
          techStack={[<SiJavascript />, <SiHtml5 />, <SiCss3 />]}
        />

        <ProjectCard 
          title="This portfolio website"
          description="Denna portfoliowebbplats byggd med Next.js och Tailwind CSS."
          youtubeId="YOUR_YOUTUBE_VIDEO_ID"
          caseStudyLink="#"
          demoLink="#"
          githubLink="#"
          techStack={[<SiJavascript />, <SiHtml5 />, <SiCss3 />]}
        />
        <CodePen />
      </div>
    </section>
  );
}