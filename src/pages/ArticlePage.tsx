import { getArticleBySlug, articles as allArticles } from '../data/articles';
import { getCategoryBySlug } from '../data/categories';
import Breadcrumbs from '../components/Breadcrumbs';
import SEOHead from '../components/SEOHead';
import {
  Calendar,
  Clock,
  User,
  ShieldAlert,
  HelpCircle,
  BookOpen,
  ArrowRight,
  List,
  CheckCircle2,
  Info
} from 'lucide-react';

interface ArticlePageProps {
  slug: string;
  onNavigate: (path: string) => void;
}

export default function ArticlePage({ slug, onNavigate }: ArticlePageProps) {
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="font-serif text-3xl font-bold text-[#142E22]">Artículo no encontrado</h1>
        <p className="text-stone-600">La guía editorial solicitada no existe o ha sido trasladada.</p>
        <button
          onClick={() => onNavigate('/')}
          className="px-4 py-2 text-sm font-semibold text-white bg-[#142E22] rounded-lg hover:bg-[#1B382B]"
        >
          Volver a la portada
        </button>
      </div>
    );
  }

  const category = getCategoryBySlug(article.categorySlug);
  const relatedArticles = article.relatedSlugs
    .map((s) => allArticles.find((a) => a.slug === s))
    .filter(Boolean);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.summary}
        pathname={`/articulo/${article.slug}`}
        image={article.image}
        type="article"
        articleData={{
          publishDate: article.publishDate,
          author: article.author,
          category: category?.name || 'Botánica culinaria',
        }}
      />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Migas de pan */}
        <Breadcrumbs
          items={[
            { label: category?.name || 'Categoría', path: `/categoria/${article.categorySlug}` },
            { label: article.title }
          ]}
          onNavigate={onNavigate}
        />

        {/* Cabecera del Artículo */}
        <header className="max-w-4xl space-y-5">
          <button
            onClick={() => onNavigate(`/categoria/${article.categorySlug}`)}
            className="text-xs font-mono uppercase tracking-widest text-[#7A9A85] hover:text-[#142E22] hover:underline"
          >
            {category?.name}
          </button>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#142E22] leading-[1.2] text-balance">
            {article.title}
          </h1>

          {article.scientificName && (
            <p className="font-serif italic text-lg sm:text-xl text-stone-600">
              Taxonomía: {article.scientificName}
            </p>
          )}

          <p className="text-lg text-stone-700 leading-relaxed font-sans max-w-3xl">
            {article.summary}
          </p>

          {/* Atribución Editorial Veraz */}
          <div className="pt-4 border-t border-stone-200 flex flex-wrap items-center gap-6 text-xs text-stone-600 font-sans">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-[#142E22]" />
              <div>
                <span className="font-semibold text-stone-900">{article.author}</span>
                <span className="text-stone-500 ml-1">({article.authorRole})</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-stone-500">
              <Calendar className="w-3.5 h-3.5" />
              <span>Publicado: {article.publishDate}</span>
            </div>

            <div className="flex items-center gap-1.5 text-stone-500">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTimeMinutes} min de lectura estimada</span>
            </div>
          </div>
        </header>

        {/* Fotografía Principal del Artículo */}
        <div className="max-w-5xl rounded-2xl overflow-hidden border border-stone-200 shadow-md bg-stone-100">
          <img
            src={article.image}
            alt={article.altText}
            className="w-full max-h-[520px] object-cover"
            referrerPolicy="no-referrer"
            loading="eager"
          />
          <div className="p-3 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 italic font-serif flex items-center justify-between">
            <span>{article.altText}</span>
            <span className="font-sans text-[11px] text-stone-400 not-italic">Garnish Botánico · Archivo editorial</span>
          </div>
        </div>

        {/* Cuadrícula Asimétrica: Índice de Contenidos + Cuerpo Editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Índice Navegable en Barra Lateral (Desktop) */}
          <aside className="lg:col-span-4 bg-[#FAF7F0] border border-stone-300 rounded-xl p-6 lg:sticky lg:top-28 space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#142E22]">
              <List className="w-4 h-4 text-[#7A9A85]" />
              <span>Índice del artículo</span>
            </div>
            
            <nav aria-label="Índice navegable de secciones" className="space-y-1.5 text-xs text-stone-700">
              {article.sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="w-full text-left py-1.5 px-2 rounded-md hover:bg-stone-200/60 hover:text-[#142E22] transition-colors leading-snug line-clamp-1"
                >
                  {sec.title}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('seguridad-y-advertencias')}
                className="w-full text-left py-1.5 px-2 rounded-md hover:bg-stone-200/60 hover:text-[#7D2D3B] transition-colors font-semibold"
              >
                Seguridad y precauciones
              </button>
              <button
                onClick={() => scrollToSection('preguntas-frecuentes')}
                className="w-full text-left py-1.5 px-2 rounded-md hover:bg-stone-200/60 hover:text-[#142E22] transition-colors"
              >
                Preguntas frecuentes
              </button>
              <button
                onClick={() => scrollToSection('fuentes-bibliograficas')}
                className="w-full text-left py-1.5 px-2 rounded-md hover:bg-stone-200/60 hover:text-[#142E22] transition-colors"
              >
                Fuentes y bibliografía
              </button>
            </nav>

            <div className="pt-3 border-t border-stone-200 text-[11px] text-stone-500">
              <p>Revisión botánica periódica. Prohibida la reproducción con fines comerciales de venta de plantas sin autorización.</p>
            </div>
          </aside>

          {/* Cuerpo Editorial Principal */}
          <main className="lg:col-span-8 space-y-12 max-w-prose">
            
            {/* Introducción Editorial con Drop Cap */}
            <div className="prose-editorial font-sans">
              {article.intro.map((p, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 0
                      ? 'first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-[#142E22]'
                      : ''
                  }
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Secciones del Artículo */}
            {article.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-24 space-y-5 pt-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#142E22] border-b border-stone-200 pb-2">
                  {section.title}
                </h2>

                <div className="prose-editorial font-sans space-y-4">
                  {section.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                {/* Callout Informativo o de Advertencia */}
                {section.callout && (
                  <div
                    className={`p-5 rounded-xl border flex items-start gap-3.5 my-6 ${
                      section.callout.type === 'warning'
                        ? 'bg-[#FDF6F6] border-[#F2C2C2] text-[#5C1D24]'
                        : section.callout.type === 'tip'
                        ? 'bg-[#F4F9F5] border-[#CDE5D4] text-[#142E22]'
                        : 'bg-[#F6F8FA] border-[#D1D9E0] text-stone-800'
                    }`}
                  >
                    <Info className="w-5 h-5 shrink-0 mt-0.5" />
                    <div className="space-y-1 text-xs sm:text-sm">
                      <h4 className="font-bold">{section.callout.title}</h4>
                      <p className="leading-relaxed">{section.callout.text}</p>
                    </div>
                  </div>
                )}

                {/* Tabla de Parámetros Agronómicos */}
                {section.tableData && (
                  <div className="overflow-x-auto my-6 border border-stone-200 rounded-xl bg-white shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm font-sans">
                      <thead className="bg-[#FAF7F0] border-b border-stone-200 text-[#142E22] font-semibold">
                        <tr>
                          {section.tableData.headers.map((h, i) => (
                            <th key={i} className="py-3 px-4">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-stone-100 text-stone-700">
                        {section.tableData.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-stone-50">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="py-3 px-4">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Pasos Prácticos Numerados */}
                {section.steps && (
                  <div className="space-y-4 my-6">
                    {section.steps.map((st) => (
                      <div
                        key={st.number}
                        className="bg-white p-5 rounded-xl border border-stone-200 flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#142E22] text-white flex items-center justify-center font-bold text-sm shrink-0">
                          {st.number}
                        </div>
                        <div className="space-y-1 text-xs sm:text-sm">
                          <h4 className="font-bold text-[#142E22] text-base">{st.title}</h4>
                          <p className="text-stone-700 leading-relaxed">{st.description}</p>
                          {st.tip && (
                            <p className="text-xs text-stone-500 italic pt-1">
                              Consejo práctico: {st.tip}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Caja de Seguridad y Precauciones */}
            <section
              id="seguridad-y-advertencias"
              className="scroll-mt-24 bg-[#FAF7F0] border border-[#7D2D3B]/30 rounded-2xl p-6 sm:p-8 space-y-4"
            >
              <div className="flex items-center gap-2.5 text-[#7D2D3B]">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <h3 className="font-serif text-xl font-bold">
                  Precauciones obligatorias de seguridad botánica
                </h3>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                {article.safetyWarnings.map((warning, i) => (
                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                    <span className="text-[#7D2D3B] font-bold">■</span>
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[11px] text-stone-500 italic pt-2 border-t border-stone-200">
                Nota de salud: Si experimentas picor orofaríngeo, hinchazón labial o malestar gástrico tras ingerir cualquier flor, suspende su consumo inmediatamente.
              </p>
            </section>

            {/* Preguntas Frecuentes */}
            <section id="preguntas-frecuentes" className="scroll-mt-24 space-y-6 pt-6">
              <div className="flex items-center gap-2 border-b border-stone-200 pb-3">
                <HelpCircle className="w-5 h-5 text-[#142E22]" />
                <h3 className="font-serif text-2xl font-semibold text-[#142E22]">
                  Preguntas frecuentes
                </h3>
              </div>

              <div className="space-y-4">
                {article.faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-5 rounded-xl border border-stone-200/90 space-y-2"
                  >
                    <h4 className="font-serif font-bold text-base text-[#142E22]">
                      {faq.question}
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Fuentes Bibliográficas Reales */}
            <section id="fuentes-bibliograficas" className="scroll-mt-24 space-y-4 pt-6 border-t border-stone-200">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#7A9A85]" />
                <h3 className="font-serif text-lg font-semibold text-[#142E22]">
                  Fuentes bibliográficas y referencias científicas
                </h3>
              </div>

              <ul className="space-y-2 text-xs text-stone-600">
                {article.references.map((ref, idx) => (
                  <li key={idx} className="flex items-baseline gap-2">
                    <span className="font-mono text-stone-400">[{idx + 1}]</span>
                    <div>
                      <span className="font-semibold text-stone-800">{ref.citation}.</span>{' '}
                      <span className="italic">{ref.source}</span>
                      {ref.year && <span> ({ref.year}).</span>}
                      {ref.url && (
                        <a
                          href={ref.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-1 text-[#142E22] hover:underline"
                        >
                          [Enlace institucional]
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>

          </main>
        </div>

        {/* Artículos Relacionados */}
        {relatedArticles.length > 0 && (
          <section className="pt-16 border-t border-stone-200 space-y-6">
            <h3 className="font-serif text-2xl font-semibold text-[#142E22]">
              Artículos relacionados recomendados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedArticles.map((rel) => {
                if (!rel) return null;
                return (
                  <div
                    key={rel.slug}
                    className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
                  >
                    <div className="aspect-[16/10] bg-stone-100 overflow-hidden">
                      <img
                        src={rel.image}
                        alt={rel.altText}
                        className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                      <h4 className="font-serif font-bold text-sm text-stone-900 group-hover:text-[#142E22] line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-stone-600 line-clamp-2">{rel.summary}</p>
                      <button
                        onClick={() => onNavigate(`/articulo/${rel.slug}`)}
                        className="text-xs font-semibold text-[#142E22] hover:underline inline-flex items-center gap-1 pt-2"
                      >
                        <span>Leer guía</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
