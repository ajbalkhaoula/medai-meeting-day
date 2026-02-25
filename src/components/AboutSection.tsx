import { motion } from "framer-motion";
import { Brain, FileText, Shield, Lock, Bot, Activity } from "lucide-react";

const themes = [
  {
    icon: Brain,
    title: "IA et imagerie médicale",
    description: "Cas d'usage et avancées en analyse d'images médicales.",
  },
  {
    icon: FileText,
    title: "NLP clinique et dossier patient",
    description: "Structuration, extraction et valorisation des données cliniques.",
  },
  {
    icon: Shield,
    title: "Qualité, sécurité, validation, biais et robustesse",
    description: "Méthodes d'évaluation pour des modèles fiables en santé.",
  },
  {
    icon: Lock,
    title: "Gouvernance,confidentialité et conformité ",
    description: "Conformité, confidentialité et bonnes pratiques réglementaires.",
  },
  {
    icon: Bot,
    title: "Déploiement responsable des modèles IA",
    description: "Passage en production, monitoring et gestion du risque.",
  },
  {
    icon: Activity,
    title: "Optimisation des opérations hospitalières",
    description: "IA pour fluidifier les parcours, la planification et les ressources.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            À PROPOS DE L'ÉVÉNEMENT
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-3">
            MedAI Meeting Day
          </h2>
          <p className="font-display text-2xl md:text-3xl font-semibold text-gradient-ocean mb-6">
            Shaping Future Care
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Une journée dédiée à l'exploration de l'intelligence artificielle en
            santé, réunissant enseignants-chercheurs, experts et professionnels
            autour de cas concrets, d'enjeux méthodologiques et de pratiques de
            déploiement responsable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              className="bg-card rounded-xl p-4 md:p-5 border border-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <theme.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base md:text-lg font-semibold text-foreground mb-1.5 md:mb-2">
                    {theme.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-7 md:leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
