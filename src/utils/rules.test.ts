import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateReadTime,
  getCanonicalUrl,
  validateEmail,
  validateContactForm,
  searchArticles,
  DOMAIN
} from './rules';
import { articles } from '../data/articles';

test('getCanonicalUrl formats canonical domain and paths correctly', () => {
  assert.equal(getCanonicalUrl('/'), `${DOMAIN}/`);
  assert.equal(getCanonicalUrl(''), `${DOMAIN}/`);
  assert.equal(getCanonicalUrl('/sobre-nosotros'), `${DOMAIN}/sobre-nosotros`);
  assert.equal(getCanonicalUrl('categoria/cosecha-y-conservacion/'), `${DOMAIN}/categoria/cosecha-y-conservacion`);
});

test('calculateReadTime returns accurate estimate based on word count', () => {
  assert.equal(calculateReadTime(''), 1);
  const words100 = new Array(100).fill('palabra').join(' ');
  assert.equal(calculateReadTime(words100), 1);
  const words500 = new Array(500).fill('botánica').join(' ');
  assert.equal(calculateReadTime(words500), 3);
});

test('validateEmail validates RFC 5322 standard emails properly', () => {
  assert.equal(validateEmail('andresy1999@gmail.com'), true);
  assert.equal(validateEmail('contacto@tecnoteke.lol'), true);
  assert.equal(validateEmail('invalid-email'), false);
  assert.equal(validateEmail('test@'), false);
  assert.equal(validateEmail('@domain.com'), false);
  assert.equal(validateEmail(''), false);
});

test('validateContactForm verifies fields and privacy consent', () => {
  const invalid = validateContactForm({
    name: 'A',
    email: 'bad',
    subject: '',
    message: 'short',
    consent: false,
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.email);
  assert.ok(invalid.errors.subject);
  assert.ok(invalid.errors.message);
  assert.ok(invalid.errors.consent);

  const valid = validateContactForm({
    name: 'Carlos Ruiz',
    email: 'carlos@example.com',
    subject: 'Consulta sobre cultivo de borraja',
    message: 'Quisiera consultar sobre la distancia de plantación recomendada.',
    consent: true,
  });
  assert.equal(valid.valid, true);
  assert.equal(Object.keys(valid.errors).length, 0);
});

test('searchArticles finds relevant botanical content by query', () => {
  const capuchinaResults = searchArticles('capuchina', articles);
  assert.ok(capuchinaResults.length >= 1);
  assert.ok(capuchinaResults.some((a) => a.slug === 'como-cultivar-capuchinas-comestibles'));

  const emptyQueryResults = searchArticles('', articles);
  assert.equal(emptyQueryResults.length, articles.length);

  const nonexistent = searchArticles('xyz123noexiste', articles);
  assert.equal(nonexistent.length, 0);
});

test('articles library has exactly 16 articles balanced with 4 per category', () => {
  assert.equal(articles.length, 16);
  const categories = [
    'cultivo-de-flores-comestibles',
    'identificacion-botanica-y-seguridad',
    'cosecha-y-conservacion',
    'cocteleria-y-alta-cocina'
  ];
  for (const cat of categories) {
    const count = articles.filter((a) => a.categorySlug === cat).length;
    assert.equal(count, 4, `Category ${cat} should have exactly 4 articles, got ${count}`);
  }
});

