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
    <section className="relative section h-screen items-center text-white relative ">

    <div className="flex flex-col sm:flex-row w-full">

      <div className="flex flex-col sm:w-1/2">
        <h1 className="text-md animate-fade-in mb-3">Hi, I'm</h1>
        <h1 className="font-bold text-4xl mb-5">Adam Lindholm</h1>
        <p className="text-md animate-slide-up mb-10 sm:mb-20">
          Web developer and tech enthusiast based in Stockholm, Sweden.
        </p>
        <SocialIcons />
      </div>

      <div className="flex justify-center sm:w-1/2">
        <ProfileImage />
      </div>

    </div>

      <div
        className={`absolute bottom-[-20px] flex flex-col items-center transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="text-gray-400 text-sm tracking-widest uppercase mb-2 animate-pulse">
          Scroll
        </span>
        <div className="w-[1px] h-[7rem] bg-gray-600"></div>
      </div>
    </section>
  );
}
