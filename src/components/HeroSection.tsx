import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
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
    <section className="relative flex items-center justify-center overflow-hidden pt-20 pb-10 md:pb-0 md:pt-0 min-h-[calc(100svh-4rem)] md:min-h-screen">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="MedAI Meeting Day"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero opacity-85" />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: 80 + i * 40,
              height: 80 + i * 40,
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.h1
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          MedAI Meeting Day
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl font-display font-semibold mb-6"
          style={{ color: "#00ffc6" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
        >
          Shaping Future Care
        </motion.p>

        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto mb-6"
          style={{ color: "hsl(205 30% 85%)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Une journée pour explorer l'IA en santé : imagerie, NLP clinique,
          aide à la décision, opérations hospitalières, sécurité, conformité et
          déploiement responsable.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <div className="flex items-center gap-2 text-white/80">
            <CalendarDays className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">27 mars</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
          <div className="flex items-center gap-2 text-white/80">
            <Clock3 className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">9h00 - 16h00</span>
          </div>
          <div className="hidden sm:block w-1 h-1 rounded-full bg-white/40" />
          <div className="flex items-center gap-2 text-white/80">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">EMSI Tanger</span>
          </div>
        </motion.div>

        <motion.div
          className="inline-flex flex-col items-center gap-2 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md w-full max-w-[320px] sm:max-w-fit mx-auto mb-6 shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.52 }}
        >
          {/* Badge Date */}
          <div className="flex flex-row items-center gap-2 bg-orange-500/20 text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border border-orange-500/30 leading-tight whitespace-nowrap">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Deadline : <span className="text-orange-400">21 Mars 2026</span>
          </div>

          {/* Texte d'accompagnement */}
          <p className="text-[10px] md:text-xs text-slate-200 font-medium text-center leading-snug">
            Inscriptions et soumissions ouvertes via le bouton <span className="text-white font-bold underline decoration-orange-500/50 underline-offset-4">S'inscrire</span>
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:flex items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto mb-4 sm:mb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#register"
            className="btn-accent px-4 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base text-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#register");
            }}
          >
            S'inscrire
          </a>
          <a
            href="#agenda"
            className="btn-outline-hero px-4 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base text-center"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#agenda");
            }}
          >
            Voir le programme
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

