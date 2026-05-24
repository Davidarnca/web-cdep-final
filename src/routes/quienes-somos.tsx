import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import alejandroImg from "@/assets/alejandro-rivera.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes Somos — CDEP" },
      { name: "description", content: "Conozca al equipo y la misión del Centro Colombiano para el Desarrollo de la Economía Popular." },
    ],
  }),
  component: QuienesSomos,
});

function QuienesSomos() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Quiénes somos"
        title="Una organización dedicada al desarrollo de la economía popular."
        description="Promovemos el desarrollo de políticas públicas efectivas y el fortalecimiento de las capacidades institucionales para la construcción del tejido social."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Misión</h2>
          <p className="text-muted-foreground leading-relaxed">
            Investigar y asesorar sobre la economía popular para promover el desarrollo de
            políticas públicas efectivas y el fortalecimiento institucional que mejoren la
            toma de decisiones de los gobiernos en el territorio.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Visión</h2>
          <p className="text-muted-foreground leading-relaxed">
            Ser el referente nacional en investigación aplicada y formulación de políticas
            públicas que dignifiquen las actividades económicas de pequeñas unidades
            productivas en Colombia.
          </p>
        </div>
      </section>

      <section className="bg-secondary/60 border-y border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-3">Nuestro equipo</div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">Dirección General</h2>

          <article className="bg-card border border-border rounded-xl overflow-hidden grid md:grid-cols-3">
            <div className="md:col-span-1 bg-muted">
              <img src={alejandroImg} alt="Alejandro Rivera Camero" className="w-full h-full object-cover aspect-square md:aspect-auto" loading="lazy" />
            </div>
            <div className="md:col-span-2 p-8 md:p-10">
              <div className="text-xs uppercase tracking-wider text-brand font-semibold mb-2">Director General</div>
              <h3 className="text-2xl font-semibold text-foreground">Alejandro Rivera Camero</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
                Abogado, especialista en Gobierno y Gestión para el Desarrollo, Magíster en
                Ciencia Política para la Paz y la Integración de los Pueblos y Máster en
                Project Management (PMP).
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-[15px]">
                Experiencia como docente universitario en cátedras de contratación estatal,
                función pública, partidos políticos y sistemas electorales. Ha sido Alcalde
                Local, Subdirector de Asuntos Comunales del IDPAC, Director de Convivencia
                y Diálogo Social de la Secretaría Distrital de Gobierno y Director del
                Instituto para la Economía Social — IPES.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-2xl font-semibold mb-8">Valores institucionales</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Rigor", d: "Investigación con metodologías sólidas y evidencia verificable." },
            { t: "Compromiso", d: "Acompañamiento real a gobiernos locales y comunidades." },
            { t: "Independencia", d: "Análisis técnico libre de intereses particulares." },
          ].map((v) => (
            <div key={v.t} className="border-l-2 border-brand pl-5">
              <h3 className="font-semibold text-foreground mb-1.5">{v.t}</h3>
              <p className="text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
