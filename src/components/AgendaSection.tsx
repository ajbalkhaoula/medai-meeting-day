import { motion } from "framer-motion";
import { Clock } from "lucide-react";

const schedule = [
  { time: "09:00", title: "Accueil des participants & Mots d'ouverture", speaker: "" },
  { time: "09:30", title: "Conférences Plénières", speaker: "" },
  { time: "11:00", title: "Pause café", speaker: "" },
  { time: "11:30", title: "Conférences Plénières", speaker: "" },
  { time: "12:30", title: "Table Ronde : Regards Croisés", speaker: "" },
  { time: "14:00", title: "Pause Déjeuner" },
  { time: "15:00", title: "Sessions de Communications", speaker: "" },
  //{ time: "15:30", title: "Optimisation des opérations hospitalières", speaker: "Cas d'usage" },
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
