import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Glassy/transparent over hero (every page has a colored hero); solid after scroll
  const transparent = !scrolled && !open;

  const headerCls = transparent
    ? "bg-white/5 backdrop-blur-md border-white/10"
    : "bg-background/90 backdrop-blur-md border-border/60 shadow-sm";

  const brandTitleCls = transparent ? "text-white" : "text-primary";
  const brandSubCls = transparent ? "text-white/75" : "text-muted-foreground";
  const linkBase =
    "text-[12px] font-display font-semibold uppercase tracking-[0.16em] transition-colors";
  const linkCls = transparent
    ? `${linkBase} text-white/90 hover:text-white data-[status=active]:text-white`
    : `${linkBase} text-foreground hover:text-brand data-[status=active]:text-brand`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 border-b transition-all duration-300 ${headerCls}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark className="h-10 w-10" variant={transparent ? "white" : "color"} />
          <div className="leading-tight">
            <div className={`font-display font-black text-xl tracking-tight transition-colors ${brandTitleCls}`}>
              CDEP
            </div>
            <div className={`text-[9px] uppercase tracking-[0.18em] hidden sm:block transition-colors ${brandSubCls}`}>
              Centro Colombiano para el Desarrollo<br />de la Economía Popular
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === "/" }} className={linkCls}>
              {l.label}
            </Link>
          ))}
          <Button
            asChild
            size="sm"
            className={
              transparent
                ? "bg-white text-primary hover:bg-brand-orange hover:text-white rounded-none uppercase tracking-[0.16em] text-[11px] font-display font-semibold px-5 h-9 border-0 transition-colors"
                : "bg-primary hover:bg-brand-orange text-primary-foreground rounded-none uppercase tracking-[0.16em] text-[11px] font-display font-semibold px-5 h-9 border-0"
            }
          >
            <Link to="/contacto">Contacto</Link>
          </Button>
        </nav>

        <button
          className={`lg:hidden p-2 ${transparent ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
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
                className="px-3 py-2.5 text-xs font-display font-semibold uppercase tracking-[0.16em] rounded-md hover:bg-accent data-[status=active]:text-brand"
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