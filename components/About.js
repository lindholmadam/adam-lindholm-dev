import TechGrid from "./TechGrid";
import ProfileImage from "./ProfileImage";

export default function About() {
  return (
    <section className="section text-white items-center">
      <div className="flex align-center justify-center flex-col">
      <h2 className="h2-start">About me<span className="text-orange-500">.</span></h2>

        <div className="flex flex-col lg:flex-row lg:gap-16">
          <p className="max-w-2xl mx-auto decoration-[#dfdfdf]">
          Hi, I'm a web developer with a background in computer and systems sciences and marketing communication. 
          I'm passionate about technology, digital business, and how tech can drive both user experience and business growth. 
          My interests lie at the intersection of development, marketing, and sales, where I enjoy finding solutions that bridge technical and strategic needs. 
          With my mix of technical skills and business understanding, I’m working towards a role as a Solutions Architect, Pre-Sales Engineer, or Product Owner, where I can combine development with a broader strategic perspective.
          </p>
        </div>

        <TechGrid />
      
      </div>

    </section>
    
  );
}