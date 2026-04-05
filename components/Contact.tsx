"use client";
import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="Contact" className="relative py-20 px-6 bg-[#030014] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter">
            Get In <span className="text-[#f56a6a]">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-md text-sm md:text-base">
            Have a project in mind? Let&apos;s build something legendary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* 1. CONTACT INFO (Left Side) */}
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#f56a6a]/50 transition-colors">
                <Mail className="w-6 h-6 text-[#f56a6a]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Email Me</h4>
                <p className="text-gray-400 text-sm">kanwal0155@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#c8a2c8]/50 transition-colors">
                <Phone className="w-6 h-6 text-[#c8a2c8]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Call / WhatsApp</h4>
                <p className="text-gray-400 text-sm">+92 347 7212290</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#f56a6a]/50 transition-colors">
                <MapPin className="w-6 h-6 text-[#f56a6a]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Location</h4>
                <p className="text-gray-400 text-sm">Pakistan (Available for Remote Work)</p>
              </div>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute -left-20 bottom-0 w-64 h-64 bg-[#f56a6a]/10 blur-[100px] -z-10"></div>
          </div>

          {/* 2. CONTACT FORM (Right Side) */}
          <form className="bg-white/[0.02] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Your Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#f56a6a]/50 transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#f56a6a]/50 transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
              <textarea 
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#f56a6a]/50 transition-all text-sm resize-none"
              ></textarea>
            </div>

            <button className="w-full py-4 bg-[#f56a6a] text-white font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
              SEND MESSAGE
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}