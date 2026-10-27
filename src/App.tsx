/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import CookiePreferencesModal from './components/CookiePreferencesModal';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import ArticlePage from './pages/ArticlePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import EditorialPolicyPage from './pages/EditorialPolicyPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiesPolicyPage from './pages/CookiesPolicyPage';
import SitemapPage from './pages/SitemapPage';
import NotFoundPage from './pages/NotFoundPage';
import { ConsentStatus, CookiePreferences } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  // Estado de consentimiento EXCLUSIVAMENTE EN MEMORIA (sin localStorage, sessionStorage ni cookies de guardado)
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>('pending');
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    advertising: false,
    personalization: false,
  });
  const [isPreferencesModalOpen, setIsPreferencesModalOpen] = useState(false);

  // Gestión de carga condicional de scripts opcionales de terceros (Google AdSense)
  useEffect(() => {
    const existingScript = document.getElementById('google-adsense-script');

    if (cookiePreferences.advertising) {
      // Solo se inyecta y activa si el usuario ha otorgado consentimiento explícito para publicidad
      if (!existingScript) {
        const script = document.createElement('script');
        script.id = 'google-adsense-script';
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8892732648895924';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }
    } else {
      // Si no hay consentimiento o se revocan las opcionales, se asegura que no esté activo
      if (existingScript) {
        existingScript.remove();
      }
    }
  }, [cookiePreferences.advertising]);

  useEffect(() => {
    const onPopState = () => {
      setCurrentPath(window.location.pathname || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    window.history.pushState(null, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Manejadores de consentimiento en memoria
  const handleAcceptAll = () => {
    setConsentStatus('accepted');
    setCookiePreferences({
      necessary: true,
      analytics: true,
      advertising: true,
      personalization: true,
    });
  };

  const handleRejectOptional = () => {
    setConsentStatus('rejected');
    setCookiePreferences({
      necessary: true,
      analytics: false,
      advertising: false,
      personalization: false,
    });
  };

  const handleSavePreferences = (newPrefs: CookiePreferences) => {
    setCookiePreferences(newPrefs);
    setConsentStatus('customized');
    setIsPreferencesModalOpen(false);
  };

  const handleOpenPreferencesModal = () => {
    setIsPreferencesModalOpen(true);
  };

  const handleClosePreferencesModal = () => {
    setIsPreferencesModalOpen(false);
  };

  const handleResetConsent = () => {
    setConsentStatus('pending');
    setCookiePreferences({
      necessary: true,
      analytics: false,
      advertising: false,
      personalization: false,
    });
  };

  // Enrutador de páginas
  const renderPage = () => {
    const cleanPath = currentPath.replace(/\/+$/, '') || '/';

    if (cleanPath === '/') {
      return <HomePage onNavigate={navigate} />;
    }

    if (cleanPath.startsWith('/categoria/')) {
      const slug = cleanPath.replace('/categoria/', '');
      return <CategoryPage slug={slug} onNavigate={navigate} />;
    }

    if (cleanPath.startsWith('/articulo/')) {
      const slug = cleanPath.replace('/articulo/', '');
      return <ArticlePage slug={slug} onNavigate={navigate} />;
    }

    if (cleanPath === '/sobre-nosotros') {
      return <AboutPage onNavigate={navigate} />;
    }

    if (cleanPath === '/contacto') {
      return <ContactPage onNavigate={navigate} />;
    }

    if (cleanPath === '/politica-editorial') {
      return <EditorialPolicyPage onNavigate={navigate} />;
    }

    if (cleanPath === '/politica-de-privacidad') {
      return <PrivacyPolicyPage onNavigate={navigate} />;
    }

    if (cleanPath === '/politica-de-cookies') {
      return (
        <CookiesPolicyPage
          onNavigate={navigate}
          consentStatus={consentStatus}
          preferences={cookiePreferences}
          onOpenPreferences={handleOpenPreferencesModal}
          onResetPreferences={handleResetConsent}
        />
      );
    }

    if (cleanPath === '/mapa-del-sitio') {
      return <SitemapPage onNavigate={navigate} />;
    }

    return <NotFoundPage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-[#1C1917] selection:bg-[#7A9A85]/20 selection:text-[#142E22]">
      {/* Salto de accesibilidad para lectores de pantalla */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#142E22] focus:text-white focus:rounded-md focus:outline-none"
      >
        Saltar al contenido principal
      </a>

      {/* Cabecera común */}
      <Header currentPath={currentPath} onNavigate={navigate} />

      {/* Contenido principal de la página */}
      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>

      {/* Pie de página con enlace de acceso permanente a Preferencias de cookies */}
      <Footer
        onNavigate={navigate}
        onOpenCookiePreferences={handleOpenPreferencesModal}
      />

      {/* Banner de consentimiento en memoria (visible solo si está pendiente y el modal no está abierto) */}
      <CookieBanner
        isOpen={consentStatus === 'pending' && !isPreferencesModalOpen}
        onAcceptAll={handleAcceptAll}
        onRejectOptional={handleRejectOptional}
        onOpenPreferences={handleOpenPreferencesModal}
        onNavigate={navigate}
      />

      {/* Modal accesible para configurar preferencias detalladas */}
      <CookiePreferencesModal
        isOpen={isPreferencesModalOpen}
        currentPreferences={cookiePreferences}
        onSave={handleSavePreferences}
        onClose={handleClosePreferencesModal}
        onNavigate={navigate}
      />
    </div>
  );
}
