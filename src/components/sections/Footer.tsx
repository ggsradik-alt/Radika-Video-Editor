"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base py-8 px-6 md:px-12 border-t border-border-main">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-xl font-heading font-bold uppercase tracking-widest text-text-main group">
          R<span className="text-accent-red">.</span>
        </div>

        <div className="text-xs font-bold tracking-widest text-text-dim uppercase">
          &copy; {currentYear} Radika Pratama. All Rights Reserved.
        </div>

        <div className="flex gap-6">
          <a href="#" className="text-xs font-bold tracking-widest text-text-dim hover:text-text-main uppercase transition-colors">IG</a>
          <a href="#" className="text-xs font-bold tracking-widest text-text-dim hover:text-text-main uppercase transition-colors">IN</a>
          <a href="#" className="text-xs font-bold tracking-widest text-text-dim hover:text-text-main uppercase transition-colors">TK</a>
        </div>
        
      </div>
    </footer>
  );
}
