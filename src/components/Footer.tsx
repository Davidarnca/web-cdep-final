import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Twitter } from "lucide-react"; // Importamos los iconos

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/economiapopularcdep/", icon: Instagram },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid md:grid-cols-3 gap-12">
        
        {/* Navegación */}
        <div className="space-y-4">
          <h3 className="font-display font-bold uppercase tracking-widest text-sm">Menú</h3>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-primary-foreground/70 hover:text-white transition-colors">Inicio</Link>
            <Link to="/quienes-somos" className="text-primary-foreground/70 hover:text-white transition-colors">Quiénes Somos</Link>
            <Link to="/investigacion" className="text-primary-foreground/70 hover:text-white transition-colors">Investigación</Link>
            <Link to="/politicas-publicas" className="text-primary-foreground/70 hover:text-white transition-colors">Políticas Públicas</Link>
          </nav>
        </div>

        {/* REDES SOCIALES — Nuevo bloque */}
        <div className="space-y-4">
          <h3 className="font-display font-bold uppercase tracking-widest text-sm">Síganos</h3>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors"
                aria-label={social.name}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Contacto */}
        <div className="space-y-4">
          <h3 className="font-display font-bold uppercase tracking-widest text-sm">Contacto</h3>
          <p className="text-primary-foreground/70 text-sm">
            centrodesarrolloep@outlook.com<br />
            Bogotá, Colombia
          </p>
        </div>
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-16 pt-8 border-t border-white/10 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} CDEP — Centro Colombiano para el Desarrollo de la Economía Popular.
      </div>
    </footer>
  );
}