import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageLayout({
  children,
  overlayHeader = true, // Lo dejamos en true por defecto para eliminar el hueco blanco en todas las páginas
}: {
  children: React.ReactNode;
  overlayHeader?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${overlayHeader ? "" : "pt-20"}`}>{children}</main>
      <Footer />
    </div>
  );
}

type Tone = "brand" | "green" | "orange" | "pink";

const toneBg: Record<Tone, string> = {
  brand: "bg-primary",
  green: "bg-brand-green",
  orange: "bg-brand-orange",
  pink: "bg-brand-pink",
};

// Color de acento para la línea/punto - siempre contrastando con el color de la marca
const toneAccent: Record<Tone, string> = {
  brand: "bg-brand-orange",
  green: "bg-brand",
  orange: "bg-brand",
  pink: "bg-brand-orange",
};

const toneAccentText: Record<Tone, string> = {
  brand: "text-brand-orange",
  green: "text-brand",
  orange: "text-brand",
  pink: "text-brand-orange",
};

export function PageHeader({
  eyebrow,
  title,
  description,
  tone = "brand",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: Tone;
}) {
  return (
    <section className={`${toneBg[tone]} text-white relative overflow-hidden`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-44 md:pt-52 pb-24 md:pb-32 text-center relative">
        {eyebrow && (
          <div className={`text-[11px] uppercase tracking-[0.22em] mb-5 font-display font-semibold ${toneAccentText[tone]}`}>
            {eyebrow}
          </div>
        )}
        <h1 className="font-display font-black text-3xl md:text-5xl max-w-4xl mx-auto uppercase tracking-tight leading-[1.15]">
          {title}<span className={toneAccentText[tone] + " text-[0.6em]"}> .</span>
        </h1>
        {description && (
          <p className="mt-6 text-base md:text-lg font-normal text-white/85 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        <div className={`mx-auto mt-8 h-[3px] w-12 ${toneAccent[tone]}`} />
      </div>
    </section>
  );
}