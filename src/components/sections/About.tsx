"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const skills = [
  { name: "PREMIERE PRO", level: "70%" },
  { name: "LIGHTROOM", level: "90%" },
  { name: "PHOTOSHOP", level: "70%" },
  { name: "CAPCUT PRO", level: "90%" },
  { name: "CANVA", level: "85%" },
];

export default function About() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-surface relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-12 mb-8 md:mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-main mb-6">
              {lang === 'id' ? "Tentang Saya" : "About Me"}<span className="text-accent-red">.</span>
            </h2>

            <div className="w-16 h-1 bg-accent-red mb-6"></div>

            <p className="text-lg md:text-xl text-text-muted font-light">
              {lang === 'id'
                ? "Perjalanan dan keahlian saya dalam pengeditan video"
                : "My journey and expertise in video editing"}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <h3 className="text-3xl font-heading font-bold text-text-main mb-6">
              {lang === 'id' ? "Siapa Saya" : "Who I Am"}
            </h3>

            <div className="space-y-6 text-sm md:text-base font-light leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
              <p>
                {lang === 'id'
                  ? "Editor video berpengalaman dengan latar belakang multimedia dan spesialisasi dalam produksi konten visual untuk keperluan komersial, acara, dan media sosial. Mahir menggunakan Capcut, Adobe Premiere Pro, Photoshop, Lightroom, dan Canva dengan pemahaman yang kuat tentang alur kerja kreatif mulai dari pengembangan konsep hingga pengeditan dan hasil akhir."
                  : "Experienced video editor with a background in multimedia and a specialization in visual content production for commercial, event, and social media purposes. Proficient in using Adobe Premiere Pro, Photoshop, Lightroom, and CapCut, with a strong understanding of the creative workflow from concept development to editing and final output."}
              </p>
              <p>
                {lang === 'id'
                  ? "Mampu bekerja secara mandiri maupun kolaboratif dalam tim, secara konsisten memberikan visual yang menarik yang selaras dengan rencana konten dan storyboard."
                  : "Able to work independently or collaboratively in a team, consistently delivering engaging visuals aligned with content plans and storyboards."}
              </p>
            </div>
          </motion.div>

          {/* Arsenal / Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <h3 className="text-2xl font-heading uppercase tracking-widest text-text-dim mb-10">
              {lang === 'id' ? "ARSENAL" : "ARSENAL"}
            </h3>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-xl md:text-2xl font-bold font-heading tracking-widest uppercase text-text-main group-hover:text-accent-red transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-sm font-bold text-text-dim">{skill.level}</span>
                  </div>
                  <div className="h-1 w-full bg-border-main">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                      className="h-full bg-text-main group-hover:bg-accent-red transition-colors duration-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
