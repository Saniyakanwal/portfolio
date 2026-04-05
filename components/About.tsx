"use client";

export default function About() {
  // Aapka naya aur advanced tech stack
  const techStack = [
    "Python",
    "TypeScript",
    "Agentic AI",
    "Prompt Engineering",
    "Sanity CMS",
    "Next.js",
    "Tailwind CSS",
    "Node.js"
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">

      {/* 1. DIRECT ABOUT (No HerWay) */}
      <div className="mb-20">
        <h2 className="text-xs font-bold tracking-[0.4em] text-[#f56a6a] uppercase mb-6 opacity-70">
          / Professional Summary
        </h2>
        <p className="text-2xl md:text-4xl font-medium text-white leading-tight tracking-tight">
          I am a <span className="text-[#c8a2c8]">Full Stack Developer</span> and
          <span className="text-gray-400"> AI Enthusiast</span>. Specialized in AI-Assisted Development: Leveraging cutting-edge models like GPT-4 and Qwen to build high-performance web applications 3x faster. I specialize in building
          intelligent web applications by merging modern frameworks with
          <span className="text-white"> Agentic AI</span> and advanced
          <span className="text-white"> Prompt Engineering</span>.
        </p>
      </div>

      {/* 2. ADVANCED TECH STACK GRID */}
      <div>
        <h2 className="text-xs font-bold tracking-[0.4em] text-[#f56a6a] uppercase mb-10 opacity-70">
          / Specialized Stack
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {techStack.map((item) => (
            <div
              key={item}
              className="group relative p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#c8a2c8]/30 transition-all duration-500 overflow-hidden"
            >
              {/* Subtle Glow Effect on Hover */}
              <div className="absolute inset-0 bg-[#c8a2c8]/5 opacity-0 group-hover:opacity-100 transition-opacity" />

              <span className="relative z-10 text-sm font-semibold text-gray-400 group-hover:text-white transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}