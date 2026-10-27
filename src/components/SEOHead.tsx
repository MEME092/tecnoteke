import { useEffect } from 'react';
import { getCanonicalUrl } from '../utils/rules';

interface SEOHeadProps {
  title: string;
  description: string;
  pathname: string;
  image?: string;
  type?: 'website' | 'article';
  articleData?: {
    publishDate: string;
    author: string;
    category: string;
  };
  jsonLd?: Record<string, unknown>;
}

export default function SEOHead({
  title,
  description,
  pathname,
  image = '/assets/images/hero-portada.jpg',
  type = 'website',
  articleData,
  jsonLd,
}: SEOHeadProps) {
  const canonicalUrl = getCanonicalUrl(pathname);
  const fullImageUrl = image.startsWith('http') ? image : `https://tecnoteke.lol${image}`;

  useEffect(() => {
    // 1. Título
    document.title = `${title} | Garnish Botánico`;

    // 2. Metadescripción
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // 4. OpenGraph tags
    const updateOrCreateMeta = (property: string, content: string) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateOrCreateMeta('og:title', `${title} | Garnish Botánico`);
    updateOrCreateMeta('og:description', description);
    updateOrCreateMeta('og:url', canonicalUrl);
    updateOrCreateMeta('og:type', type);
    updateOrCreateMeta('og:image', fullImageUrl);

    // 5. Inyección JSON-LD
    const existingScript = document.getElementById('route-jsonld');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'route-jsonld';
    script.type = 'application/ld+json';

    const defaultJsonLd = jsonLd || {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : 'WebPage',
      headline: title,
      description: description,
      url: canonicalUrl,
      image: fullImageUrl,
      publisher: {
        '@type': 'Organization',
        name: 'Garnish Botánico',
        url: 'https://tecnoteke.lol',
        logo: {
          '@type': 'ImageObject',
          url: 'https://tecnoteke.lol/assets/images/hero-portada.jpg',
        },
      },
      ...(articleData
        ? {
            author: {
              '@type': 'Person',
              name: articleData.author,
            },
            datePublished: articleData.publishDate,
            articleSection: articleData.category,
          }
        : {}),
    };

    script.textContent = JSON.stringify(defaultJsonLd);
    document.head.appendChild(script);

    return () => {
      const s = document.getElementById('route-jsonld');
      if (s) s.remove();
    };
  }, [title, description, canonicalUrl, fullImageUrl, type, articleData, jsonLd]);

  return null;
}
