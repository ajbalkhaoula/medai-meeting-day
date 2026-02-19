import { motion } from "framer-motion";
import { MapPin, Clock3, CalendarDays } from "lucide-react";

const VenueSection = () => {
  return (
    <section id="venue" className="py-24 bg-slate-200/70 border-y border-slate-300/60">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Lieu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            EMSI <span className="text-gradient-ocean">Tanger</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps?q=EMSI%20Tanger&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="EMSI Tanger"
              className="w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="font-display text-2xl font-bold text-foreground">
              Informations pratiques
            </h3>
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4 text-accent" />
              <span>EMSI Tanger</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <CalendarDays className="w-4 h-4 text-accent" />
              <span>27 mars</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Clock3 className="w-4 h-4 text-accent" />
              <span>9h00 - 16h00</span>
            </div>
            <p className="text-muted-foreground leading-relaxed pt-2">
              L'événement se déroule sur une journée complète avec conférences,
              sessions thématiques et échanges entre académiques, praticiens et
              experts IA.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VenueSection;
