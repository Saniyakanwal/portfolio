"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  // Form states to manage data and loading
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // --- REFRESH ROKNE KE LIYE ---
    setStatus("sending");

    // Yahan aap apni API call (Prisma/Vercel) kar sakti hain
    // Filhal hum simulation kar rahe hain
    setTimeout(() => {
      console.log("Form Data:", formData);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" }); // Form clear karna

      // 3 seconds baad button wapis normal ho jaye ga
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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
              <a
                href="mailto:kanwal0155@gmail.com"
                className="block group cursor-pointer"
              >
                <div>
                  <h4 className="text-white font-bold text-lg group-hover:text-[#f56a6a] transition-colors">
                    Email Me
                  </h4>
                  <p className="text-gray-400 text-sm group-hover:text-white transition-colors">
                    kanwal0155@gmail.com
                  </p>
                </div>
              </a>
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
          </div>

          {/* 2. CONTACT FORM (Right Side) */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/[0.02] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-xl space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Your Name</label>
                <input
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#f56a6a]/50 transition-all text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#f56a6a]/50 transition-all text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Message</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-[#f56a6a]/50 transition-all text-sm resize-none"
              ></textarea>
            </div>

            <button
              disabled={status === "sending" || status === "success"}
              className={`w-full py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group ${status === "success" ? "bg-green-500" : "bg-[#f56a6a]"
                } text-white hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100`}
            >
              {status === "idle" && (
                <>
                  SEND MESSAGE
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
              {status === "sending" && "SENDING..."}
              {status === "success" && (
                <>
                  MESSAGE SENT!
                  <CheckCircle className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

        </div>
      </div>
      {/* Subtle Glow Effect */}
      <div className="absolute -left-20 bottom-0 w-64 h-64 bg-[#f56a6a]/10 blur-[100px] -z-10"></div>
    </section>
  );
}