import { motion } from "framer-motion";

const speakers = [
  {
    name: "Pr Rachida Fissoune",
    role: "Professeure de l'Enseignement Supérieur à l'ENSA de Tanger",
    image: "/speakers/FISSOUNE.png",
    bio: "Spécialiste en génie biomédical et en intelligence artificielle, elle est membre de l'équipe de recherche en Ingénierie des Données et des Systèmes (IDS). Ses travaux portent sur le deep learning appliqué à l'imagerie médicale et à la bioinformatique, avec un focus particulier sur l'analyse de données complexes pour le diagnostic et le suivi médical.",
  },
  {
    name: "Pr Khadija Achtaich",
    role: "Professeure de l'Enseignement Supérieur à la Faculté des Sciences Ben M'Sik à Casablanca",
    image: "/speakers/ACHTAICH.png",
    bio: "Chercheuse spécialisée dans l'application de l'intelligence artificielle aux domaines de l'éducation et de la santé. Elle se consacre à l'innovation technologique et à la vulgarisation scientifique pour l'amélioration de la littératie en santé.",
  },
  {
    name: "Pr Samy Housbane",
    role: "Professeur agrégé en Informatique Médicale à la Faculté de Médecine et de Pharmacie de Casablanca",
    image: "/speakers/Housbane.png",
    bio: "Expert en systèmes d'information de santé et en intelligence artificielle, il dirige le Laboratoire d'Informatique Médicale à la Faculté de Médecine et de Pharmacie de Casablanca. Ses travaux se concentrent sur l'intégration des nouvelles technologies dans le parcours de soin et l'analyse de données massives pour la santé publique.",
  },
  {
    name: "Pr Hassan Badir",
    role: "Professeur de l'Enseignement Supérieur à l'ENSA de Tanger",
    image: "/speakers/PR%20BADIR.png",
    bio: "Expert reconnu en big data, machine learning et bases de données, il dirige l'équipe de recherche en Ingénierie des Données et des Systèmes (IDS). Ses travaux portent sur l'extraction de connaissances et l'intelligence distribuée, avec des applications concrètes dans l'optimisation des données de santé complexes.",
  },
];

const SpeakersSection = () => {
  return (
    <section id="speakers" className="py-24 bg-slate-200/70 border-y border-slate-300/60">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Intervenants
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Nos <span className="text-gradient-ocean">experts</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {speakers.map((speaker, index) => (
            <motion.article
              key={speaker.name}
              className="bg-card rounded-xl overflow-hidden border border-border card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="grid sm:grid-cols-[160px_1fr] items-start">
                {/* Image de l'intervenant */}
                <div className="h-56 sm:h-44 bg-white">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-contain object-center md:object-cover md:object-top"
                    loading="lazy"
                  />
                </div>

                {/* Contenu texte */}
                <div className="p-5 text-center sm:text-left">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {speaker.name}
                  </h3>
                  <p className="text-orange-500 text-sm font-semibold mt-1 leading-snug">
                    {speaker.role}
                  </p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed text-justify sm:text-left">
                    {speaker.bio}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;