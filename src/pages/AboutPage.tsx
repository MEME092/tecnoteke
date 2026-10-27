import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { Flower2, Mail, ShieldCheck, Compass, HeartHandshake } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <>
      <SEOHead
        title="Sobre nosotros"
        description="Conoce el propósito editorial, la misión botánica y el compromiso de inocuidad alimentaria de Garnish Botánico."
        pathname="/sobre-nosotros"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumbs
          items={[{ label: 'Sobre nosotros' }]}
          onNavigate={onNavigate}
        />

        <header className="space-y-4 border-b border-stone-200 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A9A85]">
            Misión e Identidad
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#142E22]">
            Sobre Garnish Botánico
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed font-sans">
            Una publicación editorial dedicada al cultivo responsable, la identificación taxonómica y el uso gastronómico seguro de flores comestibles.
          </p>
        </header>

        <section className="prose-editorial font-sans space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#142E22]">
            Nuestro propósito editorial
          </h2>
          <p>
            El auge de la mixología botánica y la cocina de autor ha multiplicado la presencia de corolas y pétalos en platos y copas. Sin embargo, este entusiasmo estético ha venido a menudo acompañado de una peligrosa desinformación: el uso de flores adquiridas en floristerías convencionales tratadas con pesticidas no aptos para el consumo, o la recolección imprudente de especies silvestres sin certeza taxonómica.
          </p>
          <p>
            <strong>Garnish Botánico</strong> nació para aportar claridad, rigor y metodología al sector. No somos un escaparate publicitario ni una plataforma de recetas apresuradas: somos un recurso educativo y técnico orientado a cultivadores, cocineros, bartenders y amantes de la botánica aplicada.
          </p>
        </section>

        {/* Pilares Editoriales */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#142E22]" />
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Inocuidad alimentaria
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              La belleza de una flor jamás debe anteponerse a la salud. Validamos la idoneidad de consumo humano de cada especie mencionada basándonos en organismos sanitarios oficiales.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <Compass className="w-6 h-6 text-[#142E22]" />
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Rigor taxonómico
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Cada planta se identifica por su nombre científico binomial (género y especie). Evitamos la ambigüedad de nombres vulgares que conduce a intoxicaciones accidentales.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border border-stone-200 space-y-3">
            <Flower2 className="w-6 h-6 text-[#142E22]" />
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Autocultivo limpio
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Defendemos el cultivo propio desde semilla orgánica sin tratamientos químicos sistémicos como la única vía plenamente confiable para la alta gastronomía.
            </p>
          </div>
        </section>

        {/* Responsable Editorial */}
        <section className="bg-[#FAF7F0] border border-stone-300 rounded-2xl p-8 space-y-4">
          <h2 className="font-serif text-2xl font-bold text-[#142E22]">
            Responsable editorial
          </h2>
          <div className="space-y-3 text-sm text-stone-700 font-sans leading-relaxed">
            <p>
              La dirección y coordinación de los contenidos publicados en Garnish Botánico está a cargo de <strong>Andres Martinez</strong>.
            </p>
            <p>
              Actuamos con plena transparencia: no inventamos credenciales académicas inexistentes, patrocinios opacos ni laboratorios ficticios. Nuestra credibilidad reposa en la exhaustiva contrastación bibliográfica de cada guía con manuales agronómicos universitarios, botánicos de referencia y directrices del Codex Alimentarius.
            </p>
            <div className="pt-2 flex items-center gap-2 text-stone-900 font-medium">
              <Mail className="w-4 h-4 text-[#7A9A85]" />
              <span>Correo directo: </span>
              <a href="mailto:andresy1999@gmail.com" className="text-[#142E22] underline">
                andresy1999@gmail.com
              </a>
            </div>
          </div>
        </section>

        <div className="pt-4 flex justify-between items-center text-xs text-stone-500 border-t border-stone-200">
          <button
            onClick={() => onNavigate('/')}
            className="text-[#142E22] hover:underline font-semibold"
          >
            ← Volver a la portada principal
          </button>
          <button
            onClick={() => onNavigate('/politica-editorial')}
            className="text-[#142E22] hover:underline"
          >
            Consultar política editorial y de correcciones →
          </button>
        </div>
      </div>
    </>
  );
}
