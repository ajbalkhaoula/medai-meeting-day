import { motion } from "framer-motion";

const committee = [
  { name: "Khaoula Ajbal", image: "/committee/AJBAL%20KHAOULA.png" },
  { name: "Wafae El Kayssouni", image: "/committee/KAYSSOUNI.png" },
  { name: "Abderrachid Errezgouny", image: "/committee/ERREZGOUNY.png" },
  { name: "Rachid Herbazi", image: "/committee/RACHID.png" },
  { name: "Adnane El Hanjri", image: "/committee/ELHANJRI.png" },
  { name: "Ibtissam Sahal", image: "/committee/IBTISSAM.jpeg" },
  { name: "Imane Samir", image: "/committee/IMANE.png" },
  { name: "Asmae El Ghadouali", image: "/committee/GHEDOUALI.jpeg" },
];

const CommitteeSection = () => {
  return (
    <section
      id="committee"
      className="py-24 bg-[linear-gradient(180deg,#eef3f9_0%,#e4edf6_100%)] border-y border-slate-300/60"
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Organisation
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Comité d'<span className="text-gradient-ocean">organisation</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {committee.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-card rounded-xl overflow-hidden border border-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground text-sm">{member.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommitteeSection;
