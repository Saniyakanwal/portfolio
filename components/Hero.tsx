"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage((prev) => !prev);
    }, 2500); // 2.5s interval for smoother feel
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center px-4 overflow-hidden bg-[#030014]">
      
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto">
        
        {/* --- DYNAMIC SLIDE CONTAINER --- */}
        {/* Mobile par height [200px] aur Desktop par [300px] taake layout jump na kare */}
        <div className="relative w-full h-[200px] md:h-[300px] flex items-center justify-center">
          
          {/* 1. NAME */}
          <div
            className={`absolute transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              showImage 
                ? "opacity-0 -translate-x-[120%] blur-lg pointer-events-none" 
                : "opacity-100 translate-x-0 blur-0" 
            }`}
          >
            {/* Font size mobile par 4xl rakha hai taake screen se bahar na jaye */}
            <h1 className="text-5xl sm:text-6xl md:text-[8vw] font-black leading-[0.9] tracking-tighter text-white uppercase">
              SANIYA<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f56a6a] to-[#c8a2c8]">
                KANWAL
              </span>
            </h1>
          </div>

          {/* 2. IMAGE */}
          <div
            className={`absolute transition-all duration-[1000ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
              showImage 
                ? "opacity-100 translate-x-0 blur-0" 
                : "opacity-0 translate-x-[120%] blur-lg pointer-events-none" 
            }`}
          >
            {/* Image size mobile par w-40 aur md par w-64 */}
            <div className="relative w-40 h-40 md:w-64 md:h-64 rounded-full border-[3px] md:border-[4px] border-white/10 p-1 bg-white/5 backdrop-blur-xl shadow-[0_0_50px_rgba(245,106,106,0.2)]">
              <div className="w-full h-full rounded-full overflow-hidden relative border border-white/20">
                <Image
                  src="/my-pic2.jpeg"
                  alt="Saniya Kanwal"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -inset-4 bg-[#f56a6a]/10 blur-3xl -z-10 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* --- PERSISTENT CONTENT --- */}
        <div className="mt-8 md:mt-12 flex flex-col items-center w-full">
          
          {/* Title - Text small on mobile */}
          <h2 className="text-sm md:text-xl lg:text-2xl font-bold tracking-[0.15em] md:tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 uppercase px-2">
             AI Full Stack Developer
          </h2>

          {/* CTA Buttons - Stacked on mobile, side-by-side on md */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto px-6 sm:px-0">
            <a href="#Project" className="w-full sm:w-auto">
              <button className="w-full px-10 py-4 bg-[#f56a6a] text-white font-bold rounded-xl md:rounded-2xl hover:scale-105 transition-all shadow-lg active:scale-95 group overflow-hidden relative">
                 <span className="relative z-10 uppercase tracking-wider text-sm md:text-base">MY WORK</span>
                 <div className="absolute inset-0 bg-white/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </a>   
            <a href="#Contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-10 py-4 border-2 border-white/10 bg-white/5 backdrop-blur-md text-white font-bold rounded-xl md:rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm md:text-base uppercase tracking-wider">
              GET IN TOUCH
            </button>
            </a>
          </div>
        </div>

      </div>

      {/* Depth Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030014_95%)] pointer-events-none"></div>
    </section>
  );
}