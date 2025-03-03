import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex flex-col gap-5 sm:gap-7">
      <a href="https://www.instagram.com/lindholmadam/" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="socials"/>
      </a>
      <a href="https://github.com/lindholmadam" target="_blank" rel="noopener noreferrer">
        <FaGithub className="socials"/>
      </a>
      <a href="https://www.linkedin.com/in/adam-lindholm-4b731794/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="socials" />
      </a>
    </div>
  );
};

export default SocialIcons;