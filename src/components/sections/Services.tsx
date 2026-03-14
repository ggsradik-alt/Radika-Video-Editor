"use client";

import { motion } from "framer-motion";
import { Scissors, Palette, PlaySquare, Workflow } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { lang } = useLanguage();

  const services = {
    id: [
      { id: "01", title: "EDITING RETENSI", desc: "Shorts, Reels, dan TikTok dengan transisi cepat & retensi tinggi.", icon: Scissors },
      { id: "02", title: "IKLAN KOMERSIAL", desc: "Video dinamis dan menggugah untuk mendorong angka penjualan langsung.", icon: PlaySquare },
      { id: "03", title: "COLOR GRADING", desc: "Koreksi warna ala sinema untuk visual brand kelas atas yang otentik.", icon: Palette },
      { id: "04", title: "POST-PRODUKSI", desc: "Alur kerja kreatif dan teknis secara menyeluruh dari kasar hingga final.", icon: Workflow },
    ],
    en: [
      { id: "01", title: "RETENTION EDITING", desc: "Fast-paced Shorts, Reels, and TikToks designed to kill the scroll.", icon: Scissors },
      { id: "02", title: "COMMERCIAL ADS", desc: "High-impact, dynamic video assets that drive direct response sales.", icon: PlaySquare },
      { id: "03", title: "COLOR GRADING", desc: "Cinematic color manipulation to establish premium brand aesthetics.", icon: Palette },
      { id: "04", title: "POST-PRODUCTION", desc: "End-to-end creative and technical workflow from rough cut to final delivery.", icon: Workflow },
    ]
  };

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-base">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <div>
            <span className="text-accent-red text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
              {lang === 'id' ? "Keahlian" : "Expertise"}
            </span>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight text-text-main">
              {lang === 'id' ? "LAYANAN" : "SERVICES"}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24 border-t border-border-main pt-12 md:pt-16">
          {services[lang].map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="flex gap-6 items-start">
                <div className="text-3xl md:text-5xl font-heading font-bold text-text-dim group-hover:text-accent-red transition-colors duration-500">
                  {service.id}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold uppercase text-text-main tracking-wider mb-4 group-hover:text-accent-red transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-muted font-light leading-relaxed max-w-sm">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
