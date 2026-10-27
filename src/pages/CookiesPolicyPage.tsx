import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { Cookie, RotateCcw, Settings, Info } from 'lucide-react';
import { ConsentStatus, CookiePreferences } from '../types';

interface CookiesPolicyPageProps {
  onNavigate: (path: string) => void;
  consentStatus: ConsentStatus;
  preferences: CookiePreferences;
  onOpenPreferences: () => void;
  onResetPreferences: () => void;
}

export default function CookiesPolicyPage({
  onNavigate,
  consentStatus,
  preferences,
  onOpenPreferences,
  onResetPreferences,
}: CookiesPolicyPageProps) {
  const getStatusLabel = () => {
    switch (consentStatus) {
      case 'accepted':
        return 'Todas aceptadas (Técnicas, Analíticas y Publicitarias)';
      case 'rejected':
        return 'Solo esenciales (Opcionales desactivadas)';
      case 'customized':
        return 'Personalizadas manualmente';
      case 'pending':
      default:
        return 'Pendiente de decisión (Banner inicial visible)';
    }
  };

  return (
    <>
      <SEOHead
        title="Política de cookies"
        description="Información transparente sobre las cookies utilizadas en Garnish Botánico y panel de gestión de consentimiento activo en memoria."
        pathname="/politica-de-cookies"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumbs
          items={[{ label: 'Política de cookies' }]}
          onNavigate={onNavigate}
        />

        <header className="space-y-4 border-b border-stone-200 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A9A85]">
            Transparencia y Gestión de Privacidad
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#142E22]">
            Política de cookies
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
            En Garnish Botánico (https://tecnoteke.lol/) creemos en la privacidad real y transparente. En esta instalación, el consentimiento se gestiona estrictamente en la memoria de la aplicación en ejecución, sin persistir datos en localStorage ni en mecanismos invasivos de seguimiento local.
          </p>
        </header>

        {/* Panel Activo de Estado en Memoria */}
        <section className="bg-[#FAF7F0] border border-stone-300 rounded-2xl p-6 sm:p-8 space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#142E22] text-white rounded-lg">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-xl text-[#142E22]">
                Estado de tu consentimiento en esta sesión
              </h2>
              <p className="text-xs text-stone-600 font-sans">
                Gestionado en memoria volátil de React (sin persistencia en localStorage)
              </p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl border border-stone-200 text-xs sm:text-sm text-stone-700 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-semibold text-stone-900">Decisión en memoria de la SPA:</span>
              <span className="font-mono px-2.5 py-1 bg-stone-100 rounded text-stone-800 font-medium text-xs">
                {getStatusLabel()}
              </span>
            </div>

            <div className="pt-2 border-t border-stone-100 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="bg-[#FBF9F5] p-2 rounded border border-stone-200/80">
                <span className="text-stone-500 block">Técnicas:</span>
                <span className="font-bold text-[#142E22]">Activas</span>
              </div>
              <div className="bg-[#FBF9F5] p-2 rounded border border-stone-200/80">
                <span className="text-stone-500 block">Análisis:</span>
                <span className={`font-bold ${preferences.analytics ? 'text-[#142E22]' : 'text-stone-400'}`}>
                  {preferences.analytics ? 'Permitidas' : 'Bloqueadas'}
                </span>
              </div>
              <div className="bg-[#FBF9F5] p-2 rounded border border-stone-200/80">
                <span className="text-stone-500 block">Publicidad:</span>
                <span className={`font-bold ${preferences.advertising ? 'text-[#142E22]' : 'text-stone-400'}`}>
                  {preferences.advertising ? 'Permitidas' : 'Bloqueadas'}
                </span>
              </div>
              <div className="bg-[#FBF9F5] p-2 rounded border border-stone-200/80">
                <span className="text-stone-500 block">Personalización:</span>
                <span className={`font-bold ${preferences.personalization ? 'text-[#142E22]' : 'text-stone-400'}`}>
                  {preferences.personalization ? 'Permitida' : 'Bloqueada'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={onOpenPreferences}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#142E22] hover:bg-[#1B382B] rounded-lg transition-colors shadow-xs"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Modificar preferencias en memoria</span>
            </button>

            <button
              onClick={onResetPreferences}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-lg transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Restablecer estado (mostrar banner)</span>
            </button>
          </div>
        </section>

        {/* Explicación Técnica y Regulatoria */}
        <section className="prose-editorial font-sans space-y-6">
          <h2 className="font-serif text-2xl font-bold text-[#142E22]">
            Información sobre el funcionamiento del consentimiento
          </h2>

          <p>
            A diferencia de la mayoría de sitios comerciales que guardan identificadores permanentes en el almacenamiento local del navegador, en <strong>Garnish Botánico</strong> tu decisión se conserva exclusivamente en el estado en memoria de la aplicación mientras navegas por los artículos y categorías. Si recargas el navegador o abres una nueva sesión, el consentimiento vuelve a solicitarse.
          </p>

          <div className="p-5 bg-white rounded-xl border border-stone-200 space-y-3">
            <h3 className="font-serif font-bold text-lg text-stone-900">
              Categorías de tecnologías contempladas
            </h3>
            <ul className="text-xs sm:text-sm text-stone-700 space-y-2">
              <li>
                <strong>Cookies estrictamente necesarias:</strong> Aquellas imprescindibles para que la aplicación cargue las rutas amigables, mantenga la seguridad contra accesos indebidos y responda a las acciones del usuario. No requieren consentimiento previo.
              </li>
              <li>
                <strong>Cookies de análisis:</strong> Empleadas para conocer de forma anónima qué guías de cultivo resultan de mayor utilidad a la comunidad de cocineros y bartenders. Se encuentran desactivadas hasta que el usuario decida activarlas.
              </li>
              <li>
                <strong>Cookies y tecnologías publicitarias:</strong> Tecnologías de terceros que permiten la difusión de anuncios digitales para financiar la publicación independiente. Permanecen estrictamente desactivadas sin consentimiento.
              </li>
            </ul>
          </div>

          {/* Información rigurosa sobre CMP certificada por Google */}
          <div className="p-5 bg-[#FAF7F0] border border-stone-300 rounded-xl space-y-2 text-xs sm:text-sm text-stone-800">
            <div className="flex items-center gap-2 font-bold text-[#142E22]">
              <Info className="w-4 h-4 shrink-0" />
              <span>Requisito reglamentario para Google AdSense en el EEE y Reino Unido</span>
            </div>
            <p className="leading-relaxed text-stone-700">
              Para editores que monetizan con Google AdSense sirviendo a lectores del Espacio Económico Europeo (EEE), Suiza y el Reino Unido, Google exige reglamentariamente la utilización de una <strong>Plataforma de Gestión del Consentimiento (CMP) certificada por Google</strong> e integrada con el marco TCF v2.2 de IAB.
            </p>
            <p className="leading-relaxed text-stone-700">
              Este banner personalizado gestiona el consentimiento voluntario en memoria en esta versión, pero no sustituye formalmente a una CMP certificada por Google (como la solución oficial de privacidad y mensajes de Google AdSense o plataformas TCF homologadas), la cual debe configurarse directamente en el panel de AdSense cuando la monetización en dichas regiones esté activa.
            </p>
          </div>
        </section>

        <div className="pt-6 border-t border-stone-200 flex justify-between text-xs text-stone-500">
          <button
            onClick={() => onNavigate('/')}
            className="text-[#142E22] hover:underline font-semibold"
          >
            ← Volver a la portada principal
          </button>
          <button
            onClick={() => onNavigate('/politica-de-privacidad')}
            className="text-[#142E22] hover:underline"
          >
            Consultar política de privacidad →
          </button>
        </div>
      </div>
    </>
  );
}
