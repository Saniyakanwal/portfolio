"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

// 1. UPDATE YOUR PROJECTS DATA HERE
const projects = [
  {
    title: "Rida Fatima Studio",
    description: "A premium creative agency platform designed for high-end digital storytelling and client acquisition.",
    tech: ["UI/UX Design", "Brand Identity","AI tool"],
    image: "/rida-fatima.png", 
    link: "https://rida-fatima-studio.durable.site/",
  },
  {
    title: "The Sports Universe",
    description: "A high-performance blog platform built with Next.js, featuring dynamic content management.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Sanity"],
    image: "/sport.png",
    link: "https://sport-universe.netlify.app/", 
  },
  {
    title: "A high-speed, feature-rich online shopping experience",
    description: "A high-performance online store with dynamic product grids and mobile-first responsive design.",
    tech: ["Python", "E-commerce", "Prompt Engineering"],
    image: "/e commerce.png",
    link: "https://v0-e-commerce-website-with-next-js-pi.vercel.app/",
  },
  {
    title: "A high-conversion digital menu and dining experience",
    description: "A premium restaurant landing page with a dynamic menu and high-impact visual storytelling.",
    tech: ["Next.js", "Tailwind CSS", "Responsive Design", "prompt engineering"],
    image: "/resturant.png",
    link: "https://v0-restaurant-landing-page-psi-two.vercel.app/",
  },
  {
    title: "Futuristic landing page showcasing AI and robotics intersection",
    description: "A futuristic landing page showcasing the intersection of robotics and artificial intelligence with a sleek dark-mode UI.",
    tech: ["AI-Driven-Development", "Prompt Engineering","Qwen"],
    image: "/book.png",
    link: "https://physical-ai-book-psi.vercel.app/",
  },
  {
    title: "A high-performance event management and showcase platform",
    description: "A high-performance event management platform designed for streamlined hackathon registrations and dynamic project showcases",
    tech: ["Next.js", "Tailwind CSS", "TypeScript","Figma"],
    image: "/food.png",
    link: "https://hackaton-nextjs.vercel.app/"
  }
];

export default function Projects() {
  
  // ANIMATION: Fade In and Slide Up from Bottom
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section id="Project" className="py-24 px-6 max-w-7xl mx-auto">
      
      {/* SECTION HEADER (Animated) */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-xs font-bold tracking-[0.4em] text-[#f56a6a] uppercase mb-4 opacity-70">
          / Featured Work
        </h2>
        <h3 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
          PROJECTS <span className="text-[#c8a2c8]">SHOWCASE</span>
        </h3>
      </motion.div>

      {/* PROJECTS GRID (Animated Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: index * 0.15 }} // Cascading delay effect
            
            // Interaction on Hover
            whileHover={{ y: -10, scale: 1.01 }}
            
            className="group relative overflow-hidden rounded-[1.5rem] bg-white/[0.01] border border-white/5 hover:border-[#c8a2c8]/30 transition-all duration-500 backdrop-blur-sm flex flex-col h-full"
          >
            
            {/* 1. IMAGE AREA (Highly Interactive) */}
            {/* 1. IMAGE CONTAINER */}
<div className="relative h-50 w-full overflow-hidden bg-gray-900 border-b border-white/5">
  
  {/* Project Screenshot */}
  <img 
    src={project.image || "/placeholder.jpg"} 
    alt={project.title}
    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
  />

  {/* Optional: Dark Overlay for better text contrast */}
  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
</div>

            {/* 2. PROJECT DETAILS */}
            <div className="p-8 lg:p-10 flex flex-col justify-between flex-grow">
              <div>
                {/* Title */}
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#c8a2c8] transition-colors duration-300">
                  {project.title}
                </h4>
                
                {/* Description (Max 2 lines) */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-gray-300 tracking-tight">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link (Always at Bottom) */}
              <a 
                href={project.link} 
                target="_blank" // Opens in new tab
                rel="noopener noreferrer" // Essential for security
                className="inline-flex items-center text-xs font-bold text-white uppercase tracking-widest gap-2 group-hover:gap-4 transition-all"
              >
                View Live Project <span className="text-[#f56a6a]">→</span>
              </a>
            </div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}