import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32 text-center">
        {eyebrow && (
          <div className="text-[11px] uppercase tracking-[0.22em] text-white/70 mb-5 font-display font-medium">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display font-black text-3xl md:text-5xl max-w-4xl mx-auto uppercase tracking-tight leading-[1.15]">
          {title}<span className="text-brand-orange">.</span>
        </h1>
        {description && (
          <p className="mt-6 text-base md:text-lg font-normal text-primary-foreground/75 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
        <div className="mx-auto mt-8 h-[3px] w-12 bg-brand-orange" />
      </div>
    </section>
  );
}
