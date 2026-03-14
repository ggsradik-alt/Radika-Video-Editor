"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { lang } = useLanguage();

  const experiences = [
    {
      id: "01",
      roleEn: "Video Editor",
      roleId: "Editor Video",
      company: "Freelance",
      periodEn: "Sep 2024 - Present",
      periodId: "Sep 2024 - Sekarang",
      descEn: "Independent post-production for various clients, focusing on commercial punch and retention.",
      descId: "Pascaproduksi independen untuk berbagai klien, berfokus pada kekuatan komersial dan retensi penonton."
    },
    {
      id: "02",
      roleEn: "Video Editor",
      roleId: "Editor Video",
      company: "BubbleBubble.id",
      periodEn: "Nov 2024 - Mar 2025",
      periodId: "Nov 2024 - Mar 2025",
      descEn: "Spearheaded short-form content creation, boosting engagement metrics across Instagram and TikTok.",
      descId: "Mempelopori pembuatan konten video pendek, mendongkrak matriks interaksi di seluruh platform."
    },
    {
      id: "03",
      roleEn: "Video Editor",
      roleId: "Editor Video",
      company: "Kastara Picture",
      periodEn: "Jul 2024 - Okt 2024",
      periodId: "Jul 2024 - Okt 2024",
      descEn: "Assisted in offline editing, color grading drafts, and managing media assets for event videography.",
      descId: "Terlibat dalam editing offline, draf color grading, dan penanganan aset media untuk acara."
    },
    {
      id: "04",
      roleEn: "-",
      roleId: "-",
      company: "-",
      periodEn: "- | -",
      periodId: "- | -",
      descEn: "Position open for the next big project.",
      descId: "Posisi terbuka untuk proyek besar selanjutnya."
    },
  ];

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 bg-base relative">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-sm font-bold tracking-[0.3em] text-accent-red uppercase mb-16 text-center md:text-left">
          {lang === 'id' ? "PENGALAMAN" : "TRACK RECORD"}
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group border-t border-border-main py-10 md:py-16 hover:bg-surface transition-colors relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 px-6 md:px-10">
                {/* Year */}
                <div className="md:col-span-3 text-sm font-bold tracking-widest text-text-dim group-hover:text-accent-red transition-colors">
                  {lang === 'id' ? exp.periodId : exp.periodEn}
                </div>

                {/* Details */}
                <div className="md:col-span-9">
                  <h3 className="text-3xl md:text-5xl font-heading font-bold text-text-main uppercase tracking-tight mb-2">
                    {exp.company}
                  </h3>
                  <h4 className="text-xl md:text-2xl font-light text-text-muted mb-6 font-heading tracking-widest uppercase">
                    {lang === 'id' ? exp.roleId : exp.roleEn}
                  </h4>
                  <p className="text-sm md:text-base text-text-dim leading-relaxed max-w-xl group-hover:text-text-muted transition-colors">
                    {lang === 'id' ? exp.descId : exp.descEn}
                  </p>
                </div>
              </div>

              {/* Minimalist marker */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-transparent group-hover:bg-accent-red transition-colors"></div>
            </motion.div>
          ))}
          <div className="border-t border-border-main"></div>
        </div>
      </div>
    </section>
  );
}
