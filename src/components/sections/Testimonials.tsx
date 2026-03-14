"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const { lang } = useLanguage();

  const testimonials = [
    {
      id: 1,
      contentEn: "Radika consistently delivers exceptional work. His editing style completely transformed our social media presence and doubled our watch time.",
      contentId: "Radika konsisten memberikan hasil luar biasa. Gaya editingnya benar-benar mengubah media sosial kami dan menggandakan watch time kami.",
      name: "Client One",
      roleEn: "Brand Owner",
      roleId: "Pemilik Brand",
    },
    {
      id: 2,
      contentEn: "Fast turnaround without compromising quality. The way he grades footage and paces the audio is top-notch. Highly recommended.",
      contentId: "Pengerjaan cepat tanpa menyunat kualitas. Cara dia grading warna dan menata tempo audio benar-benar tingkat atas. Sangat direkomendasikan.",
      name: "Client Two",
      roleEn: "Marketing Director",
      roleId: "Direktur Marketing",
    },
    {
      id: 3,
      contentEn: "We hired Radika for our event recap and he captured the energy perfectly. The final video was engaging, dynamic, and exactly what we needed.",
      contentId: "Kami merekrut Radika untuk rekap acara dan dia menangkap energinya dengan sempurna. Video akhirnya sangat engaging, dinamis, dan pas dengan yang kami butuhkan.",
      name: "Client Three",
      roleEn: "Event Organizer",
      roleId: "Penyelenggara Acara",
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
