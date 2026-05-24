import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "@/components/PageLayout";
import { Check } from "lucide-react";
import img from "@/assets/investigacion.jpg";

export const Route = createFileRoute("/investigacion")({
  head: () => ({
    meta: [
      { title: "Servicios de Investigación — CDEP" },
      { name: "description", content: "Diagnósticos, mapas, análisis y estudios territoriales sobre la economía popular." },
    ],
  }),
  component: Investigacion,
});

const services = [
  "Documentos de diagnóstico sobre comercio formal, economía municipal, vendedores informales, plazas de mercado y recicladores.",
  "Realización de mapas de economía popular.",
  "Análisis de datos y tendencias de la economía popular.",
  "Estudios territoriales comparativos de economía popular.",
  "Integración y relación de la economía popular con los demás sectores (servicios, comercio, industria, turismo).",
  "Organización de conferencias, foros y conversatorios sobre economía popular.",
  "Evaluación de la estructura del mercado laboral y su relación con la economía popular.",
];

function Investigacion() {
  return (
    <PageLayout>
      <PageHeader
        eyebrow="Servicios"
        title="Investigación aplicada para entender la economía popular."
        description="Producimos evidencia rigurosa que permite a gobiernos y organizaciones tomar mejores decisiones sobre el tejido económico de los territorios."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-start">
        <div className="rounded-xl overflow-hidden border border-border">
          <img src={img} alt="Investigación CDEP" className="w-full h-full object-cover" loading="lazy" />
        </div>
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
      </section>

      <section className="bg-secondary/60 border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-2xl font-semibold mb-8">Metodología de trabajo</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Diagnóstico", d: "Caracterización inicial del contexto territorial." },
              { n: "02", t: "Levantamiento", d: "Recolección de datos primarios y secundarios." },
              { n: "03", t: "Análisis", d: "Procesamiento e interpretación de hallazgos." },
              { n: "04", t: "Entrega", d: "Documentos técnicos y recomendaciones accionables." },
            ].map((p) => (
              <div key={p.n} className="bg-card border border-border rounded-lg p-6">
                <div className="text-brand font-display text-sm font-semibold mb-2">{p.n}</div>
                <h3 className="font-semibold text-foreground mb-1.5">{p.t}</h3>
                <p className="text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
