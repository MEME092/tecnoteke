import { Category } from '../types';

export const categories: Category[] = [
  {
    slug: 'cultivo-de-flores-comestibles',
    name: 'Cultivo de flores comestibles',
    shortDescription: 'Métodos agrícolas, preparación del sustrato, siembra escalonada y cuidados específicos para producir flores sanas en huertos y macetas.',
    longDescription: 'El cultivo doméstico y gastronómico de flores comestibles exige criterios específicos que difieren notablemente de la jardinería ornamental común. En esta sección abordamos la selección de semillas libres de tratamientos químicos, la estructura y aireación del suelo, el manejo eficiente del riego sin empapar los pétalos, la aclimatación climática y las pautas para prolongar la floración vigorosa tanto en bancales de cocina como en recipientes urbanos.',
    focusAreas: [
      'Preparación del suelo y drenaje óptimo',
      'Siembra directa, semilleros y germinación',
      'Exposición a luz solar y fotoperíodo',
      'Riego de precisión para evitar hongos en corolas',
      'Cultivo en macetas y espacios reducidos de cocina',
      'Clima, estacionalidad y resistencia térmica',
      'Poda higiénica y desbotonado para floración continua',
      'Resolución de plagas mediante manejo biológico preventivo',
    ],
    image: '/assets/images/huerto-flores-comestibles.jpg',
    altText: 'Bancal elevado de cultivo orgánico con capuchinas, caléndulas y violas en floración',
  },
  {
    slug: 'identificacion-botanica-y-seguridad',
    name: 'Identificación botánica y seguridad',
    shortDescription: 'Rigor taxonómico, diferenciación de especies tóxicas semejantes, partes vegetales aptas y prevención de contaminantes químicos.',
    longDescription: 'La regla cardinal en el uso de flores comestibles es la certeza botánica absoluta. Jamás debe consumirse una flor basándose exclusivamente en nombres vernáculos o apariencias vagas. Esta categoría proporciona herramientas taxonómicas rigurosas, desglosa qué partes concretas son aptas (como pétalos aislados frente a cálices o tallos) y advierte detalladamente sobre los peligros de flores procedentes de floristerías comerciales tratadas con pesticidas no alimentarios.',
    focusAreas: [
      'Identificación botánica inequívoca por género y especie',
      'Nomenclatura taxonómica y sinonimias comunes',
      'Diferenciación crítica entre especies comestibles y parientes tóxicos',
      'Anatomía floral: identificación de partes comestibles y descarte de pistilos amargos',
      'Peligros de floristerías ornamentales y productos fitosanitarios sistémicos',
      'Contaminación ambiental por proximidad a vías de tráfico o suelos dudosos',
      'Protocolos de inocuidad alimentaria e higiene',
      'Alergias al polen, sensibilidades individuales e introducción progresiva',
    ],
    image: '/assets/images/borraja-guarnicion.jpg',
    altText: 'Detalle botánico en primer plano de flores estelares de borraja con gotas de rocío',
  },
  {
    slug: 'cosecha-y-conservacion',
    name: 'Cosecha y conservación',
    shortDescription: 'Técnicas de recolección en el punto óptimo de turgencia, higiene de manipulación y métodos de conservación en frío y secado.',
    longDescription: 'Una flor comestible alcanza su máxima expresión organoléptica durante un intervalo de tiempo muy concreto. En esta sección detallamos la hora idónea para cortar los ejemplares respetando su hidratación natural, la esterilización y delicadeza requerida en las herramientas de corte, los sistemas de conservación en frío mediante papeles absorbentes ligeramente humedecidos y las técnicas de deshidratación controlada para pétalos estables.',
    focusAreas: [
      'Momento y hora idónea de recolección matutina',
      'Técnicas de corte limpio con tijeras desinfectadas',
      'Manipulación física mínima para conservar ceras y polen intactos',
      'Inspección y limpieza sin inmersión brusca en agua',
      'Refrigeración hermética a temperatura constante (4 °C a 6 °C)',
      'Deshidratación controlada a baja temperatura para pétalos de caléndula',
      'Señales biológicas de deterioro, marchitamiento y contaminación fúngica',
      'Preparación de recipientes húmedos para el pase de servicio en cocina y barra',
    ],
    image: '/assets/images/cosecha-conservacion.jpg',
    altText: 'Flores comestibles recién cosechadas dispuestas cuidadosamente sobre lino con tijeras de poda fina',
  },
  {
    slug: 'cocteleria-y-alta-cocina',
    name: 'Coctelería y alta cocina',
    shortDescription: 'Aplicaciones estéticas y aromáticas, esferas y cubos de hielo traslúcidos, maridajes visuales y garnish responsable en copas y vajillas.',
    longDescription: 'La integración de flores en la gastronomía y la coctelería contemporánea va mucho más allá del mero adorno superficial. Una guarnición botánica bien concebida interactúa con los aromas del cóctel, complementa los matices sápidos del plato y añade contraste textural. En este apartado exploramos técnicas de congelación cristalina unidireccional, flotabilidad en cócteles, sujeciones higiénicas en el borde del cristal y maridaje armónico.',
    focusAreas: [
      'Diseño y proporciones de guarniciones botánicas en copas',
      'Perfiles de sabor: desde la acidez apimentada de capuchina hasta el frescor de borraja',
      'Técnica de congelación direccional para cubitos de hielo 100% transparentes',
      'Montaje en platos fríos, carpaccios, postres y alta repostería',
      'Respeto por la experiencia del comensal: guarniciones que no incomodan al beber',
      'Interacción química entre pigmentos florales (antocianinas) y el pH de los cócteles',
      'Selección de contrastes cromáticos y texturas vegetales vivas',
      'Servicio responsable: información al cliente sobre la flor presente en su consumición',
    ],
    image: '/assets/images/flores-cocteles-guarnicion.jpg',
    altText: 'Cóctel artesanal en copa coupé coronado con flores de borraja y pétalos dorados en ambiente de coctelería',
  },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.slug === slug);
};
