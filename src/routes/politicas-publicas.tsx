import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import { Check } from "lucide-react";
import img from "@/assets/politicas.jpg";

export const Route = createFileRoute("/politicas-publicas")({
  head: () => ({
    meta: [
      { title: "Políticas Públicas — CDEP" },
      { name: "description", content: "Formulación de políticas, planes, programas y proyectos para la economía popular." },
    ],
  }),
  component: Politicas,
});

const services = [
  "Formulación de política pública municipal para el desarrollo de la economía popular.",
  "Programas para la organización de la economía popular.",
  "Elaboración y desarrollo de festivales que promuevan la economía popular del municipio.",
  "Proyectos para la regulación y organización de la economía popular municipal.",
  "Formulación de Plan de Desarrollo Municipal.",
  "Formulación de programas multidimensionales municipales.",
  "Formulación de programas productivos.",
  "Formulación de programas de educación para el trabajo.",
];

function Politicas() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Servicios"
        title="Formulación de políticas públicas, programas y proyectos."
        description="Acompañamos a administraciones municipales en el diseño e implementación de instrumentos de política pública con enfoque territorial."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Nuestras capacidades</h2>
          <ul className="space-y-4">
            {services.map((s) => (
              <li key={s} className="flex gap-3">
                <span className="mt-1 h-5 w-5 rounded-full bg-brand/15 text-brand grid place-items-center flex-shrink-0">
                  <Check className="h-3 w-3" />
                </span>
                <span className="text-[15px] text-muted-foreground leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl overflow-hidden border border-border lg:order-last">
          <img src={img} alt="Políticas públicas CDEP" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </section>

      <section className="bg-secondary/60 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8">A quién acompañamos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { t: "Alcaldías municipales", d: "Diseño e implementación de instrumentos de política local." },
              { t: "Gobernaciones", d: "Estrategias departamentales con enfoque de economía popular." },
              { t: "Organizaciones sociales", d: "Fortalecimiento de capacidades y participación incidente." },
            ].map((p) => (
              <div key={p.t} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-1.5">{p.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
