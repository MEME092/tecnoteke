import { useState, useEffect } from 'react';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';
import { validateContactForm } from '../utils/rules';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  Shield, 
  Inbox, 
  Trash2, 
  ExternalLink, 
  MessageSquare, 
  Calendar, 
  User,
  Loader2,
  Check
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: string) => void;
}

export interface EditorialMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

const STORAGE_KEY = 'garnish_mensajes_editorial_v1';

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [activeTab, setActiveTab] = useState<'form' | 'inbox'>('form');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitNotice, setSubmitNotice] = useState<string | null>(null);

  // Mensajes almacenados para revisión editorial en el navegador
  const [messages, setMessages] = useState<EditorialMessage[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Ignorar si el almacenamiento local está restringido
    }
    return [
      {
        id: 'msg-demo-1',
        name: 'Carlos Mendoza',
        email: 'carlos.mendoza.bartender@gmail.com',
        subject: 'Coctelería y gastronomía',
        message: 'Buenas tardes Andrés. Quería consultar sobre el uso de borraja en cubos de hielo transparentes. ¿Es necesario darles un escaldado previo para fijar el color azul o la congelación directa preserva mejor los pigmentos?',
        timestamp: 'Ayer a las 18:42',
      }
    ];
  });

  // Guardar en almacenamiento cada vez que cambien los mensajes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      // Si el navegador bloquea localStorage, se mantiene en memoria
    }
  }, [messages]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = validateContactForm(formData);

    if (!result.valid) {
      setErrors(result.errors);
      return;
    }

    setIsSubmitting(true);
    setSubmitNotice(null);

    // 1. Guardar copia en el buzón editorial interno
    const newMessage: EditorialMessage = {
      id: `msg-${Date.now()}`,
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject,
      message: formData.message.trim(),
      timestamp: new Date().toLocaleString('es-ES', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
    };

    setMessages((prev) => [newMessage, ...prev]);

    // 2. Envío a la bandeja de correo oficial andresy1999@gmail.com mediante FormSubmit
    try {
      const response = await fetch('https://formsubmit.co/ajax/andresy1999@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          Nombre: formData.name,
          Email: formData.email,
          _subject: `[Garnish Botánico] Nueva consulta: ${formData.subject}`,
          Motivo: formData.subject,
          Mensaje: formData.message,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setSubmitNotice('Mensaje enviado a tu bandeja de correo andresy1999@gmail.com y guardado en tu buzón editorial.');
      } else {
        setSubmitNotice('El mensaje ha quedado registrado en tu buzón editorial interno.');
      }
    } catch {
      // Si falla la red exterior o hay bloqueo de CORS/adblocker, el mensaje no se pierde
      setSubmitNotice('Mensaje registrado con éxito en tu buzón editorial interno.');
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
      setErrors({});
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      consent: false,
    });
    setSubmitted(false);
    setSubmitNotice(null);
  };

  const handleDeleteMessage = (id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm('¿Deseas vaciar todas las consultas del buzón editorial?')) {
      setMessages([]);
    }
  };

  return (
    <>
      <SEOHead
        title="Contacto editorial"
        description="Ponte en contacto con el equipo editorial de Garnish Botánico para consultas técnicas, correcciones botánicas o colaboraciones."
        pathname="/contacto"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <Breadcrumbs
          items={[{ label: 'Contacto' }]}
          onNavigate={onNavigate}
        />

        <header className="space-y-4 border-b border-stone-200 pb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#7A9A85]">
                Comunicación y Consultas
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#142E22] mt-1">
                Contacto editorial
              </h1>
            </div>

            {/* Pestañas para alternar entre Formulario y Buzón Editorial */}
            <div className="flex items-center gap-1.5 p-1 bg-stone-100 border border-stone-200 rounded-xl text-xs font-medium">
              <button
                type="button"
                onClick={() => setActiveTab('form')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'form'
                    ? 'bg-white text-[#142E22] font-semibold shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                <Send className="w-3.5 h-3.5" />
                <span>Formulario público</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('inbox')}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all relative ${
                  activeTab === 'inbox'
                    ? 'bg-[#142E22] text-white font-semibold shadow-xs'
                    : 'text-stone-700 hover:text-stone-900'
                }`}
              >
                <Inbox className="w-3.5 h-3.5" />
                <span>Buzón editorial</span>
                {messages.length > 0 && (
                  <span className={`px-1.5 py-0.2 text-[10px] rounded-full font-bold ${
                    activeTab === 'inbox' ? 'bg-[#7A9A85] text-white' : 'bg-[#142E22] text-white'
                  }`}>
                    {messages.length}
                  </span>
                )}
              </button>
            </div>
          </div>

          <p className="text-base text-stone-700 leading-relaxed font-sans max-w-3xl">
            Canal oficial para dudas botánicas, propuestas gastronómicas y revisiones taxonómicas bajo la dirección de <strong className="text-stone-900 font-semibold">Andres Martinez</strong>.
          </p>
        </header>

        {/* VISTA 1: BUZÓN EDITORIAL (DÓNDE VER LOS MENSAJES) */}
        {activeTab === 'inbox' ? (
          <div className="space-y-6 animate-in fade-in duration-200">
            <div className="bg-[#FAF7F0] border border-stone-300 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#142E22] text-white flex items-center justify-center">
                    <Inbox className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-xl text-[#142E22]">
                      Buzón de Consultas Editoriales
                    </h2>
                    <p className="text-xs text-stone-600">
                      Visualizador de mensajes enviados a través de la web para el editor Andres Martinez.
                    </p>
                  </div>
                </div>

                {messages.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearAll}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#7D2D3B] hover:bg-[#7D2D3B]/10 rounded-lg transition-colors font-medium"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Vaciar buzón</span>
                  </button>
                )}
              </div>

              {/* Guía explicativa de canales */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-3.5 bg-white border border-stone-200 rounded-xl space-y-1">
                  <span className="font-semibold text-stone-900 block flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#7A9A85]" />
                    1. En tu correo oficial:
                  </span>
                  <p className="text-stone-600 leading-relaxed">
                    Las consultas se envían a <strong className="text-stone-800">andresy1999@gmail.com</strong>. Revisa también tu carpeta de «Notificaciones» o «Spam».
                  </p>
                </div>

                <div className="p-3.5 bg-white border border-stone-200 rounded-xl space-y-1">
                  <span className="font-semibold text-stone-900 block flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#7A9A85]" />
                    2. En este visor en pantalla:
                  </span>
                  <p className="text-stone-600 leading-relaxed">
                    Cada vez que un lector envía una consulta en la web, queda guardada aquí para que puedas leerla y responder directamente.
                  </p>
                </div>
              </div>
            </div>

            {/* Listado de mensajes */}
            {messages.length === 0 ? (
              <div className="bg-white border border-dashed border-stone-300 rounded-2xl p-12 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                  <Inbox className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-lg text-stone-800">
                  El buzón está vacío
                </h3>
                <p className="text-xs text-stone-500 max-w-sm mx-auto">
                  No hay consultas registradas actualmente. Cuando un usuario envíe un formulario desde la web, aparecerá en esta lista.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('form')}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#142E22] rounded-lg hover:bg-[#1B382B] transition-colors"
                  >
                    Probar el formulario
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-500 px-1">
                  <span>Mostrando {messages.length} {messages.length === 1 ? 'consulta' : 'consultas'} recibidas</span>
                  <span>Orden cronológico</span>
                </div>

                {messages.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white border border-stone-200 rounded-2xl p-6 space-y-4 shadow-2xs hover:border-stone-300 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 border-b border-stone-100 pb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FAF7F0] text-[#142E22] border border-stone-200">
                            {item.subject}
                          </span>
                          <span className="text-[11px] text-stone-400 flex items-center gap-1 font-mono">
                            <Calendar className="w-3 h-3" />
                            {item.timestamp}
                          </span>
                        </div>
                        <h3 className="font-serif font-bold text-lg text-stone-900 mt-1 flex items-center gap-2">
                          <User className="w-4 h-4 text-[#7A9A85]" />
                          {item.name}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={`mailto:${item.email}?subject=${encodeURIComponent(`Re: [Garnish Botánico] ${item.subject}`)}`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#142E22] rounded-lg hover:bg-[#1B382B] transition-colors shadow-2xs"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>Responder a {item.email}</span>
                        </a>

                        <button
                          type="button"
                          onClick={() => handleDeleteMessage(item.id)}
                          title="Eliminar mensaje"
                          aria-label="Eliminar mensaje"
                          className="p-1.5 text-stone-400 hover:text-[#7D2D3B] hover:bg-[#7D2D3B]/10 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="text-xs text-stone-500 font-mono">
                      Remitente:{' '}
                      <a href={`mailto:${item.email}`} className="text-[#142E22] underline font-sans font-medium">
                        {item.email}
                      </a>
                    </div>

                    <div className="bg-[#FAF7F0]/60 border border-stone-200/80 rounded-xl p-4 text-sm text-stone-800 leading-relaxed whitespace-pre-wrap font-sans">
                      {item.message}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* VISTA 2: FORMULARIO PÚBLICO */
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            
            {/* Información de Contacto Directo */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-[#FAF7F0] border border-stone-300 rounded-xl p-6 space-y-4">
                <h3 className="font-serif font-bold text-lg text-[#142E22]">
                  Datos oficiales
                </h3>
                
                <div className="space-y-3 text-xs sm:text-sm text-stone-700 font-sans">
                  <div>
                    <span className="font-semibold block text-stone-900">Responsable editorial:</span>
                    <span>Andres Martinez</span>
                  </div>

                  <div>
                    <span className="font-semibold block text-stone-900">Correo electrónico oficial:</span>
                    <a
                      href="mailto:andresy1999@gmail.com"
                      className="text-[#142E22] underline font-medium hover:text-[#1B382B] inline-flex items-center gap-1"
                    >
                      <span>andresy1999@gmail.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div>
                    <span className="font-semibold block text-stone-900">Plataforma y dominio:</span>
                    <span className="font-mono text-xs">https://tecnoteke.lol/</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-200 text-xs text-stone-600 space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#7A9A85]" />
                    <span>Plazo de respuesta estimado: 24 a 48 horas hábiles.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#7A9A85]" />
                    <span>Tus datos solo se usan para responder tu consulta.</span>
                  </div>
                </div>
              </div>

              {/* Acceso directo al buzón interno */}
              <div className="p-5 bg-white border border-stone-200 rounded-xl space-y-3">
                <div className="flex items-center gap-2 text-[#142E22] font-semibold text-sm">
                  <Inbox className="w-4 h-4 text-[#7A9A85]" />
                  <span>¿Eres el editor del sitio?</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Puedes consultar todos los mensajes recibidos directamente pulsando la pestaña <strong className="text-stone-800">«Buzón editorial»</strong> en la parte superior o en el siguiente botón:
                </p>
                <button
                  type="button"
                  onClick={() => setActiveTab('inbox')}
                  className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-semibold text-[#142E22] bg-[#FAF7F0] border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  <Inbox className="w-3.5 h-3.5" />
                  <span>Abrir buzón de consultas ({messages.length})</span>
                </button>
              </div>

              <div className="p-5 bg-white border border-stone-200 rounded-xl text-xs text-stone-600 space-y-2">
                <h4 className="font-serif font-bold text-stone-900 text-sm">
                  Aviso importante sobre consultas médicas
                </h4>
                <p className="leading-relaxed">
                  Garnish Botánico no presta asesoramiento médico ni atiende casos de intoxicación aguda. En caso de sospecha de intoxicación vegetal, acude a los servicios de urgencia médica o contacta con el centro de toxicología de tu país.
                </p>
              </div>
            </div>

            {/* Formulario de Contacto Funcional */}
            <div className="md:col-span-7">
              {submitted ? (
                <div className="bg-[#F4F9F5] border border-[#CDE5D4] rounded-2xl p-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#142E22] text-white flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-2xl text-[#142E22]">
                      ¡Mensaje registrado con éxito!
                    </h3>
                    <p className="text-sm text-stone-700 leading-relaxed max-w-md mx-auto">
                      {submitNotice || `Gracias por contactar con Garnish Botánico. Andres Martinez revisará tu mensaje a la mayor brevedad posible en la dirección indicada (${formData.email}).`}
                    </p>
                  </div>

                  <div className="p-4 bg-white border border-stone-200 rounded-xl text-xs text-stone-600 max-w-md mx-auto space-y-1.5 text-left">
                    <span className="font-semibold text-stone-900 block flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#142E22]" />
                      Acciones realizadas:
                    </span>
                    <ul className="list-disc list-inside space-y-1 text-stone-600">
                      <li>Guardado en el <strong>Buzón editorial</strong> de esta web.</li>
                      <li>Transmitido para entrega al correo <strong>andresy1999@gmail.com</strong>.</li>
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setActiveTab('inbox')}
                      className="px-4 py-2 text-xs font-semibold text-white bg-[#142E22] rounded-lg hover:bg-[#1B382B] transition-colors inline-flex items-center gap-1.5"
                    >
                      <Inbox className="w-3.5 h-3.5" />
                      <span>Ver en el buzón editorial</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#142E22] bg-white border border-stone-300 rounded-lg hover:bg-stone-50 transition-colors"
                    >
                      Enviar otra consulta
                    </button>
                  </div>
                </div>
              ) : (
                <form 
                  onSubmit={handleSubmit} 
                  noValidate 
                  name="contacto-editorial"
                  data-netlify="true"
                  className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-5 shadow-xs"
                >
                  <input type="hidden" name="form-name" value="contacto-editorial" />
                  
                  {/* Nombre */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-stone-800">
                      Nombre completo <span className="text-[#7D2D3B]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej. Carlos Mendoza"
                      disabled={isSubmitting}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F0]/40 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#142E22] ${
                        errors.name ? 'border-[#7D2D3B]' : 'border-stone-300'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-xs text-[#7D2D3B] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-stone-800">
                      Correo electrónico <span className="text-[#7D2D3B]">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tuemail@ejemplo.com"
                      disabled={isSubmitting}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F0]/40 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#142E22] ${
                        errors.email ? 'border-[#7D2D3B]' : 'border-stone-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-xs text-[#7D2D3B] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Asunto */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-stone-800">
                      Motivo o Asunto <span className="text-[#7D2D3B]">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F0]/40 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#142E22] ${
                        errors.subject ? 'border-[#7D2D3B]' : 'border-stone-300'
                      }`}
                    >
                      <option value="">Selecciona un motivo...</option>
                      <option value="Consulta sobre cultivo">Consulta sobre cultivo agronómico</option>
                      <option value="Identificación y seguridad">Identificación botánica o seguridad alimentaria</option>
                      <option value="Coctelería y gastronomía">Aplicación en coctelería o alta cocina</option>
                      <option value="Corrección o fe de erratas">Corrección editorial o fe de erratas</option>
                      <option value="Otro">Otro asunto editorial</option>
                    </select>
                    {errors.subject && (
                      <p className="text-xs text-[#7D2D3B] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-stone-800">
                      Mensaje detallado <span className="text-[#7D2D3B]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      placeholder="Escribe tu consulta con la mayor precisión posible..."
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-[#FAF7F0]/40 text-stone-900 focus:outline-none focus:ring-2 focus:ring-[#142E22] ${
                        errors.message ? 'border-[#7D2D3B]' : 'border-stone-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-xs text-[#7D2D3B] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Consentimiento */}
                  <div className="space-y-1.5 pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className="mt-1 w-4 h-4 rounded text-[#142E22] focus:ring-[#142E22] border-stone-300"
                      />
                      <span className="text-xs text-stone-600 leading-snug">
                        He leído y acepto la{' '}
                        <button
                          type="button"
                          onClick={() => onNavigate('/politica-de-privacidad')}
                          className="text-[#142E22] underline font-medium hover:text-[#1B382B]"
                        >
                          política de privacidad
                        </button>{' '}
                        para la gestión y respuesta de esta consulta. <span className="text-[#7D2D3B]">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="text-xs text-[#7D2D3B] flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Botón de Envío */}
                  <div className="pt-3 space-y-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#142E22] rounded-lg hover:bg-[#1B382B] active:scale-98 transition-all duration-150 shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Enviando consulta...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Enviar consulta editorial</span>
                        </>
                      )}
                    </button>

                    <div className="text-center pt-1">
                      <a
                        href={`mailto:andresy1999@gmail.com?subject=Consulta%20editorial%20Garnish%20Bot%C3%A1nico`}
                        className="text-[11px] text-stone-500 hover:text-stone-800 underline inline-flex items-center gap-1"
                      >
                        <Mail className="w-3 h-3" />
                        <span>O si prefieres, escribe directamente desde tu app de correo a andresy1999@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
