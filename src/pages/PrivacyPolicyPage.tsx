import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <>
      <SEOHead
        title="Política de privacidad"
        description="Información detallada sobre el tratamiento de datos personales, cookies y publicidad programática en Garnish Botánico."
        pathname="/politica-de-privacidad"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumbs
          items={[{ label: 'Política de privacidad' }]}
          onNavigate={onNavigate}
        />

        <header className="space-y-4 border-b border-stone-200 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A9A85]">
            Protección de Datos y Privacidad
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#142E22]">
            Política de privacidad
          </h1>
          <p className="text-sm text-stone-600 font-sans">
            Última actualización: 26 de octubre de 2026. Aplicable al sitio web https://tecnoteke.lol/
          </p>
        </header>

        <section className="prose-editorial font-sans space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#142E22]">
              1. Responsable del tratamiento de los datos
            </h2>
            <p>
              En cumplimiento del Reglamento General de Protección de Datos (RGPD) y la normativa aplicable en materia de servicios de la sociedad de la información y comercio electrónico, se informa de que el responsable del tratamiento de los datos personales recabados a través de este sitio web es:
            </p>
            <ul>
              <li><strong>Titular editorial:</strong> Andres Martinez</li>
              <li><strong>Sitio web:</strong> https://tecnoteke.lol/</li>
              <li><strong>Correo de contacto:</strong> andresy1999@gmail.com</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#142E22]">
              2. Finalidad del tratamiento de datos personales
            </h2>
            <p>
              Los datos personales facilitados voluntariamente por los usuarios a través del formulario de contacto o mediante correo electrónico se tratarán con las siguientes finalidades:
            </p>
            <ul>
              <li>Atender, tramitar y responder a las consultas, dudas botánicas o propuestas remitidas por el usuario.</li>
              <li>Garantizar el funcionamiento técnico del sitio web y prevenir accesos no autorizados o ataques informáticos.</li>
            </ul>
            <p>
              No elaboramos perfiles comerciales automatizados ni cedemos sus datos personales a terceros sin base jurídica legítima.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#142E22]">
              3. Publicidad digital y tecnologías de terceros
            </h2>
            <p>
              Este sitio web se prepara para la integración de redes publicitarias y tecnologías de análisis de terceros que permiten financiar la generación de contenidos gratuitos y el mantenimiento técnico de la plataforma.
            </p>
            <p>
              Dichas plataformas y sus socios pueden emplear identificadores y cookies técnicas o analíticas para la medición de audiencias y la eventual difusión de anuncios adaptados a los estándares de privacidad vigentes.
            </p>
            <p>
              A través de nuestro banner de consentimiento y panel de control, usted puede en todo momento rechazar las cookies no esenciales o limitar su navegación a cookies técnicas estrictamente necesarias.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#142E22]">
              4. Plazo de conservación de los datos
            </h2>
            <p>
              Los datos remitidos a través del formulario de contacto se conservarán únicamente durante el tiempo estrictamente necesario para resolver su consulta y, como máximo, durante 12 meses para el seguimiento de la relación entablada, salvo obligación legal superior.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#142E22]">
              5. Derechos del usuario
            </h2>
            <p>
              Usted tiene derecho a acceder a sus datos personales, solicitar la rectificación de los datos inexactos o, en su caso, solicitar su supresión cuando ya no sean necesarios para los fines que fueron recogidos. Asimismo, puede solicitar la limitación del tratamiento u oponerse al mismo dirigiendo un mensaje a <strong>andresy1999@gmail.com</strong> indicando el derecho que desea ejercer.
            </p>
          </div>
        </section>

        <div className="pt-6 border-t border-stone-200 flex justify-between text-xs text-stone-500">
          <button
            onClick={() => onNavigate('/')}
            className="text-[#142E22] hover:underline font-semibold"
          >
            ← Volver a la portada principal
          </button>
          <button
            onClick={() => onNavigate('/politica-de-cookies')}
            className="text-[#142E22] hover:underline"
          >
            Ver política de cookies →
          </button>
        </div>
      </div>
    </>
  );
}
