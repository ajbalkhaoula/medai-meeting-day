import { motion } from "framer-motion";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a href="#register" className="btn-accent px-8 py-3.5 text-base">
            S'inscrire
          </a>
          <a href="#about" className="btn-outline-hero px-8 py-3.5 text-base">
            Voir le programme
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

