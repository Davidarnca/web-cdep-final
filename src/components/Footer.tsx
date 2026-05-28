import { Link } from "@tanstack/react-router";
import { Mail, Phone, Instagram } from "lucide-react";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
        
        {/* Bloque de Marca con Logo */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <LogoMark variant="white" className="h-14 w-14 md:h-16 md:w-16 shrink-0" />
            <div className="leading-tight">
              <div className="font-display font-black text-2xl md:text-3xl tracking-tight">CDEP</div>
              <div className="text-[9px] md:text-[10px] uppercase tracking-[0.14em] text-white/70 mt-1">
                Centro Colombiano para el Desarrollo<br />de la Economía Popular
              </div>
            </div>
          </div>
          <p className="text-sm text-white/80 leading-relaxed max-w-sm">
            Investigación, asesoría y formulación de políticas públicas para el desarrollo
            de la economía popular en Colombia.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-xs font-display font-bold mb-4 uppercase tracking-[0.18em]">Navegación</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link to="/quienes-somos" className="hover:text-white transition-colors">Quiénes Somos</Link></li>
            <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>

        {/* Nuestros Servicios */}
        <div>
          <h4 className="text-xs font-display font-bold mb-4 uppercase tracking-[0.18em]">Nuestros Servicios</h4>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link to="/investigacion" className="hover:text-white transition-colors">Investigación</Link></li>
            <li><Link to="/politicas-publicas" className="hover:text-white transition-colors">Políticas Públicas</Link></li>
          </ul>
        </div>

        {/* Contacto y Síganos */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs font-display font-bold mb-4 uppercase tracking-[0.18em]">Contacto</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 shrink-0 mt-0.5" />
                <span className="break-all">centrodesarrolloep@outlook.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" />
                <span>+57 324 680 1235</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-display font-bold mb-3 uppercase tracking-[0.18em]">Síganos</h4>
            <a
              href="https://www.instagram.com/economiapopularcdep/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 text-xs text-white/60">
          © {new Date().getFullYear()} CDEP — Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}