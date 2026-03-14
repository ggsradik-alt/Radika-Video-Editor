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
      descEn: "Worked on various video projects for both online and offline clients, including business promotional videos, social media content, company profiles, and event documentation. Responsible for the entire editing process—from cutting footage, color grading, adding visual and audio effects, to delivering the final output tailored to each client's needs. Able to adapt to different editing styles and maintain clear communication to fully understand the client's vision.",
      descId: "Mengerjakan berbagai proyek video untuk klien online dan offline, termasuk video promosi bisnis, konten media sosial, profil perusahaan, dan dokumentasi acara. Bertanggung jawab atas seluruh proses pengeditan—mulai dari pemotongan footage, color grading, penambahan efek visual dan audio, hingga memberikan hasil akhir yang disesuaikan dengan kebutuhan setiap klien. Mampu beradaptasi dengan berbagai gaya pengeditan dan mempertahankan komunikasi yang lancar untuk memahami visi klien sepenuhnya."
    },
    {
      id: "02",
      roleEn: "Video Editor & Social Media Content Specialist",
      roleId: "Editor Video & Konten Sosmed Specialist",
      company: "BubbleBubble.id",
      periodEn: "Nov 2024 - Mar 2025",
      periodId: "Nov 2024 - Mar 2025",
      descEn: "Created engaging video content for digital campaigns, including social media, websites, and email marketing. Edited and optimized videos to align with brand messaging and enhance audience engagement. Collaborated with the digital marketing team to develop effective visual storytelling strategies, resulting in improved viewer retention and campaign performance.",
      descId: "Membuat konten video yang menarik untuk kampanye digital, termasuk media sosial, situs web, dan email marketing. Mengedit dan mengoptimalkan video agar sejalan dengan pesan merek dan meningkatkatkan interaksi audiens. Berkolaborasi dengan tim pemasaran digital untuk mengembangkan strategi visual storytelling yang efektif, menghasilkan peningkatan retensi penonton dan kinerja kampanye."
    },
    {
      id: "03",
      roleEn: "Video Editor, Photographer & Videographer",
      roleId: "Editor Video, Fotografer & Videografer",
      company: "Kastara Picture",
      periodEn: "Aug 2023 - Oct 2024",
      periodId: "Agu 2023 - Okt 2024",
      descEn: "Responsible for end-to-end video production, including concept development, shooting, and post-production. Tasks included creating storyboards, setting up lighting and camera equipment, editing footage using professional software (Capcut and Adobe Premiere Pro), adding motion graphics, and performing color grading. Played a key role in maintaining visual quality and ensuring the final output aligned with the client's branding and objectives.",
      descId: "Bertanggung jawab atas produksi video end-to-end, termasuk pengembangan konsep, syuting, dan pascaproduksi. Tugas mencakup pembuatan storyboard, pengaturan pencahayaan dan peralatan kamera, pengeditan footage menggunakan perangkat lunak profesional (Capcut dan Adobe Premiere Pro), penambahan motion graphics, dan color grading. Memainkan peran kunci dalam menjaga kualitas visual dan memastikan hasil akhir selaras dengan branding dan tujuan klien."
    },
    {
      id: "04",
      roleEn: "Video Editor (Work From Home)",
      roleId: "Editor Video (WFH)",
      company: "Horizon FX Indonesia",
      periodEn: "Jul 2025 - Jan 2026",
      periodId: "Jul 2025 - Jan 2026",
      descEn: "Served as a remote Video Editor, responsible for receiving and processing raw footage to produce high-quality educational content. Specialized in editing comprehensive videos focusing on finance and geopolitical topics, ensuring complex subject matters were presented in an engaging and accessible visual format.",
      descId: "Bertugas sebagai Editor Video jarak jauh, bertanggung jawab menerima dan mengolah footage mentah menjadi konten edukasi berkualitas tinggi. Mengkhususkan diri dalam pengeditan video komprehensif yang membahas topik keuangan dan geopolitik, memastikan materi yang kompleks disajikan secara visual agar menarik dan mudah dipahami."
    }
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
                  <p className="text-sm md:text-base leading-relaxed max-w-xl transition-colors" style={{ color: 'var(--color-text-muted)' }}>
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
