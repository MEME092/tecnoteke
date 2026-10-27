import { useState } from 'react';
import { ArrowRight, BookOpen, Sparkles, Sprout, ShieldAlert, Compass, Calendar, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { categories } from '../data/categories';
import { articles, getFeaturedArticles } from '../data/articles';
import { seasonalTips } from '../data/seasonal';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [activeSeason, setActiveSeason] = useState<number>(0);
  const featured = getFeaturedArticles();
  const currentSeasonData = seasonalTips[activeSeason];

  return (
    <>
      <SEOHead
        title="Cultiva flores comestibles y transforma tus creaciones gastronómicas"
        description="Descubre cómo cultivar flores comestibles, identificarlas responsablemente, cosecharlas y utilizarlas para crear guarniciones botánicas para cócteles y platos de alta cocina."
        pathname="/"
        image="/assets/images/hero-portada.jpg"
      />

      <div className="space-y-20 lg:space-y-28">
        {/* ========================================================
            SECCIÓN B: PORTADA EDITORIAL (HERO)
           ======================================================== */}
        <section aria-label="Portada editorial" className="relative pt-6 lg:pt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Columna de Texto Editorial */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A9A85]">
                  <Sprout className="w-4 h-4 text-[#142E22]" />
                  <span>Publicación Editorial Especializada</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#142E22] leading-[1.15] text-balance">
                  Cultiva flores comestibles y transforma tus creaciones gastronómicas
                </h1>

                <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-2xl font-sans">
                  Descubre cómo cultivar flores comestibles, identificarlas responsablemente, cosecharlas y utilizarlas para crear guarniciones botánicas para cócteles y platos de alta cocina.
                </p>

                {/* Botones de Acción Funcionales */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigate('/categoria/cultivo-de-flores-comestibles')}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-[#142E22] rounded-lg hover:bg-[#1B382B] active:scale-95 transition-all duration-150 shadow-sm"
                  >
                    <span>Explorar guías de cultivo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('/categoria/cocteleria-y-alta-cocina')}
                    className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-[#142E22] bg-white border border-stone-300 rounded-lg hover:bg-stone-50 hover:border-stone-400 active:scale-95 transition-all duration-150 shadow-xs"
                  >
                    <span>Descubrir ideas gastronómicas</span>
                    <Sparkles className="w-4 h-4 text-[#7A9A85]" />
                  </button>
                </div>

                {/* Metadata editorial sutil (sin pills) */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-stone-500 border-t border-stone-200">
                  <span>Dirección editorial: Andres Martinez</span>
                  <span aria-hidden="true">·</span>
                  <span>4 categorías monográficas</span>
                  <span aria-hidden="true">·</span>
                  <span>{articles.length} guías completas en español</span>
                </div>
              </div>

              {/* Columna de Imagen Hero Principal */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-stone-200 bg-stone-100 shadow-lg group">
                  <img
                    src="/assets/images/hero-portada.jpg"
                    alt="Bodegón editorial con flores comestibles frescas sobre pizarra, cóctel botánico artesanal y hojas verdes en luz natural"
                    className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1">
                    <p className="font-serif italic text-stone-200">Fig. 1 — Mesa de trabajo botánico con capuchinas, borrajas y violas</p>
                    <p className="text-[11px] text-stone-300">Garnish Botánico · Archivo fotográfico original</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================
            SECCIÓN C: ARTÍCULOS DESTACADOS (3 ARTÍCULOS)
           ======================================================== */}
        <section aria-labelledby="featured-articles-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-stone-200 pb-4 mb-8 flex items-baseline justify-between">
            <div>
              <h2
                id="featured-articles-heading"
                className="font-serif text-2xl sm:text-3xl font-semibold text-[#142E22]"
              >
                Artículos destacados
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                Monografías de cultivo y aplicaciones culinarias esenciales
              </p>
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-stone-400 hidden sm:inline">
              Selección editorial
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featured.map((article) => (
              <article
                key={article.slug}
                className="group flex flex-col bg-white rounded-xl border border-stone-200/80 overflow-hidden hover:border-stone-400 hover:shadow-md transition-all duration-200"
              >
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.altText}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#142E22]/90 backdrop-blur-xs text-white text-[11px] font-sans px-2.5 py-1 rounded-md">
                    {article.categorySlug === 'cultivo-de-flores-comestibles'
                      ? 'Cultivo'
                      : article.categorySlug === 'cocteleria-y-alta-cocina'
                      ? 'Coctelería'
                      : 'Botánica'}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-stone-500">
                      <span>{article.publishDate}</span>
                      <span aria-hidden="true">·</span>
                      <span>{article.readTimeMinutes} min de lectura</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-[#142E22] transition-colors leading-snug">
                      <button
                        onClick={() => onNavigate(`/articulo/${article.slug}`)}
                        className="text-left focus-visible:outline-2 focus-visible:outline-[#142E22]"
                      >
                        {article.title}
                      </button>
                    </h3>

                    <p className="text-sm text-stone-600 line-clamp-3 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                    <button
                      onClick={() => onNavigate(`/articulo/${article.slug}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#142E22] hover:text-[#1B382B] group-hover:underline"
                    >
                      <span>Leer artículo completo</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    {article.scientificName && (
                      <span className="text-[11px] font-serif italic text-stone-500">
                        {article.scientificName}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================
            SECCIÓN E: EXPLORAR LAS CUATRO CATEGORÍAS
           ======================================================== */}
        <section aria-labelledby="categories-heading" className="bg-[#F4EFE6] py-16 border-y border-stone-300/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
              <h2
                id="categories-heading"
                className="font-serif text-3xl sm:text-4xl font-semibold text-[#142E22]"
              >
                Explorar categorías
              </h2>
              <p className="text-base text-stone-700 font-sans">
                Cuatro áreas monográficas estructuradas para acompañarte desde la siembra hasta la copa y el plato
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <div
                  key={cat.slug}
                  className="bg-white rounded-xl border border-stone-200/90 overflow-hidden flex flex-col group hover:shadow-lg transition-all duration-200"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                    <img
                      src={cat.image}
                      alt={cat.altText}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-mono uppercase tracking-widest text-white/90 bg-black/40 px-2 py-0.5 rounded">
                      Sección 0{idx + 1}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-[#142E22] transition-colors">
                        <button
                          onClick={() => onNavigate(`/categoria/${cat.slug}`)}
                          className="text-left focus-visible:outline-2 focus-visible:outline-[#142E22]"
                        >
                          {cat.name}
                        </button>
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        {cat.shortDescription}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate(`/categoria/${cat.slug}`)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#142E22] hover:underline pt-2 border-t border-stone-100"
                    >
                      <span>Ver guías y recursos</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECCIÓN D: ÚLTIMAS PUBLICACIONES (CUADRÍCULA COMPLETA)
           ======================================================== */}
        <section aria-labelledby="latest-articles-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-stone-200 pb-4 mb-8 flex items-baseline justify-between">
            <div>
              <h2
                id="latest-articles-heading"
                className="font-serif text-2xl sm:text-3xl font-semibold text-[#142E22]"
              >
                Todas las publicaciones editoriales
              </h2>
              <p className="text-sm text-stone-600 mt-1">
                Índice completo de guías botánicas, técnicas de cosecha y coctelería
              </p>
            </div>
            <span className="text-xs text-stone-500 font-sans">
              {articles.length} artículos publicados
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white rounded-lg border border-stone-200/80 overflow-hidden flex flex-col group hover:border-stone-400 transition-colors"
              >
                <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.altText}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <div className="text-[11px] text-stone-500 flex items-center gap-1.5">
                      <span>{article.readTimeMinutes} min</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate max-w-[130px]">
                        {categories.find((c) => c.slug === article.categorySlug)?.name.split(' ')[0]}
                      </span>
                    </div>
                    <h3 className="font-serif text-base font-bold text-stone-900 group-hover:text-[#142E22] transition-colors leading-snug">
                      <button
                        onClick={() => onNavigate(`/articulo/${article.slug}`)}
                        className="text-left line-clamp-2"
                      >
                        {article.title}
                      </button>
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                      {article.summary}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate(`/articulo/${article.slug}`)}
                    className="text-xs font-semibold text-[#142E22] hover:underline inline-flex items-center gap-1 pt-2 border-t border-stone-100"
                  >
                    <span>Leer</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ========================================================
            SECCIÓN F: GUÍA DE CULTIVO ESTACIONAL
           ======================================================== */}
        <section aria-labelledby="seasonal-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#142E22] text-[#FBF9F5] rounded-2xl p-8 sm:p-12 shadow-xl border border-[#1B382B]">
            <div className="max-w-3xl mb-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A9A85]">
                <Calendar className="w-4 h-4" />
                <span>Planificación agronómica</span>
              </div>
              <h2
                id="seasonal-heading"
                className="font-serif text-3xl sm:text-4xl font-semibold text-white"
              >
                Guía de cultivo estacional
              </h2>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-sans">
                El éxito con las flores comestibles depende íntimamente de la especie, la latitud, la altitud y el microclima particular de cada espacio de cultivo. No todos los lectores comparten las mismas estaciones ni rangos térmicos. Utiliza este calendario como orientación dinámica adaptable a tu entorno.
              </p>
            </div>

            {/* Pestañas de Estación (Botones interactivos accesibles) */}
            <div className="flex flex-wrap gap-2 mb-8 p-1 bg-[#1B382B] rounded-xl max-w-fit">
              {seasonalTips.map((tip, idx) => (
                <button
                  key={tip.season}
                  onClick={() => setActiveSeason(idx)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors duration-150 ${
                    activeSeason === idx
                      ? 'bg-white text-[#142E22] shadow-xs'
                      : 'text-stone-300 hover:text-white'
                  }`}
                  aria-pressed={activeSeason === idx}
                >
                  {tip.season}
                </button>
              ))}
            </div>

            {/* Contenido de la Estación Activa */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-white/10">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="font-serif text-2xl font-semibold text-[#7A9A85]">
                  {currentSeasonData.title}
                </h3>
                <p className="text-sm text-stone-200 leading-relaxed">
                  {currentSeasonData.generalAdvice}
                </p>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-xs uppercase tracking-wider text-[#7A9A85] font-semibold">
                    Criterio de cosecha en esta época:
                  </span>
                  <p className="text-xs text-stone-300">
                    {currentSeasonData.harvestNotes}
                  </p>
                </div>
              </div>

              <div className="space-y-3 bg-white/5 p-6 rounded-xl border border-white/10">
                <h4 className="text-xs uppercase tracking-widest text-stone-400 font-mono">
                  Especies prioritarias
                </h4>
                <ul className="space-y-2 text-sm text-stone-200">
                  {currentSeasonData.speciesToWatch.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#7A9A85] font-bold">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECCIÓN G: INSPIRACIÓN GASTRONÓMICA
           ======================================================== */}
        <section aria-labelledby="inspiration-heading" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <h2
              id="inspiration-heading"
              className="font-serif text-3xl font-semibold text-[#142E22]"
            >
              Inspiración gastronómica y coctelería
            </h2>
            <p className="text-sm text-stone-600 font-sans">
              Ejemplos reales de montajes botánicos ejecutados con especies de idoneidad alimentaria verificada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Tarjeta 1: Coctelería con hielo floral */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-1/2 aspect-square sm:aspect-auto relative bg-stone-100">
                <img
                  src="/assets/images/cubitos-hielo-flores.jpg"
                  alt="Cubos grandes de hielo puro transparente con flores de borraja y pensamientos suspendidos"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#7A9A85] font-semibold">
                    Mixología de Precisión
                  </span>
                  <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                    Hielo cristalino unidireccional con borraja
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Aísla el agua en congelación vertical para atrapar corolas de Borago officinalis con aroma a pepino en destilados premium.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('/articulo/como-preparar-cubitos-de-hielo-con-flores-comestibles')}
                  className="text-xs font-semibold text-[#142E22] hover:underline inline-flex items-center gap-1"
                >
                  <span>Ver técnica de congelación</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Tarjeta 2: Copa coupé botánica */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col sm:flex-row">
              <div className="sm:w-1/2 aspect-square sm:aspect-auto relative bg-stone-100">
                <img
                  src="/assets/images/flores-cocteles-guarnicion.jpg"
                  alt="Copa coupé de cóctel artesanal con pétalos de caléndula y mini pinza de bambú"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-[#7A9A85] font-semibold">
                    Diseño de Servicio
                  </span>
                  <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                    Sujeciones no invasivas en el cristal
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Pautas para colocar guarniciones florales sin invadir el área de contacto labial ni sobrecargar el líquido de polen suelto.
                  </p>
                </div>
                <button
                  onClick={() => onNavigate('/articulo/como-elegir-flores-comestibles-para-cocteles')}
                  className="text-xs font-semibold text-[#142E22] hover:underline inline-flex items-center gap-1"
                >
                  <span>Consultar guía de maridaje</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECCIÓN H: PRESENTACIÓN DE LA PUBLICACIÓN
           ======================================================== */}
        <section aria-labelledby="about-publication-heading" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF7F0] border border-stone-300/80 rounded-2xl p-8 sm:p-12 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#7A9A85]">
              <BookOpen className="w-4 h-4 text-[#142E22]" />
              <span>Declaración Editorial</span>
            </div>

            <h2
              id="about-publication-heading"
              className="font-serif text-3xl font-semibold text-[#142E22]"
            >
              Acerca de Garnish Botánico
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-700 leading-relaxed font-sans">
              <p>
                <strong>Garnish Botánico</strong> es una publicación editorial independiente concebida para salvar la brecha existente entre la horticultura ecológica y la presentación gastronómica de vanguardia. Nos dirigimos a cocineros profesionales, bartenders, estudiantes de hostelería y aficionados culinarios que buscan cultivar y emplear flores comestibles con estricto rigor botánico y total seguridad alimentaria.
              </p>
              <p>
                Bajo la responsabilidad editorial de <strong>Andres Martinez</strong>, nuestro compromiso es erradicar el consumo temerario de especies no identificadas taxonómicamente o procedentes de floristerías ornamentales cargadas de pesticidas sintéticos no autorizados para la alimentación.
              </p>
              <p>
                Todos nuestros artículos se fundamentan en fuentes agronómicas contrastadas, manuales de extensión universitaria y directrices internacionales de higiene (Codex Alimentarius).
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#142E22]" />
                <span>Contacto directo: <strong>andresy1999@gmail.com</strong></span>
              </div>
              <button
                onClick={() => onNavigate('/sobre-nosotros')}
                className="font-semibold text-[#142E22] hover:underline"
              >
                Conocer más sobre nuestra política editorial →
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
