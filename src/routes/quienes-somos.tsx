import { createFileRoute } from "@tanstack/react-router";
import { PageLayout, PageHeader } from "../components/PageLayout";

// ATENCIÓN: Verifica que estos nombres de archivo y extensiones coincidan 
// exactamente con las fotos que tienes en tu carpeta src/assets/
import alejandroImg from "../assets/AlejandroRivera.png";
import lorenaImg from "../assets/LorenaCalderon.png"; 
import andreaImg from "../assets/AndreaAlba.png";
import oscarImg from "../assets/OscarRodriguez.png";

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
        tone="green"
        eyebrow="Quiénes somos"
        title="Una organización dedicada al desarrollo de la economía popular"
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

      <section id="equipo" className="bg-secondary/40 border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-24">
          <div className="text-center mb-16">
            <div className="text-[11px] uppercase tracking-[0.22em] text-brand-orange font-display font-semibold mb-4">
              Nuestro equipo
            </div>
            <h2 className="font-display font-black text-3xl md:text-5xl text-primary uppercase tracking-tight">
              Quienes lideran el CDEP<span className="text-brand-orange text-[0.6em]">.</span>
            </h2>
            <div className="mx-auto mt-6 h-[3px] w-12 bg-brand-orange" />
            <p className="mt-8 max-w-2xl mx-auto text-muted-foreground text-base leading-relaxed">
              Un equipo multidisciplinario con amplia trayectoria en lo público, comprometido
              con la investigación y el diseño de políticas para la economía popular.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((m, i) => (
              <TeamCard key={m.name} member={m} accent={accents[i % accents.length]} image={m.image} />
            ))}
          </div>
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

type Member = {
  name: string;
  role: string;
  bio: string;
  image?: string;
};

const team: Member[] = [
  {
    name: "Alejandro Rivera Camero",
    role: "Director General",
    image: alejandroImg,
    bio: "Abogado, especialista en Gobierno y Gestión para el Desarrollo, Magíster en Ciencia Política para la Paz y la Integración de los Pueblos y Máster en Project Management (PMP). Docente universitario en cátedras de contratación estatal, función pública, partidos políticos y sistemas electorales. Ha sido Alcalde Local, Subdirector de Asuntos Comunales del IDPAC, Director de Convivencia y Diálogo Social de la Secretaría Distrital de Gobierno y Director del Instituto para la Economía Social — IPES.",
  },
  {
    name: "Lorena Calderón Martínez",
    role: "Subdirectora",
    image: lorenaImg,
    bio: "Administradora pública, especialista en políticas públicas sociales. Más de 7 años de experiencia en formulación, implementación y seguimiento de políticas públicas, planes de desarrollo, proyectos y programas: definición de metas e indicadores, planes de acción, procesos de participación con actores sociales y planeación estratégica institucional y sectorial. Experiencia en la Secretaría Distrital de Gobierno, IDPAC e IPES.",
  },
  {
    name: "Andrea Nataly Alba",
    role: "Secretaría General",
    image: andreaImg,
    bio: "Administradora pública, especialista en Gobierno y Gestión Pública Territorial. Más de 6 años de experiencia en planeación y seguimiento a la ejecución presupuestal y proyectos de inversión, contratación pública, formulación de proyectos de desarrollo, relacionamiento con organismos de control y trabajo con comunidades indígenas. Conocimiento en negociación sindical, estatutos tributarios y supervisión de contratos. Experiencia en las alcaldías de Almaguer, Bolívar (Cauca) y La Calera, la Secretaría Distrital del Hábitat y el Ministerio de Minas y Energía.",
  },
  {
    name: "Oscar Rodríguez Niño",
    role: "Coordinador de Proyectos",
    image: oscarImg,
    bio: "Administrador Público, especialista en gerencia de proyectos y Magíster (e) en Desarrollo Humano. 11 años de experiencia en entidades públicas y privadas como contratista y consultor en formulación e implementación de proyectos asociados a desempeño institucional, gobierno digital, grupos poblacionales y participación. Capacitador y facilitador con servidores públicos y organizaciones sociales. Experiencia en la Secretaría General de la Alcaldía Mayor de Bogotá, IGAC, DAFP, Veeduría Distrital, Secretaría de Educación Distrital, SDIS, Universidad Pedagógica Nacional, Colsubsidio y Universidad La Gran Colombia.",
  },
];

const accents = ["bg-brand", "bg-brand-green", "bg-brand-orange", "bg-brand-pink"] as const;

function TeamCard({ member, accent, image }: { member: Member; accent: string; image?: string }) {
  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <div className="flex items-stretch gap-0">
        <div className="w-32 sm:w-44 shrink-0 relative overflow-hidden bg-muted self-stretch">
          {image ? (
            <img
              src={image}
              alt={member.name}
              className="absolute inset-0 w-full h-full object-cover object-top"
              loading="lazy"
            />
          ) : (
            <div className={`w-full h-full min-h-[180px] flex items-center justify-center ${accent}`}>
              <span className="font-display font-black text-4xl text-white tracking-tight">
                {initials}
              </span>
            </div>
          )}
          <div className={`absolute bottom-0 left-0 right-0 h-1 ${accent}`} />
        </div>
        <div className="flex-1 p-6 md:p-7">
          <div className={`inline-block text-[10px] uppercase tracking-[0.18em] font-display font-semibold text-white px-2.5 py-1 mb-3 ${accent}`}>
            {member.role}
          </div>
          <h3 className="font-display font-bold text-lg md:text-xl text-primary leading-tight">
            {member.name}
          </h3>
        </div>
      </div>
      <div className="px-6 md:px-7 pb-7 pt-1">
        <p className="font-sans text-[14px] leading-relaxed text-muted-foreground">
          {member.bio}
        </p>
      </div>
    </article>
  );
}