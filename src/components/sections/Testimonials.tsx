"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { lang } = useLanguage();

  const testimonials = [
    {
      id: 1,
      contentEn: "Radika's video editing for our campaigns has been outstanding. He perfectly understands our brand message and always crafts social media content that significantly boosts our engagement and viewer retention.",
      contentId: "Hasil editan video Radika untuk kampanye kami sangat luar biasa. Dia sangat memahami pesan konten kami dan selalu berhasil meracik video media sosial yang sangat menarik interaksi dan retensi penonton.",
      name: "Ina Tandiono",
      roleEn: "Owner, BubbleBubble.id",
      roleId: "Owner, BubbleBubble.id",
    },
    {
      id: 2,
      contentEn: "I trust Radika entirely with processing our raw footage. His ability to edit and visually explain complex finance and geopolitical topics into engaging, accessible educational videos is truly exceptional.",
      contentId: "Saya sangat mempercayakan pengolahan footage mentah kami kepada Radika. Kemampuannya mengedit dan meramu topik keuangan dan geopolitik yang rumit menjadi video edukasi yang menarik sungguh luar biasa.",
      name: "Jay",
      roleEn: "Owner, Horizon FX",
      roleId: "Owner, Horizon FX",
    },
    {
      id: 3,
      contentEn: "From concept development and shooting to final post-production, Radika is a complete package. His expertise in videography, photography, and color grading elevated the visual quality of our projects immensely.",
      contentId: "Mulai dari pengembangan konsep, proses syuting, hingga pascaproduksi akhir, Radika adalah paket lengkap. Keahliannya dalam videografi, fotografi, dan color grading sangat mengangkat kualitas visual proyek kami.",
      name: "Idham Nugrahadi",
      roleEn: "Founder, Kastara Picture",
      roleId: "Founder, Kastara Picture",
    }
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight text-text-main mb-16 md:mb-24 text-center">
          {lang === 'id' ? "KATA MEREKA" : "THE VERDICT"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-7xl mx-auto">
          {testimonials.map((testi, index) => (
            <motion.div 
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex flex-col h-full group"
            >
              <Quote size={36} className="text-text-dim mb-6 group-hover:text-accent-red transition-colors duration-500 fill-current" />
              
              <div className="flex flex-col flex-grow">
                <p className="text-base md:text-lg font-light text-text-muted leading-relaxed mb-8 flex-grow">
                  "{lang === 'id' ? testi.contentId : testi.contentEn}"
                </p>
                <div className="mt-auto pt-4 border-t border-border-main">
                  <h4 className="text-base font-bold tracking-widest uppercase text-text-main">
                    {testi.name}
                  </h4>
                  <p className="text-xs font-semibold tracking-widest text-text-dim uppercase mt-2">
                    {lang === 'id' ? testi.roleId : testi.roleEn}
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
