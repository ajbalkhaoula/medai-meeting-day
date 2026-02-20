import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "À propos", href: "#about" },
  { label: "Intervenants", href: "#speakers" },
  { label: "Programme", href: "#agenda" },
  { label: "Comité", href: "#committee" },
  { label: "Partenaires", href: "#sponsors" },
  { label: "Lieu", href: "#venue" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);
    if (!target) return;

    const isDesktop = window.innerWidth >= 768;
    const navHeight = isDesktop ? 80 : 64;
    const sectionOffset = isDesktop ? 72 : 56;
    const top = window.scrollY + target.getBoundingClientRect().top - navHeight + sectionOffset;

    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth",
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-50/95 backdrop-blur-md shadow-sm border-b border-slate-200/70 transition-all duration-300">
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 lg:px-8">
        <a href="#" className="inline-flex items-center">
          <img
            src="/medai-logo.png"
            alt="MedAI Meeting Day"
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto object-contain"
            loading="eager"
          />
        </a>

        <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm lg:text-base font-medium text-slate-700 transition-colors hover:text-accent whitespace-nowrap shrink-0"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#register"
            className="btn-accent px-4 lg:px-5 py-2.5 text-sm inline-block whitespace-nowrap shrink-0"
          >
            S'inscrire
          </a>
        </div>

        <button
          type="button"
          className="md:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Ouvrir ou fermer le menu"
        >
          {mobileOpen ? <X className="text-foreground" /> : <Menu className="text-foreground" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-foreground py-2 hover:text-accent transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    setTimeout(() => scrollToSection(item.href), 0);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#register"
                className="btn-accent px-5 py-2.5 text-sm text-center mt-2"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileOpen(false);
                  setTimeout(() => scrollToSection("#register"), 0);
                }}
              >
                S'inscrire
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

