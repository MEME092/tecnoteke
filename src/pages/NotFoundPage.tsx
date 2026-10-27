import SEOHead from '../components/SEOHead';
import { Compass, Home, BookOpen, Layers } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export default function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <>
      <SEOHead
        title="Página no encontrada (Error 404)"
        description="La página que buscas no existe o ha sido movida. Explora nuestras guías de cultivo de flores comestibles y coctelería."
        pathname="/404"
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
        <div className="space-y-4">
          <span className="font-mono text-sm tracking-widest text-[#7A9A85] uppercase">
            Error 404 · Ruta no encontrada
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#142E22]">
            Esta página botánica no ha florecido aquí
          </h1>
          <p className="text-base text-stone-600 max-w-lg mx-auto font-sans leading-relaxed">
            Es posible que la dirección esté mal escrita, que el artículo haya sido renombrado o que la página haya sido reubicada.
          </p>
        </div>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#142E22] rounded-lg hover:bg-[#1B382B] transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Volver al inicio</span>
          </button>

          <button
            onClick={() => onNavigate('/mapa-del-sitio')}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#142E22] bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors shadow-xs"
          >
            <Compass className="w-4 h-4 text-[#7A9A85]" />
            <span>Ver mapa del sitio</span>
          </button>
        </div>

        <div className="pt-10 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-xl mx-auto">
          <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
            <h3 className="font-serif font-bold text-sm text-[#142E22] flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#7A9A85]" />
              <span>Categorías principales</span>
            </h3>
            <p className="text-xs text-stone-600">
              Explora nuestras cuatro secciones dedicadas al cultivo, seguridad, conservación y coctelería.
            </p>
            <button
              onClick={() => onNavigate('/categoria/cultivo-de-flores-comestibles')}
              className="text-xs font-semibold text-[#142E22] hover:underline pt-1 inline-block"
            >
              Ir a Cultivo →
            </button>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
            <h3 className="font-serif font-bold text-sm text-[#142E22] flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#7A9A85]" />
              <span>Guías destacadas</span>
            </h3>
            <p className="text-xs text-stone-600">
              Aprende a cultivar capuchinas, violas y caléndulas desde semilla con seguridad.
            </p>
            <button
              onClick={() => onNavigate('/articulo/como-cultivar-capuchinas-comestibles')}
              className="text-xs font-semibold text-[#142E22] hover:underline pt-1 inline-block"
            >
              Ver guía de capuchinas →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
