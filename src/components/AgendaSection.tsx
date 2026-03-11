import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  { time: "09:00", title: "Accueil et Mots d'ouvertures", speaker: "" },
  {
    time: "09:30",
    title: "Pr. Rachida Fissoune",
    speaker: "L'Intelligence Artificielle au Service de la Transformation du Diagnostic et des Soins",
  },
  {
    time: "10:00",
    title: "Pr. Samy Housbane",
    speaker:
      "Intégration de l'IA dans la pratique clinique, enjeux et défis pour les professionnels de santé",
  },
  { time: "10:30", title: "Pause Café", speaker: "" },
  {
    time: "11:00",
    title: "Pr. Khadija Achtaich",
    speaker: "Souveraineté digitale et IA médicale : écosystème, data et gouvernance",
  },
  {
    time: "11:30",
    title: "Pr. Hind Bourkhime",
    speaker:
      "De l'algorithme au lit du patient : garantir la robustesse et la sécurité clinique des IA en santé",
  },
  { time: "12:00", title: "Table Ronde", speaker: "" },
  { time: "14:00", title: "Pause déjeuner" },
  { time: "15:00", title: "Sessions de Communications", speaker: "" },
  { time: "16:00", title: "Synthèse & Clôture", speaker: "" },
];

const AgendaSection = () => {
  return (
    <section id="agenda" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Planning
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Programme de la{" "}
            <span className="text-gradient-ocean">journée</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            27 mars, de 9h00 à 16h00 - EMSI Tanger.
          </p>
          <p className="mt-3 text-sm text-muted-foreground/90">
            Ce programme est temporaire et peut être sujet à des changements.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto bg-card border border-border rounded-xl divide-y divide-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {schedule.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 px-6 py-4 hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-2 text-primary font-mono text-sm min-w-[82px]">
                <Clock className="w-3.5 h-3.5" />
                {item.time}
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{item.title}</p>
                {item.speaker && (
                  <p className="text-muted-foreground text-xs mt-0.5">{item.speaker}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AgendaSection;
