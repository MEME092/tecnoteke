import { getCategoryBySlug, categories } from '../data/categories';
import { getArticlesByCategory } from '../data/articles';
import Breadcrumbs from '../components/Breadcrumbs';
import SEOHead from '../components/SEOHead';
import { ArrowRight, ChevronRight, CheckCircle2, ShieldAlert } from 'lucide-react';

interface CategoryPageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function CategoryPage({ slug, onNavigate }: CategoryPageProps) {
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-[#142E22]">Categoría no encontrada</h1>
        <p className="text-stone-600">La sección botánica solicitada no existe o ha sido reubicada.</p>
        <button
          onClick={() => onNavigate('/')}
          className="px-4 py-2 text-sm font-semibold text-white bg-[#142E22] rounded-lg hover:bg-[#1B382B]"
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  const articles = getArticlesByCategory(category.slug);
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <>
      <SEOHead
        title={category.name}
        description={category.shortDescription}
        pathname={`/categoria/${category.slug}`}
        image={category.image}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
        {/* Migas de pan */}
        <Breadcrumbs
          items={[
            { label: 'Categorías', path: '/' },
            { label: category.name }
          ]}
          onNavigate={onNavigate}
        />

        {/* Hero de Categoría */}
        <header className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pb-12 border-b border-stone-200">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-[#7A9A85]">
              Categoría Editorial Monográfica
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#142E22] leading-tight">
              {category.name}
            </h1>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
              {category.longDescription}
            </p>

            {/* Áreas de Enfoque */}
            <div className="pt-4 space-y-2">
              <h2 className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                Temas centrales abordados en esta sección:
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {category.focusAreas.map((area, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#142E22] shrink-0 mt-0.5" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md aspect-[4/3] bg-stone-100">
              <img
                src={category.image}
                alt={category.altText}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="eager"
              />
            </div>
          </div>
        </header>

        {/* Cuadrícula de Artículos de la Categoría */}
        <section aria-labelledby="category-articles-title" className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-stone-200 pb-3">
            <h2
              id="category-articles-title"
              className="font-serif text-2xl font-semibold text-[#142E22]"
            >
              Publicaciones en {category.name}
            </h2>
            <span className="text-xs text-stone-500 font-sans">
              {articles.length} {articles.length === 1 ? 'artículo' : 'artículos'} disponibles
            </span>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <article
                  key={article.slug}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] bg-stone-100 overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.altText}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
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
                          className="text-left"
                        >
                          {article.title}
                        </button>
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 line-clamp-3 leading-relaxed">
                        {article.summary}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <button
                        onClick={() => onNavigate(`/articulo/${article.slug}`)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#142E22] hover:underline"
                      >
                        <span>Leer guía completa</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-stone-100 rounded-xl">
              <p className="text-stone-600 text-sm">Próximamente se añadirán más publicaciones a esta categoría.</p>
            </div>
          )}
        </section>

        {/* Aviso de Seguridad Botánica */}
        <section className="bg-[#FAF7F0] border border-stone-300 rounded-xl p-6 sm:p-8 flex items-start gap-4">
          <ShieldAlert className="w-6 h-6 text-[#7D2D3B] shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-bold text-[#142E22]">
              Compromiso de rigor y seguridad botánica
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
              La ingesta de flores exige identificación botánica inequívoca por género y especie. No recolectes nunca flores sin haber corroborado su inocuidad y absténte de utilizar especies ornamentales de floristerías o jardinería convencional tratadas con sustancias químicas no autorizadas para consumo humano.
            </p>
          </div>
        </section>

        {/* Navegación a otras categorías */}
        <section className="pt-8 border-t border-stone-200 space-y-4">
          <h3 className="font-serif text-xl font-semibold text-[#142E22]">
            Otras categorías editoriales
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherCategories.map((other) => (
              <button
                key={other.slug}
                onClick={() => onNavigate(`/categoria/${other.slug}`)}
                className="text-left p-4 bg-white rounded-lg border border-stone-200 hover:border-[#142E22] hover:shadow-xs transition-all group"
              >
                <h4 className="font-serif font-bold text-sm text-stone-900 group-hover:text-[#142E22] flex items-center justify-between">
                  <span>{other.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
                </h4>
                <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                  {other.shortDescription}
                </p>
              </button>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
