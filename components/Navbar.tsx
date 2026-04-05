"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 px-8 py-4 flex justify-between items-center transition-all ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Logo / Name */}
      <Link href="/" className="text-xl font-bold text-yellow-400">
        Saniya Kanwal
      </Link>

      {/* Menu */}
      <div className="flex gap-6 text-white font-medium">
        <Link href="/about" className="hover:text-yellow-400 transition">
          About
        </Link>
        <Link href="#skills" className="hover:text-yellow-400 transition">
          Skills
        </Link>
        <Link href="#projects" className="hover:text-yellow-400 transition">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-yellow-400 transition">
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
