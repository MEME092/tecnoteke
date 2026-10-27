import { Cookie, Shield } from 'lucide-react';

interface CookieBannerProps {
  isOpen: boolean;
  onAcceptAll: () => void;
  onRejectOptional: () => void;
  onOpenPreferences: () => void;
  onNavigate: (path: string) => void;
}

export default function CookieBanner({
  isOpen,
  onAcceptAll,
  onRejectOptional,
  onOpenPreferences,
  onNavigate,
}: CookieBannerProps) {
  if (!isOpen) return null;

  return (
    <aside
      role="region"
      aria-label="Aviso de consentimiento de cookies y privacidad"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-xl z-40 bg-[#FBF9F5] border border-stone-300 shadow-2xl rounded-2xl p-5 sm:p-6 text-stone-900 animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <div className="flex items-start gap-3.5">
        <div className="p-2.5 bg-[#142E22]/10 rounded-xl shrink-0 mt-0.5">
          <Cookie className="w-5 h-5 text-[#142E22]" />
        </div>

        <div className="space-y-3 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-serif font-bold text-lg text-[#142E22]">
              Tu privacidad importa
            </h3>
            <span className="text-[11px] font-sans text-stone-500 flex items-center gap-1 shrink-0">
              <Shield className="w-3.5 h-3.5 text-[#7A9A85]" /> RGPD / ePrivacy
            </span>
          </div>

          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
            Utilizamos cookies y tecnologías similares para mejorar el funcionamiento del sitio, comprender el uso de nuestros contenidos y, cuando corresponda, mostrar publicidad personalizada o no personalizada. Puedes aceptar, rechazar las cookies opcionales o configurar tus preferencias. Las tecnologías estrictamente necesarias para el funcionamiento del sitio pueden utilizarse cuando corresponda.
          </p>

          <div className="text-xs text-stone-600 flex flex-wrap items-center gap-x-3 gap-y-1 pt-0.5">
            <span>Más información en nuestra</span>
            <button
              onClick={() => onNavigate('/politica-de-privacidad')}
              className="text-[#142E22] underline hover:text-[#1B382B] font-medium"
            >
              Política de privacidad
            </button>
            <span aria-hidden="true" className="text-stone-300">·</span>
            <button
              onClick={() => onNavigate('/politica-de-cookies')}
              className="text-[#142E22] underline hover:text-[#1B382B] font-medium"
            >
              Política de cookies
            </button>
          </div>

          {/* Tres Botones Funcionales */}
          <div className="pt-2 flex flex-wrap items-center gap-2.5">
            <button
              onClick={onAcceptAll}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#142E22] hover:bg-[#1B382B] active:scale-95 rounded-lg transition-all shadow-xs whitespace-nowrap"
            >
              Aceptar todas
            </button>

            <button
              onClick={onRejectOptional}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-stone-200/90 hover:bg-stone-300 active:scale-95 rounded-lg transition-all whitespace-nowrap"
            >
              Rechazar opcionales
            </button>

            <button
              onClick={onOpenPreferences}
              className="px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#142E22] hover:bg-stone-100 active:scale-95 rounded-lg transition-all border border-stone-300 whitespace-nowrap"
            >
              Configurar preferencias
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
