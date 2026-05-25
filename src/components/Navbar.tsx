import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "./Logo";
import { Button } from "./ui/button";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/quienes-somos", label: "Quiénes Somos" },
  { to: "/investigacion", label: "Investigación" },
  { to: "/politicas-publicas", label: "Políticas Públicas" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-10 w-10" />
          <div className="leading-tight">
            <div className="font-display font-black text-xl tracking-tight text-primary">CDEP</div>
            <div className="text-[9px] text-muted-foreground uppercase tracking-[0.18em] hidden sm:block">
              Centro Colombiano para el Desarrollo<br />de la Economía Popular
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-[11px] font-display font-medium uppercase tracking-[0.16em] text-foreground/75 hover:text-primary transition-colors data-[status=active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="outline" size="sm" className="border-foreground/20 rounded-none uppercase tracking-[0.16em] text-[11px] font-display font-medium px-5 h-9 hover:bg-primary hover:text-primary-foreground hover:border-primary">
            <Link to="/contacto">Contacto</Link>
          </Button>
        </nav>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="px-6 py-4 flex flex-col gap-1">
            {[...links, { to: "/contacto" as const, label: "Contacto" }].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                className="px-3 py-2.5 text-xs font-display uppercase tracking-[0.16em] rounded-md hover:bg-accent data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
