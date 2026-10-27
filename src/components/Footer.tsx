import { Flower2, Mail, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
  onOpenCookiePreferences?: () => void;
}

export default function Footer({ onNavigate, onOpenCookiePreferences }: FooterProps) {
  const handleNav = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#142E22] text-[#FBF9F5] border-t border-[#1B382B] mt-24">
      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Columna 1: Marca y Misión Editorial */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <Flower2 className="w-6 h-6 text-[#7A9A85]" />
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Garnish Botánico
              </span>
            </div>
            <p className="text-sm text-stone-300 leading-relaxed font-sans">
              Publicación editorial especializada en el cultivo, identificación, cosecha y uso responsable de flores comestibles para coctelería y gastronomía de autor.
            </p>
            <div className="pt-2 text-xs text-stone-400 space-y-1">
              <p>
                <span className="text-stone-300 font-medium">Responsable editorial:</span> Andres Martinez
              </p>
              <p className="flex items-center gap-1.5 text-stone-300">
                <Mail className="w-3.5 h-3.5 text-[#7A9A85]" />
                <a
                  href="mailto:andresy1999@gmail.com"
                  className="hover:text-white hover:underline transition-colors"
                >
                  andresy1999@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Columna 2: Categorías Editoriales */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide">
              Categorías Principales
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-300 font-sans">
              <li>
                <button
                  onClick={() => handleNav('/categoria/cultivo-de-flores-comestibles')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Cultivo de flores comestibles
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/categoria/identificacion-botanica-y-seguridad')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Identificación botánica y seguridad
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/categoria/cosecha-y-conservacion')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Cosecha y conservación
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/categoria/cocteleria-y-alta-cocina')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Coctelería y alta cocina
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 3: Publicación e Institucional */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide">
              Institucional
            </h3>
            <ul className="space-y-2.5 text-sm text-stone-300 font-sans">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/sobre-nosotros')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Sobre nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contacto')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Contacto
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/politica-editorial')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Política editorial
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/mapa-del-sitio')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Mapa del sitio
                </button>
              </li>
            </ul>
          </div>

          {/* Columna 4: Transparencia y Legalidad */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide">
              Transparencia y Legalidad
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Publicación editorial independiente comprometida con la divulgación botánica limpia, la inocuidad alimentaria y la transparencia con nuestros lectores.
            </p>
            <ul className="space-y-2.5 text-sm text-stone-300 font-sans">
              <li>
                <button
                  onClick={() => handleNav('/politica-de-privacidad')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Política de privacidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/politica-de-cookies')}
                  className="hover:text-white hover:underline transition-colors text-left"
                >
                  Política de cookies
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCookiePreferences}
                  className="text-stone-300 hover:text-white hover:underline transition-colors text-left flex items-center gap-1.5 font-medium"
                >
                  <span>Preferencias de cookies</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="mt-12 pt-8 border-t border-[#1B382B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>
            © {new Date().getFullYear()} Garnish Botánico. Todos los derechos reservados. Dominio oficial: https://tecnoteke.lol/
          </p>
          <div className="flex items-center gap-2 text-stone-400">
            <ShieldCheck className="w-4 h-4 text-[#7A9A85]" />
            <span>Divulgación botánica con rigor científico y responsabilidad culinaria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
