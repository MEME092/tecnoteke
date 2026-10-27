import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { categories } from '../data/categories';
import { articles } from '../data/articles';
import { ExternalLink, Compass, BookOpen, Layers, Shield } from 'lucide-react';

interface SitemapPageProps {
  onNavigate: (path: string) => void;
}

export default function SitemapPage({ onNavigate }: SitemapPageProps) {
  return (
    <>
      <SEOHead
        title="Mapa del sitio web"
        description="Índice estructurado de todas las páginas, guías botánicas y recursos publicados en Garnish Botánico."
        pathname="/mapa-del-sitio"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumbs
          items={[{ label: 'Mapa del sitio' }]}
          onNavigate={onNavigate}
        />

        <header className="space-y-4 border-b border-stone-200 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A9A85]">
            Estructura Web Canónica
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#142E22]">
            Mapa HTML del sitio
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
            Índice completo de navegación para lectores y motores de búsqueda con acceso directo a cada URL canónica de https://tecnoteke.lol/
          </p>
        </header>

        <div className="space-y-12">
          {/* 1. Página de Inicio */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
              <Compass className="w-5 h-5 text-[#142E22]" />
              <h2 className="font-serif text-2xl font-bold text-[#142E22]">
                Página principal
              </h2>
            </div>
            <ul className="text-sm space-y-2 text-stone-800">
              <li className="flex items-baseline gap-2">
                <span className="font-mono text-stone-400 text-xs">/</span>
                <button
                  onClick={() => onNavigate('/')}
                  className="font-medium text-[#142E22] hover:underline"
                >
                  Inicio — Portada Editorial de Garnish Botánico
                </button>
              </li>
            </ul>
          </section>

          {/* 2. Categorías Principales */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
              <Layers className="w-5 h-5 text-[#142E22]" />
              <h2 className="font-serif text-2xl font-bold text-[#142E22]">
                Categorías editoriales (4 monografías)
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categories.map((cat) => (
                <div key={cat.slug} className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
                  <span className="font-mono text-[11px] text-stone-400">
                    /categoria/{cat.slug}
                  </span>
                  <h3 className="font-serif font-bold text-base text-stone-900">
                    <button
                      onClick={() => onNavigate(`/categoria/${cat.slug}`)}
                      className="hover:text-[#142E22] hover:underline text-left"
                    >
                      {cat.name}
                    </button>
                  </h3>
                  <p className="text-xs text-stone-600 line-clamp-2">
                    {cat.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Todos los Artículos Editoriales */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
              <BookOpen className="w-5 h-5 text-[#142E22]" />
              <h2 className="font-serif text-2xl font-bold text-[#142E22]">
                Artículos y guías de cultivo completas ({articles.length} artículos)
              </h2>
            </div>
            <ul className="divide-y divide-stone-200 bg-white rounded-xl border border-stone-200 overflow-hidden">
              {articles.map((art) => (
                <li key={art.slug} className="p-4 hover:bg-stone-50 transition-colors space-y-1">
                  <div className="flex items-center justify-between text-xs text-stone-500 font-mono">
                    <span>/articulo/{art.slug}</span>
                    <span className="text-[11px] font-sans">{art.readTimeMinutes} min de lectura</span>
                  </div>
                  <h3 className="font-serif font-bold text-sm sm:text-base text-stone-900">
                    <button
                      onClick={() => onNavigate(`/articulo/${art.slug}`)}
                      className="hover:text-[#142E22] hover:underline text-left"
                    >
                      {art.title}
                    </button>
                  </h3>
                  {art.scientificName && (
                    <p className="font-serif italic text-xs text-stone-500">
                      Taxonomía: {art.scientificName}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Páginas Institucionales y Legales */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 border-b border-stone-200 pb-2">
              <Shield className="w-5 h-5 text-[#142E22]" />
              <h2 className="font-serif text-2xl font-bold text-[#142E22]">
                Páginas institucionales, de contacto y legales
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
                <span className="font-mono text-[11px] text-stone-400">/sobre-nosotros</span>
                <h3 className="font-serif font-bold text-sm text-stone-900">
                  <button
                    onClick={() => onNavigate('/sobre-nosotros')}
                    className="hover:text-[#142E22] hover:underline"
                  >
                    Sobre nosotros — Misión y Autoría
                  </button>
                </h3>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
                <span className="font-mono text-[11px] text-stone-400">/contacto</span>
                <h3 className="font-serif font-bold text-sm text-stone-900">
                  <button
                    onClick={() => onNavigate('/contacto')}
                    className="hover:text-[#142E22] hover:underline"
                  >
                    Contacto editorial
                  </button>
                </h3>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
                <span className="font-mono text-[11px] text-stone-400">/politica-editorial</span>
                <h3 className="font-serif font-bold text-sm text-stone-900">
                  <button
                    onClick={() => onNavigate('/politica-editorial')}
                    className="hover:text-[#142E22] hover:underline"
                  >
                    Política editorial y rigor botánico
                  </button>
                </h3>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
                <span className="font-mono text-[11px] text-stone-400">/politica-de-privacidad</span>
                <h3 className="font-serif font-bold text-sm text-stone-900">
                  <button
                    onClick={() => onNavigate('/politica-de-privacidad')}
                    className="hover:text-[#142E22] hover:underline"
                  >
                    Política de privacidad (RGPD)
                  </button>
                </h3>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
                <span className="font-mono text-[11px] text-stone-400">/politica-de-cookies</span>
                <h3 className="font-serif font-bold text-sm text-stone-900">
                  <button
                    onClick={() => onNavigate('/politica-de-cookies')}
                    className="hover:text-[#142E22] hover:underline"
                  >
                    Política de cookies y panel de control
                  </button>
                </h3>
              </div>

              <div className="p-4 bg-white rounded-xl border border-stone-200 space-y-1">
                <span className="font-mono text-[11px] text-stone-400">/politica-editorial</span>
                <h3 className="font-serif font-bold text-sm text-stone-900">
                  <button
                    onClick={() => onNavigate('/politica-editorial')}
                    className="hover:text-[#142E22] hover:underline"
                  >
                    Política editorial y rigor botánico
                  </button>
                </h3>
              </div>
            </div>
          </section>

          {/* Archivo XML para rastreadores */}
          <div className="p-4 bg-[#FAF7F0] border border-stone-300 rounded-xl flex items-center justify-between text-xs text-stone-700">
            <span>Para motores de búsqueda y rastreadores automáticos:</span>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#142E22] hover:underline inline-flex items-center gap-1"
            >
              <span>Ver sitemap.xml canónico</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
