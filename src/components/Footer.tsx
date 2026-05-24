import { Link } from "@tanstack/react-router";
import { Mail, Phone } from "lucide-react";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <LogoMark variant="white" className="h-10 w-10" />
            <div className="font-display font-black text-xl">CDEP</div>
          </div>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Centro Colombiano para el Desarrollo de la Economía Popular.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-display font-bold mb-4 uppercase tracking-[0.18em]">Navegación</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/quienes-somos" className="hover:text-white transition-colors">Quiénes Somos</Link></li>
            <li><Link to="/investigacion" className="hover:text-white transition-colors">Investigación</Link></li>
            <li><Link to="/politicas-publicas" className="hover:text-white transition-colors">Políticas Públicas</Link></li>
            <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-display font-bold mb-4 uppercase tracking-[0.18em]">Contacto</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0" />
              <span>centrodesarrolloep@outlook.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0" />
              <span>+57 324 680 1235</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} CDEP — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
