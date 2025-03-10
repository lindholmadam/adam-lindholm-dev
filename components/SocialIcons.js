import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex flex-col gap-5 sm:gap-7 w-fit">
      <a href="https://www.instagram.com/lindholmadam/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="hover:scale-110 text-xl hover:text-blue transition-colors rounded-lg instagram"/>
      </a>
      <a href="https://github.com/lindholmadam" target="_blank" rel="noopener noreferrer">
        <FaGithub className="hover:scale-110 text-xl hover:text-blue transition-colors"/>
      </a>
      <a href="https://www.linkedin.com/in/adam-lindholm-4b731794/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="hover:scale-110 text-xl hover:text-blue transition-colors text-[#578FCA]"/>
      </a>
    </div>
  );
};

export default SocialIcons;