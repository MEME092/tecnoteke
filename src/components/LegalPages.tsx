import React, { useState } from 'react';
import { AUTHOR_INFO } from '../data/seedArticles';
import { 
  ArrowLeft, 
  GraduationCap, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  CheckCircle, 
  Send, 
  FileText,
  AlertCircle,
  Clock,
  Sparkles,
  Lock,
  Scale
} from 'lucide-react';

interface LegalPagesProps {
  pageType: 'about' | 'privacy' | 'cookies' | 'terms' | 'contact';
  onBack: () => void;
}

export const LegalPages: React.FC<LegalPagesProps> = ({ pageType, onBack }) => {
  // Estado para el formulario interactivo de contacto
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactPrepared, setContactPrepared] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consulta de ${contactName}`);
    const body = encodeURIComponent(`Nombre: ${contactName}\nCorreo: ${contactEmail}\n\n${contactMessage}`);
    window.location.href = `mailto:${AUTHOR_INFO.email}?subject=${subject}&body=${body}`;
    setContactPrepared(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-indigo-600 mb-6 py-1.5 px-3 rounded-lg hover:bg-slate-100 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Volver a la navegación</span>
      </button>

          {/* PÁGINA: SOBRE EL AUTOR */}
      {pageType === 'about' && (
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-200">
            <img
              src="/static/img/author_andres.svg"
              alt="Andrés"
              className="w-20 h-20 rounded-2xl shadow-lg shrink-0 object-cover"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Andrés</h1>
              </div>
              <p className="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                Estudiante de Ingeniería de Sistemas • Universidad de la Costa (CUC)
              </p>
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Barranquilla, Atlántico – Colombia
              </p>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-700 space-y-4">
            <h2 className="text-xl font-bold text-slate-900">¿Quién está detrás de este blog?</h2>
            <p className="leading-relaxed">
              Hola, soy <strong>Andrés</strong>, estudiante de los últimos semestres del programa de Ingeniería de Sistemas en la <strong>Universidad de la Costa (CUC)</strong> en Barranquilla. Mi trayectoria académica y práctica se centra en el desarrollo de software con Python, interfaces modernas con el framework <strong>Flet</strong>, bases de datos relacionales y optimización de sistemas operativos.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Por qué nació Tecnoteke</h2>
            <p className="leading-relaxed">
              Muchas veces, cuando un estudiante, un profesional independiente o un usuario común intenta resolver un problema técnico —como realizar un trámite en la DIAN, compilar una app en Android o quitar aplicaciones basura de su teléfono Xiaomi— se topa con guías desactualizadas, llenas de enlaces maliciosos o con lenguaje incomprensible.
            </p>
            <p className="leading-relaxed">
              Este sitio web tiene un único propósito: <strong>democratizar el conocimiento técnico de forma directa, honesta y sin rodeos</strong>.
            </p>

            <h2 className="text-xl font-bold text-slate-900">Enfoque de elaboración del contenido</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose my-4">
              <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl space-y-1">
                <span className="font-bold text-xs text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Procedimientos documentados
                </span>
                <p className="text-xs text-emerald-900 leading-relaxed">
                  El contenido se presenta con explicaciones paso a paso, contexto técnico y referencias útiles para facilitar la comprensión del tema.
                </p>
              </div>

              <div className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-2xl space-y-1">
                <span className="font-bold text-xs text-indigo-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" />
                  Transparencia editorial
                </span>
                <p className="text-xs text-indigo-900 leading-relaxed">
                  Los procedimientos y requisitos pueden cambiar; consulta la fuente oficial antes de iniciar un trámite o aplicar una configuración.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PÁGINA: POLÍTICA DE PRIVACIDAD */}
      {pageType === 'privacy' && (
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Política de Privacidad</h1>
            <p className="text-xs text-slate-500 mt-1">Última actualización: Octubre de 2026</p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-4">
            <p>
              Esta política describe el comportamiento identificado en el código del sitio y las solicitudes a servicios externos cargados por la página.
            </p>

            <h2 className="text-lg font-bold text-slate-900">Archivos de Registro (Log Files)</h2>
            <p>
              El código de Tecnoteke no crea archivos de registro ni recopila por sí mismo direcciones IP, navegador o páginas de referencia. El proveedor de alojamiento o la red de distribución podrían procesar registros técnicos; esa información depende de sus servicios y políticas, que el sitio no puede confirmar desde esta aplicación.
            </p>

            <h2 className="text-lg font-bold text-slate-900">Cookies, consentimiento y anuncio de servicios</h2>
            <p>
              La aplicación guarda en el almacenamiento local del navegador la preferencia de ocultar el aviso de cookies y anuncios. El HTML inicial carga Google AdSense, que puede utilizar cookies o identificadores según la configuración del servicio y las políticas de Google; el aviso no bloquea el script ni registra consentimiento. La página también solicita fuentes a Google Fonts mediante <code>fonts.googleapis.com</code> y <code>fonts.gstatic.com</code>. No se encontró código de Google Analytics ni otra herramienta de analítica en la aplicación.
            </p>

            <h2 className="text-lg font-bold text-slate-900">Privacidad y Protección de Datos</h2>
            <p>
              El formulario de contacto prepara un mensaje en la aplicación de correo del dispositivo mediante un enlace <code>mailto:</code>; Tecnoteke no envía ni almacena ese contenido en un servidor. Si decides enviarlo, el tratamiento posterior depende del proveedor de correo que utilices. Para solicitar la revisión o eliminación de un mensaje enviado, escribe a <code>andresy1999f@gmail.com</code>.
            </p>
          </div>
        </div>
      )}

      {/* PÁGINA: POLÍTICA DE COOKIES */}
      {pageType === 'cookies' && (
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Política de Cookies</h1>
            <p className="text-xs text-slate-500 mt-1">Transparencia sobre las tecnologías de almacenamiento local y cookies.</p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-4">
            <p>
              Una cookie es un archivo de texto de tamaño reducido que un sitio web descarga en tu ordenador o teléfono móvil al navegar por él.
            </p>

            <h2 className="text-lg font-bold text-slate-900">Tipos de cookies que se pueden utilizar</h2>
            <ul>
              <li><strong>Almacenamiento local:</strong> La aplicación guarda la preferencia de ocultar el aviso en la clave <code>tecnoteke-cookie-notice-dismissed</code> hasta que se borren los datos del sitio. No se almacena una categoría de consentimiento.</li>
              <li><strong>Google AdSense:</strong> El script de AdSense se carga desde el HTML inicial y puede utilizar cookies o identificadores de terceros para mostrar anuncios. La aplicación no controla esa actividad desde el aviso.</li>
              <li><strong>Google Fonts:</strong> El HTML solicita fuentes externas a <code>fonts.googleapis.com</code> y <code>fonts.gstatic.com</code>; Google recibe esas solicitudes de recursos según sus propias políticas.</li>
              <li><strong>Cookies propias y analítica:</strong> El código de la aplicación no escribe cookies propias ni incorpora una herramienta de analítica.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900">Cómo administrar o bloquear cookies</h2>
            <p>
              Puedes borrar el almacenamiento local y bloquear o eliminar cookies desde la configuración de tu navegador. Borrar los datos del sitio también hará que vuelva a mostrarse el aviso. Para gestionar la publicidad de Google, consulta las opciones y políticas de Google.
            </p>
          </div>
        </div>
      )}

      {/* PÁGINA: AVISO LEGAL, DERECHOS DE AUTOR (COPYRIGHT) Y PROCEDENCIA DE IMÁGENES */}
      {pageType === 'terms' && (
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="border-b pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Aviso Legal, Propiedad Intelectual y Política de Copyright
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Normas de originalidad, licencias de contenido y descargo de responsabilidad técnica.
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 space-y-4">
            <div className="p-4 bg-indigo-50/80 border border-indigo-200 rounded-2xl not-prose space-y-2 mb-4">
              <span className="font-bold text-sm text-indigo-900 flex items-center gap-2">
                <Scale className="w-4 h-4 text-indigo-700" />
                Declaración de Originalidad y Cero Infracciones de Copyright
              </span>
              <p className="text-xs text-indigo-800 leading-relaxed">
                El contenido publicado en <strong>Tecnoteke</strong> es redactado por <strong>Andrés</strong> y se presenta con el objetivo de ofrecer explicaciones útiles, claras y originales para la comunidad de lectores interesada en tecnología y trámites digitales.
              </p>
            </div>

            <h2 className="text-lg font-bold text-slate-900">1. Procedencia y Autenticidad de las Imágenes</h2>
            <p>
              Para garantizar la originalidad del contenido y evitar cualquier tipo de infracción de derechos de autor (DMCA):
            </p>
            <ul>
              <li><strong>Uso de contenido propio:</strong> Cuando se utilizan imágenes o capturas, se prioriza el contenido redactado y generado por el autor para mantener claridad y coherencia editorial.</li>
              <li><strong>Referencias a terceros:</strong> En algunos artículos se muestran capturas o referencias a plataformas externas con fines explicativos; en esos casos se valora la procedencia y se evita la reproducción innecesaria de material ajeno.</li>
              <li><strong>Anonimización de datos privados:</strong> En los tutoriales de trámites gubernamentales, cualquier dato personal que pueda aparecer se reemplaza u oculta para proteger la privacidad del lector y evitar revelar información sensible.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900">2. Licencia de Contenido y Uso Aceptable</h2>
            <p>
              El material textual y los fragmentos de código se publican bajo los principios de la licencia internacional <strong>Creative Commons Atribución-NoComercial-CompartirIgual 4.0 (CC BY-NC-SA 4.0)</strong>:
            </p>
            <ul>
              <li><strong>Permitido:</strong> Estudiantes y lectores pueden consultar, citar fragmentos breves y utilizar el código en sus proyectos académicos o personales sin costo alguno, siempre que citen a Andrés y enlacen al tutorial original.</li>
              <li><strong>Prohibido:</strong> Queda terminantemente prohibida la clonación íntegra, el raspado automatizado (scraping) o la redistribución con fines comerciales directos sin autorización escrita previa del autor.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900">3. Descargo de Responsabilidad por Trámites Oficiales</h2>
            <p>
              Los tutoriales relativos a entidades gubernamentales (como la DIAN, Policía Nacional o DNP) son elaborados con propósitos puramente pedagógicos y orientativos. Este blog <strong>no representa formalmente a ninguna entidad pública</strong> ni cobra tarifas por la expedición de documentos oficiales.
            </p>

            <h2 className="text-lg font-bold text-slate-900">4. Contacto para Asuntos de Propiedad Intelectual</h2>
            <p>
              Si tienes cualquier duda legal o consideras que algún elemento requiere revisión, comunícate por correo a <code>andresy1999f@gmail.com</code>. El tiempo de respuesta puede variar.
            </p>
          </div>
        </div>
      )}

      {/* PÁGINA: CONTACTO REAL Y FORMULARIO INTERACTIVO */}
      {pageType === 'contact' && (
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-8">
          <div className="border-b pb-4">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Contacto Directo</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              ¿Tienes alguna duda sobre un tutorial, encontraste un cambio en un trámite o deseas proponer un tema?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna de Datos Directos */}
            <div className="space-y-4">
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Canales Oficiales
                </h3>
                
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block">Correo Electrónico:</span>
                    <a href="mailto:andresy1999f@gmail.com" className="text-indigo-600 hover:underline">
                      andresy1999f@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block">Ubicación Institucional:</span>
                    <span className="text-slate-600 text-xs">Universidad de la Costa (CUC) • Barranquilla, Colombia</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-800">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-semibold block">Tiempo de Respuesta Estimado:</span>
                    <span className="text-slate-600 text-xs">El tiempo de respuesta puede variar</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-800 space-y-1">
                <span className="font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Canal directo de contacto
                </span>
                <p>
                  El sitio mantiene un canal de contacto por correo para consultas, aclaraciones y sugerencias.
                </p>
              </div>
            </div>

            {/* Formulario Interactivo */}
            <div className="bg-slate-50/60 p-6 rounded-2xl border border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 mb-4">Envíanos un mensaje</h3>

              {contactPrepared ? (
                <div className="p-6 bg-emerald-100 text-emerald-900 rounded-xl text-center space-y-2 animate-fade-in">
                  <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto" />
                  <p className="font-bold text-sm">Solicitud preparada en tu aplicación de correo</p>
                  <p className="text-xs text-emerald-700">
                    Tecnoteke no puede confirmar el envío. Revisa el mensaje y envíalo desde tu cliente de correo.
                  </p>
                  <button
                    onClick={() => setContactPrepared(false)}
                    className="mt-3 px-3 py-1 bg-white text-emerald-800 rounded-lg text-xs font-semibold shadow-xs"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      required
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      placeholder="Tu nombre"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                      Mensaje o Consulta Técnica
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      placeholder="Describe tu pregunta o propuesta sobre los artículos..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold transition shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar Mensaje</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
