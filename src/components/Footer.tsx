import { Mail, MapPin, CalendarDays, Clock3 } from "lucide-react";

const quickLinks = [
  { label: "À propos", href: "#about" },
  { label: "Programme", href: "#agenda" },
  { label: "Intervenants", href: "#speakers" },
  { label: "Comité", href: "#committee" },
  { label: "Partenaires", href: "#sponsors" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-xl font-bold mb-3">
              MedAI Meeting Day
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Shaping Future Care - Une journée dédiée à l'IA en santé.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider opacity-80">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="opacity-70 hover:opacity-100 hover:text-accent transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider opacity-80">
              Informations clés
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 opacity-70">
                <MapPin className="w-4 h-4 text-accent" />
                EMSI Tanger
              </li>
              <li className="flex items-center gap-2 opacity-70">
                <CalendarDays className="w-4 h-4 text-accent" />
                27 mars
              </li>
              <li className="flex items-center gap-2 opacity-70">
                <Clock3 className="w-4 h-4 text-accent" />
                9h00 - 16h00
              </li>
              <li className="flex items-center gap-2 opacity-70">
                <Mail className="w-4 h-4 text-accent" />
                lsia.tanger@emsi.ma
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-xs opacity-60 text-center">
          LSIA EMSI Tanger. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
