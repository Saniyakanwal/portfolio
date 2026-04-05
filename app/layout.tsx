import ChatBot from "@/components/Chatbot";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030014] text-white antialiased min-h-screen overflow-y-auto overflow-x-hidden">
        
        <div className="fixed inset-0 -z-50 h-full w-full pointer-events-none overflow-hidden">
          
          {/* Layer 1: The Deep Glow (Lavender) */}
          <div className="absolute top-[-10%] left-[-10%] h-[800px] w-[800px] rounded-full bg-[#c8a2c8]/10 blur-[120px] animate-fluid"></div>
          
          {/* Layer 2: The Warm Glow (HerWay Coral) */}
          <div className="absolute bottom-[-10%] right-[-10%] h-[900px] w-[900px] rounded-full bg-[#f56a6a]/10 blur-[150px] animate-fluid-delayed"></div>
          
          {/* Layer 3: Central Highlight */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] bg-purple-900/5 blur-[100px] rounded-full"></div>

          {/* Layer 4: Professional Dot Grid */}
          <div className="absolute inset-0 h-full w-full opacity-20 [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]"></div>

          {/* Layer 5: Dark Vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#030014_80%)]"></div>
          
          {/* Layer 6: The Noise Texture */}
          <div className="noise-layer opacity-20"></div>
        </div>

        {/* 2. Main Content Container (Isay scrollable hona chahiye) */}
        <main className="relative z-10 w-full flex flex-col">
          {children}
        </main>
      <ChatBot/>
      </body>
    </html>
  );
}