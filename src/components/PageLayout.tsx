import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MessageCircle } from "lucide-react";

export function PageLayout({
  children,
  overlayHeader = true, 
}: {
  children: React.ReactNode;
  overlayHeader?: boolean;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-1 ${overlayHeader ? "" : "pt-20"}`}>
        {children}
      </main>
      <Footer />
      
      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/573246801235"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
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
          {title}<span className={`${toneAccentText[tone]} text-[0.6em]`}>.</span>
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