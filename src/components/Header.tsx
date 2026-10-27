import { useState } from 'react';
import { Menu, X, Flower2 } from 'lucide-react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export default function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Cultivo', path: '/categoria/cultivo-de-flores-comestibles' },
    { label: 'Identificación', path: '/categoria/identificacion-botanica-y-seguridad' },
    { label: 'Cosecha', path: '/categoria/cosecha-y-conservacion' },
    { label: 'Coctelería', path: '/categoria/cocteleria-y-alta-cocina' },
    { label: 'Sobre nosotros', path: '/sobre-nosotros' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zona 1: Brand Wordmark (Single text element en display serif) */}
          <button
            onClick={() => handleNav('/')}
            className="flex items-center gap-2.5 text-left group shrink-0 focus-visible:outline-2 focus-visible:outline-[#142E22]"
            aria-label="Garnish Botánico - Inicio"
          >
            <Flower2 className="w-6 h-6 text-[#142E22] transition-transform duration-200 group-hover:rotate-12" />
            <span className="font-serif text-2xl font-bold tracking-tight text-[#142E22] whitespace-nowrap">
              Garnish Botánico
            </span>
          </button>

          {/* Zona 2: 4-5 Nav Links concisos, texto unboxed, single-line */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-700"
          >
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNav(link.path)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#142E22] ${
                    isActive ? 'text-[#142E22] font-semibold' : 'text-stone-600'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#142E22] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zona 3: 1 Acción Primaria */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <button
              onClick={() => handleNav('/contacto')}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#142E22] rounded-lg hover:bg-[#1B382B] active:scale-95 transition-all duration-150 shadow-xs whitespace-nowrap shrink-0"
            >
              Contacto
            </button>
          </div>

          {/* Botón de Menú Móvil */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-stone-700 hover:text-[#142E22] hover:bg-stone-100 transition-colors"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú desplegable para móviles */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FBF9F5] px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
          <nav className="flex flex-col space-y-2 text-base font-medium text-stone-800">
            <button
              onClick={() => handleNav('/')}
              className={`text-left px-3 py-2 rounded-md ${
                currentPath === '/' ? 'bg-stone-200/60 font-semibold text-[#142E22]' : 'hover:bg-stone-100'
              }`}
            >
              Inicio
            </button>
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNav(link.path)}
                className={`text-left px-3 py-2 rounded-md ${
                  currentPath === link.path
                    ? 'bg-stone-200/60 font-semibold text-[#142E22]'
                    : 'hover:bg-stone-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2">
              <button
                onClick={() => handleNav('/contacto')}
                className="w-full text-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#142E22] rounded-lg shadow-xs"
              >
                Contacto
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
