import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "../components/PageLayout";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
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
    <PageLayout overlayHeader={true}>
      <Toaster richColors />
      
      {/* Franja azul estática con la altura EXACTA del Navbar (80px = h-20) */}
      <div className="bg-primary w-full h-20" />

      {/* Sección principal 100% blanca que inicia justo donde termina el menú */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start">
            
            <aside className="lg:col-span-2 space-y-8">
              <div>
                <div className="text-[11px] uppercase tracking-[0.25em] mb-4 font-display font-bold text-brand-orange">
                  Contacto
                </div>
                {/* Título en azul institucional */}
                <h1 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tight leading-[1.1] text-primary">
                  Hablemos sobre <br className="hidden md:block"/>su proyecto
                  <span className="text-brand-orange text-[0.6em]">.</span>
                </h1>
                <div className="mt-6 h-[3px] w-16 bg-brand-orange" />
                <p className="mt-6 text-base text-muted-foreground leading-relaxed max-w-sm">
                  Estamos listos para transformar datos en política pública. ¿Tiene una visión? Nosotros tenemos la evidencia.
                </p>
              </div>

              <div className="space-y-6 pt-4">
                {[
                  { icon: Mail, label: "Correo", value: "centrodesarrolloep@outlook.com" },
                  { icon: Phone, label: "Llamadas", value: "+57 324 680 1235" },
                  { icon: MapPin, label: "Sede", value: "Bogotá, Colombia" },
                ].map((c) => (
                  <div key={c.label} className="flex gap-5 items-center">
                    {/* Iconos en naranja */}
                    <div className="h-10 w-10 rounded-full bg-brand-orange/10 grid place-items-center flex-shrink-0">
                      <c.icon className="h-4 w-4 text-brand-orange" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground font-bold block mb-0.5">{c.label}</span>
                      <span className="text-primary font-semibold text-sm">{c.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Formulario con fondo gris suave (slate-50) para contrastar contra el blanco */}
            <form
              onSubmit={onSubmit}
              className="lg:col-span-3 bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 space-y-5 shadow-xl"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field name="nombre" label="Nombre completo" required />
                <Field name="email" label="Correo electrónico" type="email" required />
              </div>
              <Field name="organizacion" label="Organización (opcional)" />
              <Field name="asunto" label="Asunto" required />
              <div>
                <label className="block text-xs font-bold text-primary/80 mb-2">Mensaje *</label>
                <textarea
                  name="mensaje"
                  rows={4}
                  maxLength={1000}
                  required
                  className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-primary placeholder-muted-foreground outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition shadow-sm"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white px-8 py-3.5 text-xs font-display font-bold uppercase tracking-[0.2em] shadow-md shadow-brand-orange/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-60"
              >
                {submitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function Field({ name, label, type = "text", required }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-bold text-primary/80 mb-2">
        {label}{required && " *"}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm text-primary placeholder-muted-foreground outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition shadow-sm"
      />
    </div>
  );
}