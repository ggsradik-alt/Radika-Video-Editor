"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Category = "All" | "Commercial" | "Social Media" | "Event";

const projects = [
  {
    id: 1,
    title: "GOOGLE DRIVE PORTFOLIO",
    category: "All",
    thumbnail: "/portfolio_drive_thumbnail.png",
    client: "Radika Putra",
    linkUrl: "https://drive.google.com/drive/folders/1xS6-aybZcj0tW91i6mFNDGQm-l5a0kVy?usp=drive_link",
  },
  {
    id: 5,
    title: "Travel",
    category: "Social Media",
    thumbnail: "/thumbnails/travel_thumbnail.jpg",
    client: "Radika Putra",
    videoUrl: "https://www.youtube.com/watch?v=qBrE_pvqNDM",
  },
  {
    id: 6,
    title: "Color Grading",
    category: "Commercial",
    thumbnail: "https://img.youtube.com/vi/B99VZ0J7xos/maxresdefault.jpg",
    client: "Radika Putra",
    videoUrl: "https://www.youtube.com/watch?v=B99VZ0J7xos",
  },
  {
    id: 7,
    title: "Cinematic Travel",
    category: "Social Media",
    thumbnail: "https://img.youtube.com/vi/tS2R0SQYKiQ/maxresdefault.jpg",
    client: "Radika Putra",
    videoUrl: "https://www.youtube.com/watch?v=tS2R0SQYKiQ",
  },
  {
    id: 8,
    title: "THE FED ANALYSIS",
    category: "Social Media",
    thumbnail: "/thumbnails/tiktok_fed.jpg",
    client: "Radika Putra",
    videoUrl: "https://www.tiktok.com/@horizonfx8/video/7550308018106240312", 
  },
  {
    id: 9,
    title: "PROFIT KONSISTEN",
    category: "Social Media",
    thumbnail: "/thumbnails/tiktok_profit.jpg",
    client: "Radika Putra",
    videoUrl: "https://www.tiktok.com/@horizonfx8/video/7545733755588070712", 
  },
  {
    id: 10,
    title: "THE FED ANALYSIS 2",
    category: "Social Media",
    thumbnail: "/thumbnails/tiktok_fed2.jpg",
    client: "Radika Putra",
    videoUrl: "https://www.tiktok.com/@horizonfx8/video/7541632832961445127", 
  },
  {
    id: 11,
    title: "BEFORE AFTER SHOWCASE",
    category: "Social Media",
    thumbnail: "https://img.youtube.com/vi/p5SVHTYOOnE/maxresdefault.jpg",
    client: "Radika Putra",
    videoUrl: "https://www.youtube.com/shorts/p5SVHTYOOnE",
  },
];

const categories: Category[] = ["All", "Commercial", "Social Media", "Event"];

export default function Portfolio() {
  const { lang } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const isVertical = selectedVideo?.includes("tiktok.com") || selectedVideo?.includes("shorts");

  const getEmbedUrl = (url: string) => {
    if (!url) return "";
    if (url.includes("tiktok.com")) {
      const match = url.match(/\/video\/(\d+)/);
      const videoId = match ? match[1] : null;
      return videoId ? `https://www.tiktok.com/embed/v2/${videoId}` : url;
    }
    return url.replace("watch?v=", "embed/").replace("youtu.be/", "youtube.com/embed/").replace("shorts/", "embed/") + "?autoplay=1";
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 px-6 md:px-12 bg-surface-alt">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold uppercase tracking-tight text-text-main">
              {lang === 'id' ? "SHOWREEL" : "SHOWREEL"}<span className="text-accent-red">.</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4 md:gap-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-sm tracking-widest uppercase font-bold transition-colors ${activeCategory === category
                    ? "text-accent-red"
                    : "text-text-muted hover:text-text-main"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => {
                  if ((project as any).linkUrl) {
                    window.open((project as any).linkUrl, '_blank');
                  } else if ((project as any).videoUrl) {
                    setSelectedVideo((project as any).videoUrl);
                  }
                }}
                className={`group relative overflow-hidden bg-surface cursor-pointer ${
                  index === 0 && activeCategory === 'All' 
                    ? 'md:col-span-2 aspect-[21/9]' 
                    : 'aspect-video'
                } ${!((project as any).videoUrl || (project as any).linkUrl) ? 'cursor-default' : ''}`}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0"
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10 transition-opacity duration-500" style={{ background: 'linear-gradient(to top, color-mix(in srgb, var(--color-base) 90%, transparent), color-mix(in srgb, var(--color-base) 20%, transparent), transparent)' }}>
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-accent-red text-xs font-bold tracking-[0.2em] uppercase mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-3xl md:text-5xl font-heading font-bold text-text-main uppercase tracking-wider flex items-center justify-between">
                      {project.title}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        {(project as any).linkUrl ? (
                          <ExternalLink className="w-8 h-8 md:w-12 md:h-12 text-text-main" />
                        ) : (
                          <Play fill="currentColor" className="w-8 h-8 md:w-12 md:h-12 text-text-main" />
                        )}
                      </span>
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            style={{ backgroundColor: 'color-mix(in srgb, var(--color-base) 95%, transparent)' }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full bg-base shadow-2xl ${
                isVertical ? 'max-w-[400px] aspect-[9/16]' : 'max-w-5xl aspect-video'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-text-main hover:text-accent-red flex items-center gap-2 group"
              >
                <span className="text-xs font-bold tracking-widest uppercase">Close</span>
                <div className="w-8 h-8 flex items-center justify-center border border-border-main rounded-full group-hover:border-accent-red transition-colors">
                  ✕
                </div>
              </button>

              <iframe
                src={selectedVideo ? getEmbedUrl(selectedVideo) : ""}
                className="w-full h-full rounded-md"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
