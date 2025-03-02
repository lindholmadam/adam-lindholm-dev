import { FaJava, FaPython, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiBootstrap, SiMongodb, SiExpress, SiPostman, SiFigma, SiMysql, SiJavascript, SiShopify } from "react-icons/si";

const technologies = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> }, 
  { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-blue-300" /> },
  { name: "Git & GitHub", icon: <FaGit className="text-orange-500" /> },
  { name: "Liquid (Shopify)", icon: <SiShopify className="text-green-500" /> }, 
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "REST APIs", icon: <span className="text-gray-400">🌐</span> },
];

export default function TechGrid() {
  return (
    <section className="max-w-4xl flex flex-col items-center justify-center mt-40">
      <h3 className="text-xl font-medium text-center pb-10 relative z-10">Technologies I've Worked With</h3>
      <div className="inset-0 flex flex-wrap justify-center opacity-3 text-gray-500">
        {technologies.map((tech, index) => (
          <div key={index} className="m-5 flex flex-col items-center text-center text-2xl">
            {tech.icon}
            <span className="text-xs mt-2">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

