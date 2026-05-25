import { createFileRoute } from "@tanstack/react-router";
// 1. Cambiamos esta ruta:
import { PageLayout, PageHeader } from "../components/PageLayout"; 
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
// 2. Y cambiamos esta también:
import { Toaster } from "../components/ui/sonner";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — CDEP" },
      { name: "description", content: "Comuníquese con el Centro Colombiano para el Desarrollo de la Economía Popular." },
    ],
  }),
  component: Contacto,
});

const schema = z.object({
  nombre: z.string().trim().min(2, "Ingrese su nombre").max(100),
  email: z.string().trim().email("Correo inválido").max(255),
  organizacion: z.string().trim().max(150).optional(),
  asunto: z.string().trim().min(3, "Indique el asunto").max(150),
  mensaje: z.string().trim().min(10, "Mínimo 10 caracteres").max(1000),
});

function Contacto() {
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Revise los campos");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Mensaje enviado. Le contactaremos pronto.");
    e.currentTarget.reset();
  }

  return (
    <PageLayout>
      <Toaster richColors />
      <PageHeader
        eyebrow="Contacto"
        title="Hablemos sobre su próximo proyecto."
        description="Estamos disponibles para asesorías, alianzas institucionales y propuestas de investigación."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-5 gap-12">
        <aside className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Información de contacto</h2>
            <p className="text-muted-foreground text-sm">Escríbanos o llámenos directamente.</p>
          </div>
          {[
            { icon: Mail, label: "Correo", value: "centrodesarrolloep@outlook.com" },
            { icon: Phone, label: "Teléfono", value: "+57 324 680 1235" },
            { icon: MapPin, label: "Ubicación", value: "Bogotá, Colombia" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 p-5 bg-card border border-border rounded-lg">
              <div className="h-10 w-10 rounded-md bg-brand/10 text-brand grid place-items-center flex-shrink-0">
                <c.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">{c.label}</div>
                <div className="text-foreground text-sm break-all">{c.value}</div>
              </div>
            </div>
          ))}
        </aside>

        <form onSubmit={onSubmit} className="lg:col-span-3 bg-card border border-border rounded-xl p-8 md:p-10 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <Field name="nombre" label="Nombre completo" required />
            <Field name="email" label="Correo electrónico" type="email" required />
          </div>
          <Field name="organizacion" label="Organización (opcional)" />
          <Field name="asunto" label="Asunto" required />
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Mensaje *</label>
            <textarea
              name="mensaje"
              rows={5}
              maxLength={1000}
              required
              className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 disabled:opacity-60 transition"
          >
            {submitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      </section>
    </PageLayout>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {label}{required && " *"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
      />
    </div>
  );
}
