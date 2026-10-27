# Garnish Botánico — Revista Editorial Especializada

> **Publicación editorial digital sobre el cultivo, identificación botánica, cosecha, conservación y uso gastronómico responsable de flores comestibles para coctelería y alta cocina.**

- **Dominio principal:** [https://tecnoteke.lol/](https://tecnoteke.lol/)
- **Responsable editorial:** Andres Martinez
- **Correo de contacto oficial:** `andresy1999@gmail.com`
- **Identificador de Google AdSense:** `pub-8892732648895924` (`ca-pub-8892732648895924`)
- **Plataforma de despliegue:** Netlify / GitHub
- **Idioma de publicación:** Español (`lang="es"`)

---

## 1. Arquitectura Técnica

El proyecto está construido con un stack frontend moderno y de alto rendimiento:

- **React 19 & TypeScript:** Componentes modulares, tipado estricto y enrutador SPA sin dependencias superfluas.
- **Vite:** Compilador ultrarrápido y empaquetador para producción.
- **Tailwind CSS v4:** Sistema de diseño editorial con paleta curada (marfil cálido, verde botánico profundo, salvia y burdeos).
- **Tipografía Editorial:** `Cormorant Garamond` (titulares) y `Plus Jakarta Sans` (lectura fluida).
- **SEO Técnico & Schema.org:** Metadatos canónicos, OpenGraph, Twitter Cards y marcado JSON-LD (`Article`, `Organization`, `BreadcrumbList`).
- **Google AdSense:** Script oficial en `<head>` de `index.html` sin duplicaciones y archivo `public/ads.txt`.

---

## 2. Estructura del Proyecto

```text
├── index.html                    # Entry point con lang="es", AdSense y Google Fonts
├── netlify.toml                  # Configuración de compilación y redirecciones en Netlify
├── package.json                  # Dependencias y scripts
├── tsconfig.json                 # Configuración de TypeScript
├── vite.config.ts                # Configuración de Vite
├── metadata.json                 # Metadatos del applet en AI Studio
├── public/
│   ├── _redirects                # Regla SPA para Netlify (/* /index.html 200)
│   ├── ads.txt                   # Archivo oficial de autorización AdSense
│   ├── robots.txt                # Directivas para rastreadores y enlace al sitemap
│   ├── sitemap.xml               # Mapa XML canónico con todas las URLs
│   └── assets/
│       └── images/               # Fotografías botánicas de alta calidad
└── src/
    ├── App.tsx                   # Enrutador principal y layout
    ├── main.tsx                  # Montaje React
    ├── index.css                 # Importación Tailwind y estilos de lectura
    ├── types/                    # Modelos e interfaces TypeScript
    ├── data/
    │   ├── categories.ts         # Las 4 categorías editoriales
    │   ├── articles.ts           # Los 8 artículos monográficos completos
    │   └── seasonal.ts           # Guía agronómica estacional adaptable
    ├── utils/
    │   ├── rules.ts              # Utilidades puras de lectura, URLs y validación
    │   └── rules.test.ts         # Pruebas unitarias ejecutadas con node:test
    ├── components/
    │   ├── Header.tsx            # Cabecera editorial con Top Bar Contract
    │   ├── Footer.tsx            # Pie de página institucional y legal
    │   ├── Breadcrumbs.tsx       # Migas de pan accesibles
    │   ├── SEOHead.tsx           # Inyector dinámico de metadatos y JSON-LD
    │   └── CookieBanner.tsx      # Banner funcional de consentimiento RGPD
    └── pages/
        ├── HomePage.tsx          # Portada editorial completa
        ├── CategoryPage.tsx      # Vista monográfica de categoría
        ├── ArticlePage.tsx       # Artículo completo con índice, tablas y FAQ
        ├── AboutPage.tsx         # Sobre nosotros y autoría
        ├── ContactPage.tsx       # Formulario validado y contacto directo
        ├── EditorialPolicyPage.tsx # Código ético y rigor botánico
        ├── PrivacyPolicyPage.tsx # Política de privacidad (RGPD)
        ├── CookiesPolicyPage.tsx # Política de cookies y gestor de consentimiento
        ├── SitemapPage.tsx       # Mapa HTML navegable
        └── NotFoundPage.tsx      # Error 404 personalizado en español
```

---

## 3. Categorías y Contenido Editorial

### 4 Categorías Principales
1. **Cultivo de flores comestibles** (`/categoria/cultivo-de-flores-comestibles`)
2. **Identificación botánica y seguridad** (`/categoria/identificacion-botanica-y-seguridad`)
3. **Cosecha y conservación** (`/categoria/cosecha-y-conservacion`)
4. **Coctelería y alta cocina** (`/categoria/cocteleria-y-alta-cocina`)

### 8 Artículos Monográficos Desarrollados
1. *Cómo cultivar capuchinas comestibles: guía práctica para principiantes* (*Tropaeolum majus*)
2. *Cómo cultivar violas para cócteles y alta cocina* (*Viola tricolor* / *Viola cornuta*)
3. *Cómo cultivar caléndulas para aprovechar sus pétalos* (*Calendula officinalis*)
4. *Cómo cultivar borraja para utilizar sus flores como guarnición* (*Borago officinalis*)
5. *Cómo cosechar y conservar flores comestibles de forma segura*
6. *Cómo preparar cubitos de hielo transparentes con flores comestibles*
7. *Cómo elegir flores comestibles para cócteles: color, sabor y forma*
8. *Cómo crear un pequeño jardín de flores comestibles para una cocina gastronómica*

---

## 4. Comandos de Ejecución y Compilación

### Instalación de dependencias
```bash
npm install
```

### Ejecución en desarrollo
```bash
npm run dev
```

### Ejecución de pruebas unitarias de lógica
```bash
npx --yes tsx --test src/utils/rules.test.ts
```

### Compilación para producción (Netlify / GitHub)
```bash
npm run build
```
Los archivos optimizados y estáticos se generarán en la carpeta `dist/`.

---

## 5. Despliegue en Netlify

1. Conecta el repositorio de GitHub en el panel de Netlify.
2. La configuración se detecta automáticamente desde `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Gracias a `public/_redirects` y `netlify.toml`, todas las rutas amigables (`/categoria/*`, `/articulo/*`, etc.) se resuelven correctamente sin errores 404 al recargar el navegador.
4. Los archivos `ads.txt`, `robots.txt` y `sitemap.xml` se sirven automáticamente en la raíz del dominio:
   - `https://tecnoteke.lol/ads.txt`
   - `https://tecnoteke.lol/robots.txt`
   - `https://tecnoteke.lol/sitemap.xml`
