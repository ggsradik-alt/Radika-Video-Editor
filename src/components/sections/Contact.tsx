"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-base border-b border-border-main">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16">

        <div className="max-w-2xl">
          <p className="text-accent-red font-bold tracking-[0.3em] uppercase mb-6">
            {lang === 'id' ? "SIAP MEMULAI?" : "READY TO ROLL?"}
          </p>
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-heading font-bold uppercase tracking-tighter text-text-main mb-8 leading-[0.9]">
            {lang === 'id' ? "MARI KITA" : "LET'S WORK"}<br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--color-text-main)" }}>
              {lang === 'id' ? "BIKIN KEREN." : "TOGETHER."}
            </span>
          </h2>

          <p className="text-lg text-text-muted font-light max-w-md">
            {lang === 'id'
              ? "Punya proyek ambisius? Kirimkan brief Anda, dan mari kita retas algoritma bersama."
              : "Got an ambitious project? Send over your brief, and let's break the algorithm together."}
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full md:w-auto">
          <a
            href="mailto:radikabussines@gmail.com"
            className="group flex items-center justify-between gap-8 border-b-2 border-border-main hover:border-accent-red pb-4 transition-colors w-full md:w-[400px]"
          >
            <div>
              <p className="text-xs font-bold tracking-widest text-text-dim uppercase mb-1">Email</p>
              <p className="text-xl md:text-3xl font-heading font-bold text-text-main group-hover:text-accent-red transition-colors">radikabussines@gmail.com</p>
            </div>
            <ArrowRight size={32} className="text-text-dim group-hover:text-accent-red group-hover:translate-x-2 transition-all" />
          </a>

          <a
            href="https://wa.me/6282244046330"
            className="group flex items-center justify-between gap-8 border-b-2 border-border-main hover:border-accent-red pb-4 transition-colors w-full md:w-[400px]"
          >
            <div>
              <p className="text-xs font-bold tracking-widest text-text-dim uppercase mb-1">WhatsApp</p>
              <p className="text-xl md:text-3xl font-heading font-bold text-text-main group-hover:text-accent-red transition-colors">+62 822-4404-6330</p>
            </div>
            <ArrowRight size={32} className="text-text-dim group-hover:text-accent-red group-hover:translate-x-2 transition-all" />
          </a>
        </div>

      </div>
    </section>
  );
}
