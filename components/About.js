import TechGrid from "./TechGrid";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";

export default function About() {
  return (
    <section className="section text-white items-center">
      <div className="flex align-center justify-center flex-col">
        <FadeInWhenVisible>
          <h2 className="h2-start">Get to know me</h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
        <div className="flex flex-col lg:flex-row lg:gap-16">
            <p className="max-w-3xl text-md/6 text-center mx-auto text-[17px] text-gray-300">
            Hi, I'm a tech enthusiast with a passion for web development and a background in computer and systems sciences and marketing communication. I’m driven by how technology shapes digital business, user experience, and growth. My interests lie at the intersection of development, marketing, and sales, where I enjoy bridging technical and strategic needs. <br/> With my combined background in technology and communication, I thrive in roles that connect development, business, and user experience - solving technical challenges with a strategic mindset to create impactful digital solutions.
            </p>
        </div>
        </FadeInWhenVisible>

        <TechGrid />
      </div>

    </section>
    
  );
}