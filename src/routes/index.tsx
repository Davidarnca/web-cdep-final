import { createFileRoute, Link } from "@tanstack/react-router";
import { PageLayout } from "../components/PageLayout";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import investigacionImg from "../assets/investigacion.jpg";
import politicasImg from "../assets/politicas.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CDEP — Desarrollo de la Economía Popular en Colombia" },
      { name: "description", content: "Investigación, asesoría y formulación de políticas públicas para el desarrollo de la economía popular." },
      { property: "og:title", content: "CDEP — Desarrollo de la Economía Popular en Colombia" },
      { property: "og:description", content: "Innovación y políticas para el progreso." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageLayout>
      {/* HERO — centered, generous whitespace, per sketch */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-44 pb-20 md:pt-52 md:pb-32 text-center">
          <h1 className="font-display font-black text-3xl md:text-5xl lg:text-6xl uppercase tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Impulsando el desarrollo de la Economía Popular en Colombia
            <span className="text-brand-orange text-[0.6em]"> .</span>
          </h1>
          <p className="mt-8 text-base md:text-lg font-normal text-primary-foreground/80 max-w-xl mx-auto">
            Innovación y políticas para el progreso.
          </p>
          <div className="mx-auto mt-8 h-[3px] w-14 bg-brand-orange" />
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-orange hover:bg-brand-orange/90 text-white rounded-none font-display uppercase tracking-[0.16em] text-xs px-7 h-12">
              <Link to="/contacto">Contáctenos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-primary rounded-none font-display uppercase tracking-[0.16em] text-xs px-7 h-12">
              <Link to="/quienes-somos">Conocer más</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICIOS — heading like the sketch */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 md:py-32">
        <div className="text-center mb-20">
          <h2 className="font-display font-black text-3xl md:text-5xl text-primary uppercase tracking-tight">
            Nuestro Servicio<span className="text-brand-orange text-[0.6em]">.</span>
          </h2>
          <div className="mx-auto mt-6 h-[3px] w-12 bg-brand-orange" />
          <p className="mt-8 max-w-2xl mx-auto text-muted-foreground text-base leading-relaxed">
            Dos líneas de trabajo complementarias para acompañar a gobiernos y organizaciones
            en el fortalecimiento de la economía popular.
          </p>
        </div>

        {/* Alternating image/text blocks instead of 3-card grid */}
        <div className="space-y-24 md:space-y-32">
          <ServiceRow
            index="01"
            accent="bg-brand-green"
            title="Investigación"
            description="Diagnósticos territoriales, mapas de actores, análisis de datos y estudios aplicados que revelan la realidad de la economía popular en cada región del país."
            bullets={[
              "Diagnósticos y caracterizaciones",
              "Mapas y geo-referenciación",
              "Análisis estadístico y de datos",
              "Estudios sectoriales y territoriales",
            ]}
            href="/investigacion"
            img={investigacionImg}
          />
          <ServiceRow
            index="02"
            accent="bg-brand-orange"
            reverse
            title="Políticas Públicas"
            description="Formulación, acompañamiento e implementación de políticas, planes de desarrollo y programas productivos con enfoque municipal y participativo."
            bullets={[
              "Formulación de políticas públicas",
              "Planes de desarrollo municipal",
              "Programas y proyectos productivos",
              "Asesoría a entes territoriales",
            ]}
            href="/politicas-publicas"
            img={politicasImg}
          />
        </div>
      </section>

      {/* ¿Qué es economía popular? — minimal text band */}
      <section className="bg-secondary/60 border-y border-border">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 py-24 text-center">
          <div className="text-[11px] uppercase tracking-[0.22em] text-brand-orange font-display font-medium mb-5">
            Nuestro enfoque
          </div>
          <h2 className="font-display font-black text-2xl md:text-4xl text-primary uppercase tracking-tight">
            <span className="text-brand-orange">¿</span>Qué es la economía popular<span className="text-brand-orange">?</span>
          </h2>
          <div className="mx-auto mt-6 h-[3px] w-12 bg-brand-orange" />
          <p className="mt-8 text-muted-foreground leading-relaxed text-base md:text-lg max-w-3xl mx-auto">
            Hace referencia a las actividades de producción, distribución y comercialización
            de bienes y servicios desarrolladas por unidades económicas pequeñas: grupos
            familiares, tiendas barriales, microempresas, vendedores informales, campesinos,
            recicladores, plazas de mercado y modisterías que sostienen buena parte del país.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-24 text-center">
        <h3 className="font-display font-black text-2xl md:text-4xl text-primary uppercase tracking-tight max-w-3xl mx-auto">
          Construyamos juntos políticas con evidencia<span className="text-brand-orange text-[0.6em]"> .</span>
        </h3>
        <div className="mx-auto mt-6 h-[3px] w-12 bg-brand-orange" />
        <div className="mt-10">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-none font-display uppercase tracking-[0.16em] text-xs px-7 h-12">
            <Link to="/contacto">
              Hablemos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
}

function ServiceRow({
  index, accent, title, description, bullets, href, img, reverse,
}: {
  index: string;
  accent: string;
  title: string;
  description: string;
  bullets: string[];
  href: "/investigacion" | "/politicas-publicas";
  img: string;
  reverse?: boolean;
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div className="relative">
        <div className={`absolute -top-4 -left-4 w-24 h-24 ${accent} -z-0 hidden md:block`} />
        <img
          src={img}
          alt={title}
          className="relative w-full aspect-[4/3] object-cover shadow-xl"
          loading="lazy"
        />
      </div>
      <div>
        <div className="flex items-baseline gap-4 mb-5">
          <span className="font-display font-black text-5xl text-primary/15">{index}</span>
          <div className={`h-[3px] w-10 ${accent}`} />
        </div>
        <h3 className="font-display font-black text-3xl md:text-4xl text-primary uppercase tracking-tight mb-5">
          {title}<span className="text-brand-orange text-[0.6em]"> .</span>
        </h3>
        <p className="text-muted-foreground leading-relaxed text-base mb-6">
          {description}
        </p>
        <ul className="space-y-2.5 mb-8">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 text-sm text-foreground/85">
              <span className={`mt-1.5 h-1.5 w-1.5 ${accent} rounded-full shrink-0`} />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none font-display uppercase tracking-[0.16em] text-xs h-11 px-6">
          <Link to={href}>
            Ver detalle <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
