import { motion } from "framer-motion";

const partners = [
  { name: "École Marocaine des Sciences de l'Ingénieur - EMSI Tanger", logo: "/partners/EMSI.png" },
  { name: "Laboratoire des Systèmes Intelligents et Applications", logo: "/partners/LSIA.png" },
  { name: "Équipe Ingénierie des Données et des Systèmes", logo: "/partners/IDS.png" },
  { name: "École Nationale des Sciences Appliquées de Tanger", logo: "/partners/ENSAT.png" },
  { name: "Université Abdelmalek Essaâdi", logo: "/partners/UAE.png" },
  { name: "Université Hassan II de Casablanca", logo: "/partners/UH2C.png" },
  { name: "Faculté de Médecine et de Pharmacie de Casablanca", logo: "/partners/FMPC.png" },
  { name: "Faculté des Sciences Aïn Chock", logo: "/partners/FSAC.jpg" },
  
];

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Partenaires et sponsors
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Nos <span className="text-gradient-ocean">partenaires</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="bg-white border border-border rounded-xl p-5 flex flex-col items-center justify-center card-hover min-h-[150px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 w-auto object-contain mb-3"
                loading="lazy"
              />
              <p className="text-xs text-center text-muted-foreground font-medium">
                {partner.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;

