"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full text-white shadow-md z-50 bg-[#0F1523] bg-opacity-80 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logotyp */}
        <Link href="/" className="font-semibold text-lg">
          Adam Lindholm
        </Link>

        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        <ul className="hidden md:flex space-x-6">
          <li><Link href="/#start" className="text-sm hover:text-blue-400">Start</Link></li>
          <li><Link href="/#about" className="text-sm hover:text-blue-400">About</Link></li>
          <li>
            <Link 
              href={pathname.startsWith("/projects/") ? "/#projects" : "#projects"} 
              className="text-sm hover:text-blue-400"
            >
              Projects
            </Link>
          </li>
          <li><Link href="/#contact" className="text-sm hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>

      <div
        className={`fixed top-0 right-0 h-screen w-3/4 bg-gray-900 text-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
          <FaTimes size={24} />
        </button>

        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg">
          <li><Link href="/" onClick={toggleMenu} className="hover:text-blue-400">Start</Link></li>
          <li><Link href="/#about" onClick={toggleMenu} className="hover:text-blue-400">About</Link></li>
          <li>
            <Link 
              href={pathname.startsWith("/projects/") ? "/#projects" : "#projects"} 
              onClick={toggleMenu} 
              className="hover:text-blue-400"
            >
              Projects
            </Link>
          </li>
          <li><Link href="/#contact" onClick={toggleMenu} className="hover:text-blue-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
