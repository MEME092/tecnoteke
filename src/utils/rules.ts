import { Article } from '../types';

export const DOMAIN = 'https://tecnoteke.lol';

/**
 * Calcula el tiempo estimado de lectura en minutos a partir del texto o párrafos.
 * Velocidad media estándar: 200 palabras por minuto.
 */
export function calculateReadTime(textOrParagraphs: string | string[]): number {
  const text = Array.isArray(textOrParagraphs) ? textOrParagraphs.join(' ') : textOrParagraphs;
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  if (words === 0) return 1;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Genera la URL canónica absoluta basada en la ruta del sitio tecnoteke.lol.
 */
export function getCanonicalUrl(pathname: string): string {
  if (!pathname || pathname === '/') return `${DOMAIN}/`;
  const cleanPath = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${DOMAIN}${cleanPath.replace(/\/+$/, '')}`;
}

/**
 * Valida un correo electrónico según especificación estándar RFC 5322 simplificada.
 */
export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Validador del formulario de contacto para asegurar envíos válidos sin campos vacíos.
 */
export function validateContactForm(values: {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}): { valid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Por favor, introduce tu nombre completo (mínimo 2 caracteres).';
  }

  if (!validateEmail(values.email)) {
    errors.email = 'Introduce una dirección de correo electrónico válida.';
  }

  if (!values.subject || values.subject.trim().length < 3) {
    errors.subject = 'Indica el motivo de tu consulta editorial.';
  }

  if (!values.message || values.message.trim().length < 15) {
    errors.message = 'El mensaje debe contener al menos 15 caracteres.';
  }

  if (!values.consent) {
    errors.consent = 'Debes aceptar la política de privacidad para enviar el formulario.';
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Filtro de búsqueda textual de artículos por título, resumen, nombre científico o contenido.
 */
export function searchArticles(query: string, articlesList: Article[]): Article[] {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return articlesList;

  return articlesList.filter((article) => {
    const inTitle = article.title.toLowerCase().includes(cleanQuery);
    const inSummary = article.summary.toLowerCase().includes(cleanQuery);
    const inSciName = article.scientificName?.toLowerCase().includes(cleanQuery) ?? false;
    const inSections = article.sections.some(
      (sec) =>
        sec.title.toLowerCase().includes(cleanQuery) ||
        sec.content.some((p) => p.toLowerCase().includes(cleanQuery))
    );
    return inTitle || inSummary || inSciName || inSections;
  });
}
