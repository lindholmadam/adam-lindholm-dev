"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import projectsData from "@/data/projectsData";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { HiCheckCircle } from "react-icons/hi";
import { Button } from "@/components/ui/button";

export default function ProjectCaseStudy() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (slug) {
      const foundProject = projectsData.find((p) => p.slug === slug);
      setProject(foundProject);
    }
  }, [slug]);

  if (!project) {
    return <div className="text-center">Project not found.</div>;
  }

  return (
    <div className="bg-[#080C13] w-full text-white">
      <section className="section min-h-screen flex flex-col items-center pt-20">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="p-p text-lg mt-4">{project.description}</p>

        {/* 1️⃣ Introduction (Overview) */}
        <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 mt-10">
          <div>

            <div className="mt-4">
              <p className="p-p mb-2">
                <strong className="text-white">Role:</strong> {project.role}
              </p>

              <hr className="w-full h-[1px] bg-gray-400 border-0 my-4" />

              <p className="p-p mb-2">
                <strong className="text-white">Year:</strong> {project.year}
              </p>
              <hr className="w-full h-[1px] bg-gray-400 border-0 my-4" />
              {/* <p className="p-p"> */}
              <div className="flex flex-wrap gap-4">
                <strong className="text-white">Tech Stack:</strong>
                {project.techStack.map((tech, index) => {
                  const IconComponent = require("react-icons/si")[tech.icon]; // Dynamisk import av ikonen
                  return (
                    <div key={index} className="flex items-center gap-2">
                      {IconComponent && <IconComponent className="text-xl text-white" />}
                      <span className="text-[9px] text-white">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
              {/* </p> */}
              <hr className="w-full h-[1px] bg-gray-400 border-0 my-4" />
            </div>

            {/* Buttons for Live Demo & GitHub */}
            <div className="flex gap-4 mt-8">
              {project.demoLink && (
                <Button asChild variant="default" className="bg-white text-black hover:bg-gray-200">
                  <Link href={project.demoLink}>Live Demo</Link>
                </Button>
              )}
              {project.githubLink && (
                <Button asChild variant="default" className="bg-white text-black hover:bg-gray-200 flex items-center gap-2 px-4 py-2">
                  <Link href={project.githubLink} className="flex items-center gap-2">
                    Source Code <FaGithub size={20} />
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* YouTube Video */}
          {project.youtubeId && (
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${project.youtubeId}&controls=0&rel=0&modestbranding=1&playsinline=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="no-interaction w-full md:w-[60%] aspect-video rounded-lg shadow-lg"
            ></iframe>
          )}
        </div>

        <div className="w-full max-w-3xl">
          {/* 2️⃣ Introduction */}
          <div className="max-w-3xl mt-16">
            <h2 className="h2-p">Introduction</h2>
            <p className="p-p">{project.introduction}</p>
          </div>

          {/* 3️⃣ Features */}
          <div className="max-w-3xl mt-16">
            <h2 className="h2-p">Features</h2>
            <ul className="p-p ul-p flex flex-col gap-2 list-outside">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <HiCheckCircle className="text-green-500 text-lg" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4️⃣ The Challenge */}
          <div className="max-w-3xl mt-16">
            <h2 className="h2-p">The Challenge</h2>
            <p className="p-p">{project.challenge.text}</p>

            {project.challenge.screenshots?.length > 0 && (
              <div className="mt-6 text-center">
                {project.challenge.screenshots.map((screenshot, index) => (
                  <div key={index} className="mb-6">
                    <Image
                      src={`/${screenshot.src}`}
                      alt={screenshot.description || "Challenge Screenshot"}
                      width={800}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                    {screenshot.description && (
                      <p className="text-gray-400 text-sm mt-2">{screenshot.description}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>


          {/* 5️⃣ The Solution (Dynamisk rendering av sektioner) */}
          <div className="max-w-3xl mt-16">
            <h2 className="h2-p">The Solution</h2>

            {/* Backend Solution */}
            {project.solution.backend && (
              <>
                <h3 className="text-xl font-semibold">Backend</h3>
                <p className="p-p mt-2">{project.solution.backend.text}</p>
                <ul className="p-p ul-p list-disc ml-5">
                  {project.solution.backend.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                {project.solution.backend.screenshots?.length > 0 && (
                <div className="mt-6 text-center">
                  {project.solution.backend.screenshots.map((screenshot, index) => (
                    <div key={index} className="mb-6">
                      <Image
                        src={`/${screenshot.src}`}
                        alt={screenshot.description || "Backend Screenshot"}
                        width={800}
                        height={500}
                        className="rounded-lg shadow-lg"
                      />
                      {screenshot.description && (
                        <p className="text-gray-400 text-sm mt-2">{screenshot.description}</p>
                      )}
                    </div>
                  ))}
                </div>
                )}
              </>
            )}

            {/* Frontend Solution */}
            {project.solution.frontend && (
              <>
                <h3 className="text-xl font-semibold mt-6">Frontend</h3>
                <p className="p-p mt-2">{project.solution.frontend.text}</p>
                <ul className="p-p ul-p list-disc ml-5">
                  {project.solution.frontend.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>

                {project.solution.frontend.screenshots?.length > 0 && (
                  <div className="mt-6">
                    <Image
                      src={`/${project.solution.frontend.screenshots[0]}`}
                      alt="Frontend UI"
                      width={800}
                      height={500}
                      className="rounded-lg shadow-lg"
                    />
                  </div>
                )}
              </>
            )}

            {/* Store Setup */}
            {project.solution.storeSetup && (
              <>
                <h3 className="text-xl font-semibold">Store Setup</h3>
                <p className="p-p mt-2">{project.solution.storeSetup.text}</p>
                <ul className="p-p ul-p list-disc ml-5">
                  {project.solution.storeSetup.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}

            {/* Marketing & Ads */}
            {project.solution.marketing && (
              <>
                <h3 className="text-xl font-semibold mt-6">Marketing & Ads Strategy</h3>
                <p className="p-p mt-2">{project.solution.marketing.text}</p>
                <ul className="p-p ul-p list-disc ml-5">
                  {project.solution.marketing.keyPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* 6️⃣ The Outcome */}
          <div className="max-w-3xl mt-16">
            <h2 className="h2-p">The Outcome</h2>
            <p className="p-p">{project.outcome.text}</p>
            <p className="p-p mt-4">
              <strong>Reflection:</strong> {project.outcome.reflection}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
