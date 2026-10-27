import { useState, useEffect } from 'react';
import { CookiePreferences } from '../types';
import { X, ShieldCheck, Info } from 'lucide-react';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  currentPreferences: CookiePreferences;
  onSave: (preferences: CookiePreferences) => void;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export default function CookiePreferencesModal({
  isOpen,
  currentPreferences,
  onSave,
  onClose,
  onNavigate,
}: CookiePreferencesModalProps) {
  // Estado local del formulario del modal (no altera el estado global hasta que se pulsa Guardar)
  const [localPrefs, setLocalPrefs] = useState<CookiePreferences>(currentPreferences);

  useEffect(() => {
    setLocalPrefs(currentPreferences);
  }, [currentPreferences, isOpen]);

  // Manejo de la tecla Escape para accesibilidad
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleToggle = (key: keyof Omit<CookiePreferences, 'necessary'>) => {
    setLocalPrefs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    onSave(localPrefs);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#FBF9F5] border border-stone-300 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-stone-900 space-y-6">
        
        {/* Encabezado del Modal */}
        <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <h2 id="cookie-preferences-title" className="font-serif text-2xl font-bold text-[#142E22]">
              Configuración de privacidad y cookies
            </h2>
            <p className="text-xs text-stone-600 mt-1 font-sans">
              Personaliza qué tecnologías y cookies opcionales permites durante tu sesión de navegación.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200 transition-colors"
            aria-label="Cerrar panel de configuración"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Lista de Categorías */}
        <div className="space-y-4">
          
          {/* 1. Cookies necesarias (siempre activas, no desactivables) */}
          <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="pref-necessary" className="font-serif font-bold text-base text-[#142E22] flex items-center gap-2">
                <span>1. Cookies técnicas estrictamente necesarias</span>
                <span className="text-[11px] font-sans font-medium text-[#142E22] bg-[#142E22]/10 px-2 py-0.5 rounded-full">
                  Siempre activas
                </span>
              </label>
              <input
                type="checkbox"
                id="pref-necessary"
                checked={true}
                disabled={true}
                aria-disabled="true"
                className="w-4 h-4 rounded text-[#142E22] cursor-not-allowed opacity-80"
              />
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Son indispensables para el funcionamiento técnico básico del sitio, el enrutamiento de la aplicación y la gestión de la seguridad durante la navegación. No pueden desactivarse.
            </p>
          </div>

          {/* 2. Cookies de análisis */}
          <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="pref-analytics" className="font-serif font-bold text-base text-stone-900 cursor-pointer">
                2. Cookies de análisis y medición
              </label>
              <input
                type="checkbox"
                id="pref-analytics"
                checked={localPrefs.analytics}
                onChange={() => handleToggle('analytics')}
                className="w-4 h-4 rounded text-[#142E22] focus:ring-[#142E22] border-stone-300 cursor-pointer"
              />
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Permiten comprender cómo interactúan los lectores con las guías botánicas y qué secciones resultan más útiles para optimizar la estructura del contenido sin identificar individualmente a los usuarios.
            </p>
          </div>

          {/* 3. Cookies publicitarias */}
          <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="pref-advertising" className="font-serif font-bold text-base text-stone-900 cursor-pointer">
                3. Cookies publicitarias
              </label>
              <input
                type="checkbox"
                id="pref-advertising"
                checked={localPrefs.advertising}
                onChange={() => handleToggle('advertising')}
                className="w-4 h-4 rounded text-[#142E22] focus:ring-[#142E22] border-stone-300 cursor-pointer"
              />
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Habilitan la entrega de anuncios digitales para financiar la labor de redacción y mantenimiento de la plataforma. Permanecen inactivas si no otorgas tu consentimiento expreso.
            </p>
          </div>

          {/* 4. Personalización publicitaria */}
          <div className="p-4 bg-white border border-stone-200 rounded-xl space-y-2">
            <div className="flex items-center justify-between">
              <label htmlFor="pref-personalization" className="font-serif font-bold text-base text-stone-900 cursor-pointer">
                4. Personalización publicitaria
              </label>
              <input
                type="checkbox"
                id="pref-personalization"
                checked={localPrefs.personalization}
                onChange={() => handleToggle('personalization')}
                className="w-4 h-4 rounded text-[#142E22] focus:ring-[#142E22] border-stone-300 cursor-pointer"
              />
            </div>
            <p className="text-xs text-stone-600 leading-relaxed font-sans">
              Permiten que los posibles anuncios mostrados se adapten a tus intereses o visitas previas según la normativa aplicable en tu territorio.
            </p>
          </div>
        </div>

        {/* Nota técnica transparente (sin localStorage y sobre CMP) */}
        <div className="p-4 bg-[#FAF7F0] border border-stone-300 rounded-xl text-xs text-stone-700 space-y-2 font-sans">
          <div className="flex items-start gap-2 text-stone-800 font-medium">
            <Info className="w-4 h-4 text-[#142E22] shrink-0 mt-0.5" />
            <span>Almacenamiento en memoria de sesión (sin localStorage):</span>
          </div>
          <p className="leading-relaxed text-stone-600 pl-6">
            Tus preferencias se conservan en la memoria temporal de la aplicación mientras navegas por Garnish Botánico. Si recargas la página o abres una nueva pestaña, el consentimiento volverá a consultarse.
          </p>
          <p className="leading-relaxed text-stone-600 pl-6">
            <em>Nota regulatoria para Google AdSense:</em> En el Espacio Económico Europeo (EEE) y el Reino Unido, Google exige formalmente una Plataforma de Gestión de Consentimiento (CMP) certificada para la entrega de anuncios comerciales.
          </p>
        </div>

        {/* Enlaces a políticas */}
        <div className="text-xs text-stone-600 flex items-center justify-between border-t border-stone-200 pt-3">
          <div className="flex gap-4">
            <button
              onClick={() => {
                onClose();
                onNavigate('/politica-de-privacidad');
              }}
              className="text-[#142E22] hover:underline"
            >
              Política de privacidad
            </button>
            <button
              onClick={() => {
                onClose();
                onNavigate('/politica-de-cookies');
              }}
              className="text-[#142E22] hover:underline"
            >
              Política de cookies
            </button>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-700 bg-stone-200 hover:bg-stone-300 rounded-lg transition-colors"
          >
            Volver
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#142E22] hover:bg-[#1B382B] rounded-lg transition-colors shadow-xs"
          >
            Guardar preferencias
          </button>
        </div>

      </div>
    </div>
  );
}
