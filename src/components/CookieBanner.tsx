import React, { useState, useEffect } from 'react';
import { Cookie, ExternalLink } from 'lucide-react';

interface CookieBannerProps {
  onOpenCookiesPolicy: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onOpenCookiesPolicy }) => {
  const [noticeDismissed, setNoticeDismissed] = useState(false);

  useEffect(() => {
    try {
      setNoticeDismissed(localStorage.getItem('tecnoteke-cookie-notice-dismissed') === 'true');
    } catch {
      setNoticeDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    setNoticeDismissed(true);
    try {
      localStorage.setItem('tecnoteke-cookie-notice-dismissed', 'true');
    } catch {
      // The notice can still be dismissed when browser storage is unavailable.
    }
  };

  return (
    <>
      {!noticeDismissed && (
        <aside
          aria-label="Aviso sobre cookies y anuncios"
          className="fixed bottom-0 inset-x-0 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-xl z-50 p-4 sm:p-0"
        >
          <div className="bg-slate-900/98 text-slate-100 p-5 sm:p-6 rounded-3xl shadow-2xl border border-indigo-500/40 backdrop-blur-xl ring-1 ring-white/10 space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-indigo-600/30 text-indigo-400 shrink-0 mt-0.5 border border-indigo-500/30">
                <Cookie className="w-6 h-6 animate-pulse" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    Aviso de cookies y anuncios
                  </h3>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Tecnoteke carga Google AdSense, que puede utilizar cookies o identificadores según la configuración de Google. Este aviso no bloquea anuncios ni registra consentimiento. Al cerrarlo se guarda esta preferencia en el almacenamiento local de este navegador.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <button
                type="button"
                onClick={onOpenCookiesPolicy}
                className="text-[11px] text-indigo-300 hover:text-indigo-200 underline font-semibold inline-flex items-center gap-1 justify-center sm:justify-start"
              >
                <span>Leer Política de Cookies</span>
                <ExternalLink className="w-3 h-3" />
              </button>

              <button
                type="button"
                onClick={handleDismiss}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition-all border border-slate-700"
              >
                Entendido
              </button>
            </div>
          </div>
        </aside>
      )}
    </>
  );
};
