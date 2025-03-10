"use client";
import { useState, useEffect } from "react";
import SocialIcons from "./SocialIcons";
import ProfileImage from "./ProfileImage";


export default function Hero() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section className="relative section h-screen items-center text-white relative">

    <div className="flex flex-col mb-[4rem] sm:mb-0 sm:flex-row w-full">

      <div className="flex flex-col sm:w-1/2">
        <h1 className="text-xl">Hi, I'm</h1>
        <h1 className="header text-[2.75rem] md:text-[3rem] animate-slide-up mt-2">Adam Lindholm</h1>
        <h1 className="text-sm md:text-md mb-10 sm:mb-20 text-gray-300">
          Tech enthusiast with a passion for web development based in Stockholm, Sweden.
        </h1>
        <div className="mt-1 mb-2">
          <SocialIcons/>
        </div>
      </div>

      <div className="flex justify-center sm:w-1/2 sm:self-center sm:pl-[4rem]">
        <ProfileImage />
      </div>

    </div>

      <div
        className={`absolute bottom-[-20px] flex flex-col items-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="animate-pulse text-gray-600 text-sm tracking-widest uppercase mb-2">
          Scroll
        </span>
        <div className="animate-pulse w-[1px] h-[8rem] bg-gray-600"></div>
      </div>
    </section>
  );
}
