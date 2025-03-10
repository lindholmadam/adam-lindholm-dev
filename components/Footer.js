import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="flex flex-row items-center align-center justify-center text-center gap-5 p-4 bg-gray-900 text-white">
        <p className="text-xs sm:text-base">© {new Date().getFullYear()} Adam Lindholm</p>
        <div className="flex flex-row gap-5">
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
      </footer>
    );
  }