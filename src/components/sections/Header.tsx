"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const { lang, toggleLang } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navs = [
    { nameEn: "Home", nameId: "Beranda", href: "#home" },
    { nameEn: "About", nameId: "Tentang", href: "#about" },
    { nameEn: "My Experience", nameId: "Pengalaman", href: "#experience" },
    { nameEn: "Portfolio", nameId: "Portofolio", href: "#portfolio" },
    { nameEn: "Contact", nameId: "Kontak", href: "#contact" },
    { nameEn: "Testimoni", nameId: "Testimoni", href: "#testimonials" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "backdrop-blur-md py-4 border-b border-border-main" : "bg-transparent py-6"}`}
        style={isScrolled ? { backgroundColor: 'color-mix(in srgb, var(--color-base) 90%, transparent)' } : undefined}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#home" className="text-xl md:text-2xl font-bold tracking-widest text-text-main group">
            <span className="text-accent-red">PORTO</span>FOLIO
          </a>

          <div className="flex items-center gap-4 md:gap-8">
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navs.map((nav) => (
                <a key={nav.nameEn} href={nav.href} className="text-sm font-semibold tracking-wide text-text-muted hover:text-text-main transition-colors">
                  {lang === 'id' ? nav.nameId : nav.nameEn}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <button 
                onClick={toggleLang} 
                className="text-xs font-bold tracking-widest text-text-main hover:text-accent-red transition-colors"
              >
                {lang === 'id' ? 'ID' : 'EN'}
              </button>

              <ThemeToggle />

              <button className="md:hidden text-text-main" onClick={() => setIsOpen(true)}>
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-surface flex flex-col justify-center px-6"
          >
            <button className="absolute top-6 right-6 text-text-main" onClick={() => setIsOpen(false)}>
              <X size={32} />
            </button>
            <nav className="flex flex-col gap-6 text-center">
              {navs.map((nav) => (
                <a 
                  key={nav.nameEn} 
                  href={nav.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl sm:text-5xl font-heading font-bold uppercase tracking-widest hover:text-accent-red transition-colors"
                >
                  {lang === 'id' ? nav.nameId : nav.nameEn}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
