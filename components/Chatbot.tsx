"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane, FaMinus } from "react-icons/fa";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I am saniya kanwal assistant!" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new message arrives
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    const userText = input;
    setInput("");
    setIsTyping(true);

    try {
      // Hum direct API call kar rahe hain (Abhi bina database ke check karne ke liye)
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: "bot", text: data.reply }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "bot", text: "Sorry, Connection issue." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#f56a6a] p-4 rounded-full shadow-2xl text-white hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        {isOpen ? <FaMinus size={24} /> : <FaRobot size={24} className="group-hover:rotate-12" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[320px] sm:w-[360px] h-[480px] bg-[#030014]/95 backdrop-blur-xl border border-white/10 rounded-[2rem] flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in duration-300">
          
          {/* Header */}
          <div className="p-5 bg-gradient-to-r from-[#f56a6a] to-[#c8a2c8] text-white">
            <h3 className="font-bold text-sm tracking-wide">Saniya AI Assistant</h3>
            <p className="text-[10px] opacity-80">Online | Ask me anything</p>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-xs leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-[#f56a6a] text-white rounded-tr-none' 
                  : 'bg-white/10 text-gray-200 border border-white/5 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="text-[10px] text-gray-500 italic ml-2 animate-pulse">AI is thinking...</div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/5 bg-white/[0.02]">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1 focus-within:border-[#f56a6a]/50 transition-colors">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my projects..."
                className="flex-1 bg-transparent py-2 text-white text-xs outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="text-[#f56a6a] hover:text-white transition-colors disabled:opacity-30"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}