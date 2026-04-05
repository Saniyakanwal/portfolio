"use client";

export default function AnimatedBg() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#02000a] overflow-hidden">
      {/* Glow 1: HerWay Lavender */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[#c8a2c8]/20 blur-[120px] animate-pulse opacity-50"></div>
      
      {/* Glow 2: Deep Coral/Red Accent */}
      <div className="absolute bottom-[10%] right-[-5%] w-[60%] h-[60%] rounded-full bg-[#f56a6a]/15 blur-[150px] animate-bounce-slow opacity-40"></div>

      {/* The "Professional Grid" Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
        style={{ 
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '50px 50px' 
        }}
      ></div>

      {/* The Noise/Grain Filter (This makes it look "Acha") */}
      <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-screen bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Radial Gradient for Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#02000a_90%)]"></div>
    </div>
  );
}