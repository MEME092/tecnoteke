import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { BookOpen, CheckCircle2, RefreshCw, ShieldAlert, Award } from 'lucide-react';

interface EditorialPolicyPageProps {
  onNavigate: (path: string) => void;
}

export default function EditorialPolicyPage({ onNavigate }: EditorialPolicyPageProps) {
  return (
    <>
      <SEOHead
        title="Política editorial y de rigor botánico"
        description="Conoce las directrices de verificación agronómica, normas de seguridad alimentaria y política de correcciones de Garnish Botánico."
        pathname="/politica-editorial"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        <Breadcrumbs
          items={[{ label: 'Política editorial' }]}
          onNavigate={onNavigate}
        />

        <header className="space-y-4 border-b border-stone-200 pb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-[#7A9A85]">
            Código Ético y Normas Editoriales
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#142E22]">
            Política editorial y de rigor botánico
          </h1>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-sans">
            En Garnish Botánico asumimos que la información sobre plantas que pueden ingerirse requiere un nivel de verificación científico superior al de cualquier publicación de jardinería convencional.
          </p>
        </header>

        <section className="prose-editorial font-sans space-y-8">
          <div>
            <h2 className="font-serif text-2xl font-bold text-[#142E22]">
              1. Criterios de verificación botánica y taxonómica
            </h2>
            <p>
              Toda especie vegetal citada en nuestras guías debe identificarse inequívocamente con su nomenclatura binomial en latín (género y especie, incluyendo si procede la abreviatura de la autoridad botánica correspondiente). No admitimos artículos fundamentados exclusivamente en nombres vernáculos o populares, dada la alta incidencia de homonimias regionales engañosas (por ejemplo, plantas totalmente distintas denominadas popularmente "margarita" o "jazmín").
            </p>
            <p>
              Contrastamos la nomenclatura botánica con bases de datos canónicas internacionales reconocidas, como <em>Plants of the World Online</em> del Royal Botanic Gardens, Kew, y el <em>International Plant Names Index (IPNI)</em>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#142E22]">
              2. Protocolo de seguridad alimentaria e inocuidad
            </h2>
            <p>
              Una flor no se declara comestible en nuestras páginas a menos que exista documentación histórica sólida de consumo seguro y respaldo en catálogos de organismos de seguridad alimentaria (como la EFSA en Europa, la FDA en Estados Unidos o el Codex Alimentarius).
            </p>
            <p>
              Nuestra política editorial establece de forma tajante:
            </p>
            <ul>
              <li><strong>Deslinde de floristerías ornamentales:</strong> Reiteramos sistemáticamente que las flores de floristerías o centros de jardinería decorativa están tratadas con fitosanitarios sistémicos y no deben ingerirse bajo ninguna circunstancia.</li>
              <li><strong>Delimitación anatómica:</strong> Explicamos qué partes concretas de la flor son comestibles (pétalos aislados vs. cálices, estambres o pistilos astringentes).</li>
              <li><strong>Advertencia de alcaloides y sensibilidades:</strong> Documentamos posibles contraindicaciones (como los alcaloides pirrolizidínicos en borraja o la reactividad cruzada en alérgicos a las compuestas).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#142E22]">
              3. Política de rectificaciones y correcciones
            </h2>
            <p>
              Si un lector, botánico o profesional detecta un error taxonómico, una errata en los marcos de plantación o una discrepancia en las condiciones de cultivo, nuestro compromiso es corregirlo con celeridad:
            </p>
            <ul>
              <li>Cualquier solicitud de corrección enviada a <strong>andresy1999@gmail.com</strong> se evalúa en un plazo inferior a 72 horas.</li>
              <li>Si la corrección afecta a la idoneidad alimentaria de una especie o a una advertencia de seguridad, la actualización del artículo se realiza con carácter urgente e inmediato.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-serif text-2xl font-bold text-[#142E22]">
              4. Independencia editorial frente a publicidad y patrocinadores
            </h2>
            <p>
              Garnish Botánico mantiene una separación estricta e infranqueable entre el criterio editorial y cualquier futuro patrocinador o red publicitaria. Ninguna marca comercial, distribuidor de semillas, fertilizantes o destilería influye en el rigor de nuestras guías de cultivo ni en la verificación de seguridad botánica de las especies reseñadas.
            </p>
            <p>
              Todos los análisis botánicos se realizan con independencia editorial y con la salud y disfrute del comensal como máxima prioridad.
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
            onClick={() => onNavigate('/contacto')}
            className="text-[#142E22] hover:underline"
          >
            Enviar una sugerencia o corrección editorial →
          </button>
        </div>
      </div>
    </>
  );
}
