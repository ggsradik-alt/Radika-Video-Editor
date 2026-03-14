"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { lang } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20">
      {/* Background Image/Video Grid */}
      <div className="absolute top-0 right-0 w-full md:w-2/3 h-full z-0">
        <div className="w-full h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=2000" 
            alt="Director" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          {/* Gradient overlay to blend left side */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, var(--color-base), color-mix(in srgb, var(--color-base) 80%, transparent), transparent)' }}></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start mt-20 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-2 mb-6 md:mb-10">
            <div className="w-3 h-3 rounded-full bg-accent-red animate-pulse"></div>
            <span className="text-xs md:text-sm uppercase tracking-[0.3em] font-semibold text-accent-red">
              {lang === 'id' ? "REC • Tersedia untuk Proyek" : "REC • OPEN FOR PROJECTS"}
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-[8rem] leading-[0.85] font-heading font-bold uppercase tracking-tighter text-text-main mb-6 md:mb-0 dark:mix-blend-difference hover:text-accent-red transition-colors duration-500 break-words">
            RADIKA<br />PUTRA<br />PRATAMA
          </h1>
          
          <div className="md:-mt-4 ml-0 md:ml-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-accent-red mt-6">
              {lang === 'id' ? "Editor Video Profesional" : "Professional Video Editor"}
            </h2>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12 md:mt-16 max-w-lg"
        >
          <p className="text-sm md:text-lg text-text-muted leading-relaxed mb-10">
            {lang === 'id' 
              ? "Mengubah rekaman mentah menjadi cerita visual yang menarik dengan penyuntingan kreatif, grafik gerak, dan gradasi warna." 
              : "Transforming raw footage into compelling visual stories with creative editing, motion graphics, and color grading."}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a 
              href="#portfolio" 
              className="w-full sm:w-auto px-8 py-2.5 rounded-full bg-accent-red text-white text-sm font-semibold tracking-wide hover:bg-white hover:text-accent-red transition-colors text-center"
            >
              {lang === 'id' ? "Lihat Portofolio" : "View Portfolio"}
            </a>
            
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-2.5 rounded-full border border-text-main text-text-main text-sm font-semibold tracking-wide hover:bg-text-main hover:text-base transition-colors text-center"
            >
              {lang === 'id' ? "Hubungi Saya" : "Contact Me"}
            </a>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
