"use client";
import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaArrowUp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative py-12 px-6 bg-[#030014] border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-xl font-black text-white tracking-tighter uppercase">
            Saniya <span className="text-[#f56a6a]">Kanwal</span>
          </h3>
          <p className="text-gray-500 text-[10px] mt-1 tracking-widest uppercase">Full Stack Developer</p>
        </div>

        <div className="flex items-center gap-6">
          <a href="https://github.com/Saniyakanwal" className="text-gray-400 hover:text-white transition-colors"><FaGithub size={20} /></a>
          <a href="https://www.linkedin.com/in/saniya-kanwal-72582a250/" className="text-gray-400 hover:text-white transition-colors"><FaLinkedinIn size={20} /></a>
          <a href="https://www.instagram.com/saniy.akanwal?igsh=MTd6aHl1aXpteDU1Yw==" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={20} /></a>
        </div>

        <button onClick={scrollToTop} className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-[#f56a6a]/50 group transition-all">
          <FaArrowUp className="text-gray-400 group-hover:text-[#f56a6a]" size={18} />
        </button>
      </div>

      <div className="mt-12 text-center border-t border-white/5 pt-8">
        <p className="text-gray-600 text-[9px] uppercase tracking-[0.4em]">
          © 2026 Built by Saniya Kanwal • Pakistan
        </p>
      </div>
    </footer>
  );
}