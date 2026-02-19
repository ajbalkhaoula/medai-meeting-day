import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const RegisterSection = () => {
  return (
    <section id="register" className="py-24 bg-hero relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-white/5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Inscription
          </h2>
          <p className="text-lg mb-10" style={{ color: "hsl(205 30% 82%)" }}>
            Rejoignez MedAI Meeting Day le 27 mars à EMSI Tanger.
            <br className="hidden md:block" />
            Utilisez le formulaire ci-dessous pour <strong>confirmer votre présence</strong> ou <strong>soumettre vos travaux</strong> de recherche.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdBYbjD80Cpn6IO-g9JAmLtj_v8ePc4OiznVPS_D-tjXHHPtw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-accent px-8 py-3.5 text-base"
          >
            S'inscrire <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RegisterSection;
