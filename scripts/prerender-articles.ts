import React, { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import App from '../src/App';
import { INITIAL_ARTICLES } from '../src/data/seedArticles';

const siteUrl = 'https://tecnoteke.lol';
const distDirectory = path.resolve('dist');
const template = readFileSync(path.join(distDirectory, 'index.html'), 'utf8');

function escapeAttribute(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function renderArticlePage(article: (typeof INITIAL_ARTICLES)[number]) {
  const route = `/articulo/${article.slug}`;
  Object.defineProperty(globalThis, 'window', {
    configurable: true,
    value: { location: { pathname: route } }
  });

  const markup = renderToString(
    React.createElement(StrictMode, null, React.createElement(App))
  );
  const title = `${article.title} | Tecnoteke`;
  const description = article.excerpt.trim();
  const canonical = `${siteUrl}${route}`;
  const image = article.featured_image.startsWith('http')
    ? article.featured_image
    : `${siteUrl}${article.featured_image}`;
  const metadata = [
    `<link rel="canonical" href="${escapeAttribute(canonical)}" />`,
    `<meta name="description" content="${escapeAttribute(description)}" />`,
    '<meta property="og:type" content="article" />',
    `<meta property="og:title" content="${escapeAttribute(title)}" />`,
    `<meta property="og:description" content="${escapeAttribute(description)}" />`,
    `<meta property="og:url" content="${escapeAttribute(canonical)}" />`,
    `<meta property="og:image" content="${escapeAttribute(image)}" />`,
    '<meta property="og:site_name" content="Tecnoteke" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeAttribute(title)}" />`,
    `<meta name="twitter:description" content="${escapeAttribute(description)}" />`,
    `<meta name="twitter:image" content="${escapeAttribute(image)}" />`
  ].join('\n    ');

  const page = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeAttribute(title)}</title>`)
    .replace(/\s*<link rel="canonical" href="[^"]*"\s*\/>/, '')
    .replace(/\s*<meta (?:name|property)="(?:description|og:[^"]+|twitter:[^"]+)"[^>]*\/?\s*>/g, '')
    .replace('</head>', `    ${metadata}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

  const outputPath = path.join(distDirectory, 'articulo', `${article.slug}.html`);
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, page);
}

const publishedArticles = INITIAL_ARTICLES.filter(article => article.status === 'Publicado');
for (const article of publishedArticles) {
  renderArticlePage(article);
}

console.log(`Prerendered ${publishedArticles.length} article pages.`);
