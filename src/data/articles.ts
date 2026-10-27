import { Article } from '../types';
import { moreArticles } from './moreArticles';

const baseArticles: Article[] = [
  {
    slug: 'como-cultivar-capuchinas-comestibles',
    title: 'Cómo cultivar capuchinas comestibles: guía práctica para principiantes',
    summary: 'Aprende a cultivar Tropaeolum majus desde semilla, controlar su vigor vegetativo para maximizar la floración y aprovechar sus flores y hojas de sabor apimentado en coctelería y gastronomía.',
    categorySlug: 'cultivo-de-flores-comestibles',
    scientificName: 'Tropaeolum majus L.',
    image: '/assets/images/capuchinas-comestibles.jpg',
    altText: 'Flores de capuchina naranja y amarilla con hojas peltadas redondeadas en un jardín botánico',
    author: 'Andres Martinez',
    authorRole: 'Responsable editorial y divulgador botánico',
    publishDate: '24 de octubre de 2026',
    readTimeMinutes: 8,
    featured: true,
    intro: [
      'La capuchina (Tropaeolum majus) es una de las especies botánicas más gratificantes y generosas para quienes se inician en el cultivo de flores comestibles con destino culinario. Originaria de la región andina de Sudamérica, esta herbácea anual —o vivaz en climas libres de heladas— aúna un extraordinario atractivo visual con un perfil sápido inconfundible, caracterizado por notas vivas, punzantes y levemente mostazadas causadas por sus glucosinolatos naturales.',
      'A diferencia de las plantas ornamentales convencionales que se adquieren florecidas en centros comerciales bajo tratamientos químicos preventivos, el cultivo propio de la capuchina a partir de semilla orgánica garantiza una floración libre de pesticidas sistémicos y con una turgencia inalcanzable en el circuito de distribución tradicional.',
      'En esta guía detallamos los requisitos edáficos, la gestión lumínica, el manejo hídrico y las técnicas de poda necesarias para cosechar flores limpias y sabrosas tanto en pequeños balcones urbanos como en huertos gastronómicos.'
    ],
    sections: [
      {
        id: 'identificacion-botanica',
        title: '1. Identificación botánica y características morfológicas',
        content: [
          'Tropaeolum majus pertenece a la familia Tropaeolaceae. Es fundamental no confundirla por su nombre vulgar con el género Nasturtium (como Nasturtium officinale, el berro de agua), que pertenece a las Brassicaceae, si bien ambas comparten una similitud sápida debida a compuestos azufrados.',
          'Las flores de capuchina son zigomorfas, compuestas por cinco pétalos libres que pueden presentarse en tonalidades que van desde el amarillo pálido y el albaricoque hasta el escarlata encendido, el naranja intenso y tonos caoba. Poseen un espolón posterior característico de 2 a 3 centímetros que contiene néctar dulce, lo que genera un contraste organoléptico delicioso entre el néctar de su base y el matiz picante de los pétalos.',
          'Sus hojas son peltadas, redondeadas y sostenidas por pecíolos largos insertados en el centro del limbo, con una llamativa nervadura radiada y propiedades hidrofóbicas en su haz.'
        ],
        callout: {
          type: 'info',
          title: 'Partes de la planta aptas para uso culinario',
          text: 'Tanto los pétalos completos como las flores enteras, las hojas tiernas y los botones florales cerrados son aptos para el consumo. Los frutos verdes inmaduros se encurten tradicionalmente como sustituto artesanal de las alcaparras.'
        }
      },
      {
        id: 'condiciones-suelo-luz',
        title: '2. Requerimientos de suelo, luz y drenaje',
        content: [
          'La capuchina es una especie notablemente frugal, pero tiene una peculiaridad agronómica que muchos cultivadores primerizos desconocen: el exceso de fertilidad en el sustrato perjudica la floración. Si el suelo presenta un contenido desproporcionado de nitrógeno, la planta desarrollará una exuberante masa de follaje verde en detrimento de la emisión floral.',
          'Prefiere suelos ligeros, arenoso-limosos, con un pH entre 6.0 y 7.5. El drenaje es el factor más crítico: el estancamiento hídrico prolongado pudre con rapidez las raíces finas y favorece la asfixia radicular.'
        ],
        tableData: {
          headers: ['Parámetro de cultivo', 'Condición óptima', 'Consecuencia de desviación'],
          rows: [
            ['Exposición solar', '6 a 8 horas de sol directo', 'Menor sol: tallos ahilados y floración escasa'],
            ['Estructura del sustrato', 'Ligero, con un 20% de perlita o arena silícea', 'Suelo arcilloso compacto: riesgo de hongos radiculares'],
            ['Nivel de fertilización', 'Bajo a moderado (evitar abonos ricos en N)', 'Exceso de nitrógeno: mucho follaje y cero flores'],
            ['Temperatura diurna', '15 °C a 24 °C', 'Calor extremo (>32 °C): marchitez temporal diurna'],
          ]
        }
      },
      {
        id: 'siembra-y-germinacion',
        title: '3. Siembra y germinación paso a paso',
        content: [
          'Las semillas de Tropaeolum majus son voluminosas, rugosas y presentan una cubierta seminal gruesa que protege al embrión. Para asegurar una germinación homogénea y rápida en menos de diez días, se recomienda un sencillo tratamiento pregerminativo.'
        ],
        steps: [
          {
            number: 1,
            title: 'Escarificación suave o remojo previo',
            description: 'Sumerge las semillas en agua limpia a temperatura ambiente durante 8 a 12 horas antes de la siembra. Esto ablanda la cubierta leñosa e hidrata los cotiledones.',
            tip: 'No superes las 18 horas de inmersión para evitar la fermentación o asfixia del embrión.'
          },
          {
            number: 2,
            title: 'Profundidad de siembra',
            description: 'Entierra las semillas a una profundidad de 1,5 a 2 centímetros. La germinación de la capuchina se ve favorecida en condiciones de oscuridad relativa.',
            tip: 'Presiona levemente la superficie del sustrato para asegurar un contacto íntimo entre semilla y tierra.'
          },
          {
            number: 3,
            title: 'Humedad constante sin encharcar',
            description: 'Mantén el sustrato húmedo mediante pulverizaciones suaves o riego por capilaridad hasta que emerjan los primeros brotes, habitualmente entre los 7 y 14 días a 18-20 °C.',
          },
          {
            number: 4,
            title: 'Aclareo y distancia de plantación',
            description: 'En cultivo en suelo directo o jardineras, deja un espacio mínimo de 25 a 30 cm entre plantas para las variedades compactas enanas (Tropaeolum majus nanum) y de 40 a 50 cm para las variedades trepadoras o rastreras.',
          }
        ]
      },
      {
        id: 'cultivo-en-macetas',
        title: '4. Cultivo en macetas y recipientes para cocina',
        content: [
          'La capuchina es ideal para macetas ubicadas en alféizares, terrazas soleadas o patios de restaurantes. El volumen mínimo recomendado para una planta individual es de 5 a 7 litros, con una profundidad no inferior a 20 centímetros.',
          'Asegúrate de que la maceta disponga de múltiples orificios de drenaje. Coloca una base de 2 cm de grava volcánica o arlita antes de verter el sustrato. Para macetas colgantes, las variedades trepadoras caen en bellísimas cascadas vegetales que facilitan la cosecha de flores limpias, suspendidas en el aire sin contacto con salpicaduras de tierra.'
        ]
      },
      {
        id: 'riego-y-mantenimiento',
        title: '5. Manejo del riego y floración continua',
        content: [
          'El riego debe ser regular pero moderado. La pauta idónea es permitir que los dos centímetros superiores del sustrato se sequen ligeramente entre riegos sucesivos. Aplica el agua directamente sobre el sustrato, evitando mojar las flores y hojas centrales, ya que las gotas retenidas bajo el sol directo pueden provocar quemaduras ópticas o propiciar focos de botritis.',
          'La técnica más eficaz para garantizar una floración ininterrumpida durante varios meses es el desbotonado constante (deadheading): retira de inmediato las flores marchitas junto con su pedúnculo antes de que comiencen a formar los frutos verdes. De este modo, la planta canaliza su energía hacia nuevos botones en lugar de destinarla a la maduración de semillas.'
        ]
      },
      {
        id: 'problemas-frecuentes',
        title: '6. Plagas comunes y manejo preventivo ecológico',
        content: [
          'En el ámbito agroecológico, la capuchina se utiliza a menudo como "planta trampa" en huertos debido a su alta atracción para el pulgón negro (Aphis fabae) y las orugas de la mariposa de la col (Pieris brassicae). Sin embargo, cuando nuestro objetivo es cosechar flores gastronómicas impecables, debemos protegerlas preventivamente sin recurrir a químicos sintéticos que anularían su idoneidad para el consumo.',
          'Inspecciona el envés de las hojas y los pedúnculos dos veces por semana. Si detectas focos iniciales de pulgón, retíralos manualmente con una brocha suave o pulveriza una solución de jabón potásico diluido al 1% en agua tibia sobre las zonas vegetativas, evitando mojar las flores ya abiertas. Deja transcurrir al menos 48 horas tras cualquier tratamiento ecológico antes de cosechar ejemplares culinarios.'
        ]
      },
      {
        id: 'aplicaciones-gastronomicas',
        title: '7. Aplicaciones culinarias y notas de cata',
        content: [
          'Las flores de capuchina aportan un impacto cromático vibrante y una textura sedosa que finaliza con un picor limpio similar al rábano o la mostaza dijon. En coctelería botánica, resultan excepcionales en tragos con base de ginebra seca, mezcal artesanal o bloody marys reinterpretados, fijadas al borde de la copa con mini pinzas de bambú o flotando sobre hielo cristalino.',
          'En cocina salada, acompañan con maestría tartares de pescado blanco, ensaladas de brotes amargos, quesos de cabra frescos y carpaccios de calabacín. Sus hojas tiernas pueden picarse finamente e integrarse en mantequillas compuestas con sal en escamas.'
        ]
      },
      {
        id: 'precauciones-seguridad',
        title: '8. Precauciones y seguridad alimentaria',
        content: [
          'Como principio rector de Garnish Botánico, consume únicamente flores cultivadas expresamente para consumo humano sin pesticidas ni fertilizantes sintéticos. Las personas con gastritis activa, úlceras pépticas o sensibilidades gástricas agudas deben moderar el consumo de capuchinas debido a la presencia de bencil-glucosinolatos, que pueden resultar ligeramente irritantes en cantidades elevadas.',
          'Ante cualquier duda alérgica, introduce un único pétalo y espera 24 horas antes de incorporar raciones mayores.'
        ]
      }
    ],
    safetyWarnings: [
      'Nunca consumas flores de capuchina adquiridas en floristerías ornamentales o centros de jardinería no certificados para uso alimentario.',
      'Lava las flores mediante inmersión suave en agua fresca únicamente si es imprescindible, retirando manualmente cualquier insecto antes de servir.',
      'Las personas con hipersensibilidad a los glucosinolatos o problemas digestivos inflamatorios deben consumir esta flor con prudencia.'
    ],
    faqs: [
      {
        question: '¿Cuánto tiempo tarda la capuchina en florecer desde la siembra?',
        answer: 'En condiciones óptimas de temperatura (18 °C a 22 °C) y con buena radiación solar, Tropaeolum majus inicia la floración entre los 50 y 65 días posteriores a la siembra directa.'
      },
      {
        question: '¿Por qué mi capuchina tiene muchas hojas pero ninguna flor?',
        answer: 'La causa principal es el exceso de nitrógeno en la tierra o el uso de abonos universales desequilibrados. Cambia a un régimen de abono nulo o añade compost maduro con mayor proporción de fósforo y potasio, y asegúrate de que reciba al menos 6 horas de sol.'
      },
      {
        question: '¿Puedo congelar las flores de capuchina enteras para conservarlas?',
        answer: 'No es aconsejable congelarlas en seco, ya que al descongelarse sus paredes celulares colapsan y se convierten en una masa húmeda y descolorida. Si deseas conservarlas en frío extremo, inclúyelas dentro de cubitos de hielo para cócteles.'
      }
    ],
    references: [
      {
        citation: 'Royal Horticultural Society (RHS)',
        source: 'Tropaeolum majus (Nasturtium) Cultivation & Edibility Guide',
        year: '2024',
        url: 'https://www.rhs.org.uk'
      },
      {
        citation: 'University of California Agriculture and Natural Resources (UC ANR)',
        source: 'Edible Flowers: Safe Production and Botanical Identification Fact Sheet',
        year: '2023'
      },
      {
        citation: 'Food and Agriculture Organization (FAO)',
        source: 'Underutilized Edible Plants of the Andean Region',
        year: '2021'
      }
    ],
    relatedSlugs: [
      'como-cultivar-violas-para-cocteles-y-alta-cocina',
      'como-cosechar-y-conservar-flores-comestibles',
      'como-elegir-flores-comestibles-para-cocteles'
    ]
  },
  {
    slug: 'como-cultivar-violas-para-cocteles-y-alta-cocina',
    title: 'Cómo cultivar violas para cócteles y alta cocina',
    summary: 'Guía agronómica y culinaria para el cultivo de Viola tricolor y Viola cornuta: sustrato, exposición semi-soleada, control de temperatura y técnicas de conservación para un servicio gastronómico impecable.',
    categorySlug: 'cultivo-de-flores-comestibles',
    scientificName: 'Viola tricolor L. / Viola cornuta L.',
    image: '/assets/images/violas-cocteleria.jpg',
    altText: 'Selección de violas comestibles tricolores frescas reposando sobre lino junto a una copa de cóctel',
    author: 'Andres Martinez',
    authorRole: 'Responsable editorial y divulgador botánico',
    publishDate: '23 de octubre de 2026',
    readTimeMinutes: 8,
    featured: true,
    intro: [
      'Pocas flores ostentan una versatilidad y delicadeza tan universal en el diseño culinario como las del género Viola, especialmente el pensamiento salvaje (Viola tricolor) y la violeta de los Pirineos (Viola cornuta). Su compleja paleta de matices —que abarca desde el morado terciopelo y el azul zafiro hasta el amarillo canario y el blanco marfil— las convierte en la reina indiscutible del garnish en cócteles de autor y repostería contemporánea.',
      'Su sabor es suave, sutilmente dulzón con un trasfondo herbáceo fresco que no altera los aromas dominantes de una bebida ni los sabores finos de un entrante salado. Sin embargo, para obtener ejemplares gastronómicamente seguros, es preceptivo criarlos lejos de plaguicidas de vivero ornamental, los cuales suelen ser altamente persistentes en las corolas.',
      'A continuación analizamos los factores de cultivo esenciales para mantener una producción regular de flores turgentes y aromáticas durante los meses templados del año.'
    ],
    sections: [
      {
        id: 'especies-y-variedades',
        title: '1. Diferenciación de especies: Viola tricolor frente a híbridos',
        content: [
          'En botánica gastronómica trabajamos principalmente con dos vertientes: Viola tricolor (pensamiento silvestre, de flores pequeñas, vivaces y colores tricolores nítidos) y Viola cornuta (de porte compacto y floración abundante y continua). También se emplean las variedades de pensamiento de jardín (Viola × wittrockiana), aunque sus flores de mayor calibre resultan más pesadas para flotar en cócteles delicados.',
          'Para coctelería se prefieren las corolas de pequeño calibre (de 1,5 a 3 cm de diámetro), ya que encajan con naturalidad en copas coupette, nick & nora o vasos tumbler sin abrumar la superficie del líquido.'
        ]
      },
      {
        id: 'sustrato-y-macetas',
        title: '2. Sustrato, drenaje y recipientes',
        content: [
          'Las violas poseen un sistema radicular fasciculado y poco profundo. Prosperan con excelencia en jardineras y macetas de profundidad moderada (15 a 18 cm).',
          'El sustrato debe ser esponjoso, con alta capacidad de retención de humedad pero sin riesgo de apelmazamiento. Una mezcla compuesta por 60% de fibra de coco o turba rubia, 20% de humus de lombriz maduro y 20% de perlita garantiza el equilibrio ideal para el desarrollo de raíces capilares sanas.'
        ]
      },
      {
        id: 'temperatura-y-luz',
        title: '3. Clima, fotoperíodo y gestión térmica',
        content: [
          'A diferencia de las plantas amantes del calor estival, las violas son especies de estación fría o templada. Su rango de confort térmico diurno oscila entre los 12 °C y los 20 °C.',
          'Bajo temperaturas superiores a los 26 °C, la planta frena la emisión de botones, los tallos se estiran y las flores pierden turgencia en cuestión de horas. En climas mediterráneos o zonas cálidas, el cultivo debe realizarse en otoño, invierno y principios de primavera, situando las plantas en semisombra luminosa donde reciban sol filtrado de mañana y sombra durante la tarde.'
        ]
      },
      {
        id: 'riego-y-mantenimiento',
        title: '4. Riego de precisión y poda de regeneración',
        content: [
          'El riego debe ser frecuente y de bajo caudal. Mantén el sustrato constantemente fresco al tacto, pero jamás encharcado. Es imprescindible aplicar el agua a nivel del sustrato mediante boquilla fina o riego subterráneo; mojar las flores de viola provoca manchas necróticas y favorece la aparición del hongo Botrytis cinerea.',
          'Retira diariamente las flores polinizadas o en senescencia cortando el pedúnculo floral desde su base. Esta práctica estimula la brotación de nuevas yemas axilares en un ciclo que puede prolongarse por más de cuatro meses ininterrumpidos.'
        ]
      },
      {
        id: 'cosecha-y-servicio',
        title: '5. Cosecha, acondicionamiento y pase gastronómico',
        content: [
          'Cosecha las violas a primera hora de la mañana, tan pronto como se haya evaporado el rocío y antes de que el sol caliente el follaje. Utiliza tijeras curvas de manicura o bisturí botánico, cortando a 5 mm bajo la base del cáliz si las vas a colocar flotantes, o conservando 2 cm de pedúnculo si las vas a fijar con pinza al borde de la copa.',
          'Deposítalas inmediatamente sobre una bandeja rígida forrada con papel absorbente húmedo y refrigéralas entre 4 °C y 6 °C en un recipiente hermético. En estas condiciones mantienen su frescura hasta 5 o 7 días.'
        ]
      },
      {
        id: 'seguridad-pesticidas',
        title: '6. Seguridad alimentaria: el peligro de las violas de floristería',
        content: [
          'Este es uno de los avisos más trascendentales de nuestra publicación: nunca utilices plantas de pensamiento o viola compradas en viveros comerciales comunes para decorar comida o bebidas. La inmensa mayoría de las plantas ornamentales reciben fungicidas e insecticidas sistémicos (como imidacloprid o azoxistrobina) formulados para permanecer semanas en el tejido vegetal y que carecen de autorización para consumo humano.',
          'Para uso culinario, adquiere semillas ecológicas certificadas y cultívalas en recipientes con tierra limpia durante todo su ciclo.'
        ]
      }
    ],
    safetyWarnings: [
      'Prohibido el uso de violas comerciales ornamentales en bebidas o alimentos.',
      'Revisa minuciosamente cada flor antes de servir para asegurarte de que no aloje pequeños insectos en el cáliz.',
      'Descarta ejemplares que presenten manchas mohosas, manchas marrones o pérdida de turgencia.'
    ],
    faqs: [
      {
        question: '¿Qué sabor tienen exactamente las flores de viola?',
        answer: 'Poseen un sabor sumamente delicado, ligeramente dulce con matices que recuerdan a la lechuga tierna y un fondo floral suave. No alteran el sabor del cóctel.'
      },
      {
        question: '¿Puedo cristalizar las flores de viola con azúcar?',
        answer: 'Sí, la viola es la flor tradicional por excelencia para cristalizar. Se pincela suavemente con clara de huevo pasteurizada (o goma arábiga en polvo reconstituida para opción vegana), se espolvorea con azúcar superfino y se deja secar en lugar cálido y seco.'
      }
    ],
    references: [
      {
        citation: 'European Food Safety Authority (EFSA)',
        source: 'Compendium of Botanicals Reported to Contain Naturally Occurring Substances of Risk',
        year: '2023'
      },
      {
        citation: 'Kavaz et al., Journal of Food Science and Technology',
        source: 'Evaluation of edible flowers as functional ingredients in gastronomic presentations',
        year: '2022'
      }
    ],
    relatedSlugs: [
      'como-cultivar-capuchinas-comestibles',
      'como-preparar-cubitos-de-hielo-con-flores-comestibles',
      'como-elegir-flores-comestibles-para-cocteles'
    ]
  },
  {
    slug: 'como-cultivar-calandulas-para-aprovechar-sus-petalos',
    title: 'Cómo cultivar caléndulas para aprovechar sus pétalos',
    summary: 'Identificación botánica de Calendula officinalis, métodos de cultivo, cosecha manual de lígulas, secado higiénico y seguridad alimentaria en coctelería y gastronomía.',
    categorySlug: 'cultivo-de-flores-comestibles',
    scientificName: 'Calendula officinalis L.',
    image: '/assets/images/calandulas-petalos.jpg',
    altText: 'Flores de caléndula officinalis y pétalos dorados secos en cuenco cerámico sobre madera rústica',
    author: 'Andres Martinez',
    authorRole: 'Responsable editorial y divulgador botánico',
    publishDate: '22 de octubre de 2026',
    readTimeMinutes: 7,
    featured: true,
    intro: [
      'La caléndula (Calendula officinalis), conocida popularmente como botón de oro o maravilla, es una de las especies botánicas con mayor arraigo en la historia de la gastronomía europea y mediterránea. Tradicionalmente bautizada como "el azafrán de los pobres", sus lígulas florales de vivos tonos amarillos y anaranjados aportan no solo un intenso destello cromático a cócteles y preparaciones culinarias, sino también una ligera nota herbácea, levemente amarga y resinosa.',
      'Sin embargo, en el mundo de las flores comestibles existe una confusión botánica frecuente entre la verdadera Calendula officinalis y los miembros del género Tagetes (claveles moros o cempasúchil). Es indispensable distinguir taxonómicamente ambas plantas, ya que su perfil químico, usos culinarios y seguridad difieren considerablemente.',
      'En este artículo examinamos el cultivo riguroso de Calendula officinalis, el proceso para cosechar sus pétalos en plenitud aromática y las mejores técnicas para conservarlos tanto frescos como deshidratados.'
    ],
    sections: [
      {
        id: 'distincion-botanica',
        title: '1. Rigor botánico: Calendula officinalis vs. género Tagetes',
        content: [
          'Calendula officinalis pertenece a la familia Asteraceae. Presenta hojas alternas, oblongas o espatuladas, con bordes enteros o ligeramente dentados y una textura suave, carente de las divisiones profundas y el olor fuertemente almizclado característico de las especies de Tagetes (como Tagetes patula o Tagetes erecta).',
          'Los capítulos florales de la caléndula presentan un disco central rodeado por una o varias filas de flores liguladas (lo que popularmente llamamos "pétalos"). Para el uso culinario, se aprovechan casi en su totalidad las lígulas periféricas, desechando el disco central y el receptáculo verde, que contienen mayor concentración de resinas amargas y fibras duras.'
        ]
      },
      {
        id: 'siembra-y-cultivo',
        title: '2. Siembra, necesidades de luz y suelo',
        content: [
          'La caléndula es una planta rústica y sumamente agradecida. Tolera una amplia variedad de suelos, aunque agradece suelos franco-arenosos bien drenados con abundante materia orgánica descompuesta.',
          'Siembra directamente a principios de primavera o a finales de verano en climas templados. Las semillas tienen una forma curvada muy peculiar, similar a pequeñas orugas o medias lunas. Se entierran a 1 cm de profundidad con un marco de plantación de 25 cm entre ejemplares.',
          'Exige pleno sol (un mínimo de 6 horas diarias) para desplegar sus inflorescencias con vigor. En ubicaciones sombrías, los capítulos florales tienden a cerrarse prematuramente y la planta se vuelve vulnerable al oídio (Erysiphe cichoracearum).'
        ]
      },
      {
        id: 'cosecha-petalos',
        title: '3. Técnicas de recolección de las lígulas florales',
        content: [
          'La recolección debe realizarse a media mañana, en días secos y soleados, una vez que el sol ha evaporado el rocío y los capítulos se encuentran completamente abiertos desplegando sus lígulas hacia la luz.',
          'Sujeta la flor por la base y, con un movimiento suave de pellizco, desprende las lígulas anaranjadas o amarillas del disco central. Si se cosecha la flor entera, corta el pedúnculo y traslada los capítulos en cestas poco profundas para que no se aplasten.'
        ]
      },
      {
        id: 'secado-y-conservacion',
        title: '4. Secado controlado y almacenamiento a largo plazo',
        content: [
          'A diferencia de otras flores que pierden su color con la deshidratación, la caléndula conserva un pigmento carotenoide extraordinariamente estable. Extiende los pétalos cosechados sobre mallas de secado o bandejas de mimbre en una sola capa, en un lugar oscuro, cálido y ventilado (idealmente a 30 °C - 35 °C).',
          'Evita la exposición directa al sol durante el secado para que no se degraden los carotenoides. Una vez quebradizos (tras 3 a 5 días), guárdalos en botes de cristal ámbar herméticos en un lugar seco. Se conservan intactos hasta 12 meses.'
        ]
      },
      {
        id: 'usos-gastronomicos',
        title: '5. Usos en coctelería y cocina',
        content: [
          'En mixología, los pétalos frescos de caléndula se utilizan para bordear copas húmedas con sirope de agave o para flotar sobre cócteles de color ámbar o cítricos (whisky sour botánico, spritz herbal). Los pétalos deshidratados pueden infusionarse en vermut blanco o ginebra artesanal, aportando una suave coloración dorada y notas amargas minerales.',
          'En cocina, sus pétalos aportan un toque brillante a arroces, mantequillas de hierbas, caldos claros y quesos de untar.'
        ]
      },
      {
        id: 'seguridad-alimentaria',
        title: '6. Seguridad alimentaria y sensibilidades',
        content: [
          'Calendula officinalis goza de estatus Generally Recognized As Safe (GRAS) por diversas autoridades sanitarias cuando se emplean sus pétalos. No obstante, al pertenecer a la familia de las asteráceas o compuestas, las personas alérgicas a la ambrosía, manzanilla o margaritas deben evitar su consumo por riesgo de reactividad cruzada.',
          'Asimismo, en concentraciones medicinales elevadas (tinturas o infusiones concentradas) se desaconseja durante el embarazo por su tradicional efecto emenagogo, si bien su uso como adorno gastronómico es seguro.'
        ]
      }
    ],
    safetyWarnings: [
      'Personas con alergia diagnosticada a las asteráceas (compuestas) deben abstenerse de ingerir caléndula.',
      'Desecha el receptáculo verde y el centro del capítulo si buscas un sabor suave y agradable en coctelería.',
      'Confirma siempre que se trate de Calendula officinalis y no de variedades híbridas ornamentales no comestibles.'
    ],
    faqs: [
      {
        question: '¿La caléndula sustituye al azafrán en sabor?',
        answer: 'Aporta un color dorado muy similar y un atractivo visual notable, pero su sabor es sutilmente terroso y herbáceo, sin la profundidad amarga y yodada del auténtico azafrán (Crocus sativus).'
      },
      {
        question: '¿Puedo comer las hojas de caléndula?',
        answer: 'Las hojas tiernas son biológicamente comestibles, pero poseen un sabor amargo y textura astringente poco agradable en gastronomía; por ello la tradición culinaria se centra casi exclusivamente en sus lígulas.'
      }
    ],
    references: [
      {
        citation: 'European Medicines Agency (EMA)',
        source: 'Assessment report on Calendula officinalis L., flos',
        year: '2020'
      },
      {
        citation: 'USDA Agricultural Research Service',
        source: 'Phytochemical and Ethnobotanical Databases: Calendula officinalis',
        year: '2023'
      }
    ],
    relatedSlugs: [
      'como-cultivar-capuchinas-comestibles',
      'como-cosechar-y-conservar-flores-comestibles',
      'como-elegir-flores-comestibles-para-cocteles'
    ]
  },
  {
    slug: 'como-cultivar-borraja-para-guarnicion',
    title: 'Cómo cultivar borraja para utilizar sus flores como guarnición',
    summary: 'Guía técnica para el cultivo de Borago officinalis, recolección delicada de sus flores estelares azules y clarificación científica sobre la seguridad y consumo responsable.',
    categorySlug: 'identificacion-botanica-y-seguridad',
    scientificName: 'Borago officinalis L.',
    image: '/assets/images/borraja-guarnicion.jpg',
    altText: 'Flor estelar azul de borraja con gotas de agua y cáliz velloso en primer plano sobre fondo oscuro',
    author: 'Andres Martinez',
    authorRole: 'Responsable editorial y divulgador botánico',
    publishDate: '21 de octubre de 2026',
    readTimeMinutes: 8,
    featured: false,
    intro: [
      'Con su inconfundible forma de estrella de cinco puntas y su deslumbrante color azul cielo o cobalto, la flor de borraja (Borago officinalis) es uno de los adornos botánicos más célebres de la mixología clásica y la cocina mediterránea. Su perfil gustativo es legendario: al masticarse, la flor libera una frescura crujiente idéntica al pepino maduro, lo que la convierte en el acompañante natural histórico de bebidas como el Pimm’s Cup, cócteles con ginebra botánica o consomés veraniegos.',
      'Sin embargo, la borraja es una planta que exige un rigor científico absoluto respecto a su seguridad alimentaria. Determinadas partes vegetativas de la planta contienen trazas de alcaloides pirrolizidínicos (PA), compuestos que exigen cautela y conocimiento preciso por parte del profesional gastronómico.',
      'En este artículo abordamos cómo cultivarla fácilmente, cómo desprender únicamente las corolas florales limpias de cálices erizados y qué pautas de seguridad rigen su consumo responsable.'
    ],
    sections: [
      {
        id: 'botanica-y-polinizadores',
        title: '1. Perfil botánico y valor para el agroecosistema',
        content: [
          'Borago officinalis es una herbácea anual robusta de la familia Boraginaceae, originaria de la cuenca mediterránea. La planta completa está recubierta por pelos rígidos y erizados (tricomas) que pueden resultar ásperos al tacto.',
          'Sus flores péndulas nacen en cimas escorpioides. Poseen cinco pétalos lanceolados unidos en la base que forman una estrella simétrica, con anteras cónicas oscuras muy prominentes en el centro. Es una de las mejores plantas melíferas del planeta: sus flores producen néctar continuo y atraen intensamente a abejas y abejorros polinizadores.'
        ]
      },
      {
        id: 'cultivo-suelo-siembra',
        title: '2. Condiciones de cultivo, siembra y espaciado',
        content: [
          'La borraja es sumamente vigorosa y tolera suelos pobres, pero rinde con mayor ternura en tierras fértiles, profundas y bien provistas de compost.',
          'La siembra se realiza por siembra directa a principios de primavera (o en otoño en regiones de inviernos benignos). La borraja no tolera bien el trasplante debido a su raíz pivotante gruesa. Entierra las semillas negras a 1,5 cm de profundidad.',
          'Dado que una planta madura de borraja puede superar los 60 cm de altura y un porte rastrero similar de envergadura, deja al menos 40 a 50 cm de separación entre plantas. En macetas, requiere al menos 15 litros de sustrato por ejemplar.'
        ]
      },
      {
        id: 'recoleccion-corola',
        title: '3. Técnica de recolección de la corola estelar',
        content: [
          'La recolección de las flores de borraja requiere una técnica manual precisa para evitar que los pelos híspidos del cáliz y tallo lleguen a la boca del comensal.',
          'Técnica del pellizco suave: sujeta suavemente la punta de las anteras negras centrales entre el pulgar y el índice, tirando hacia afuera en línea recta. La corola azul se desprenderá intacta del cáliz verde espinoso con un ligero "clic", quedando limpia, suave y lista para el consumo sin ningún pelo molesto.'
        ]
      },
      {
        id: 'seguridad-alcaloides',
        title: '4. Clarificación rigurosa sobre alcaloides pirrolizidínicos (PA)',
        content: [
          'Como publicación responsable, en Garnish Botánico no ocultamos la realidad toxicológica: la borraja contiene alcaloides pirrolizidínicos (como la licopsamina y la amabilina), conocidos por su potencial hepatotóxico cuando se consumen en cantidades farmacológicas prolongadas.',
          'Estudios científicos han demostrado que la concentración de estos alcaloides se concentra principalmente en las raíces, tallos viejos y semillas. En las corolas florales desprovistas de cáliz, la presencia es mínima o prácticamente vestigial en los volúmenes utilizados como guarnición.',
          'Regla de oro: utiliza las flores de borraja exclusivamente como guarnición puntual (1 a 3 flores por cóctel o plato). No prepares infusiones concentradas continuadas de hojas viejas y desaconseja su consumo regular a mujeres embarazadas, en período de lactancia o personas con insuficiencia hepática diagnosticada.'
        ]
      },
      {
        id: 'aplicaciones-cocteleria',
        title: '5. Usos en coctelería y alta cocina',
        content: [
          'La borraja es la reina de las flores congeladas: su estructura estelar compacta y su vibrante pigmentación azul la convierten en la opción número uno para elaborar cubitos de hielo cristalinos de gran formato para destilados premium.',
          'En coctelería sin hielo, flota con elegancia sobre sours de pisco o cócteles con ginebra london dry, aportando un aroma limpio que evoca la brisa marina y el pepino fresco. En cocina salada, es perfecta sobre sopas frías (gazpacho verde, ajoblanco) y ostras frescas.'
        ]
      }
    ],
    safetyWarnings: [
      'Retira siempre el cáliz verde velloso antes de servir; consume únicamente la corola azul suave.',
      'Uso como guarnición moderada; no consumir en grandes ensaladas como verdura base ni en infusiones diarias prolongadas.',
      'Contraindicada en mujeres embarazadas, lactantes y personas con patologías hepáticas.'
    ],
    faqs: [
      {
        question: '¿Existen flores de borraja blancas?',
        answer: 'Sí, existe la variedad Borago officinalis var. alba, que produce flores idénticas de color blanco inmaculado. Comparten el mismo sabor a pepino y son extraordinarias para cócteles minimalistas.'
      },
      {
        question: '¿Las flores de borraja cambian de color al contacto con ácidos?',
        answer: 'Sí. Los pigmentos de la borraja (antocianinas) reaccionan al pH: al entrar en contacto con zumo de limón o vinagre, pueden virar gradualmente del azul brillante hacia un tono rosa púrpura.'
      }
    ],
    references: [
      {
        citation: 'Bundesinstitut für Risikobewertung (BfR - Instituto Alemán de Evaluación de Riesgos)',
        source: 'Pyrrolizidine alkaloids in foods and edible flowers assessment',
        year: '2022'
      },
      {
        citation: 'Royal Botanic Gardens, Kew',
        source: 'Plants of the World Online: Borago officinalis L.',
        year: '2024'
      }
    ],
    relatedSlugs: [
      'como-preparar-cubitos-de-hielo-con-flores-comestibles',
      'como-elegir-flores-comestibles-para-cocteles',
      'como-cosechar-y-conservar-flores-comestibles'
    ]
  },
  {
    slug: 'como-cosechar-y-conservar-flores-comestibles',
    title: 'Cómo cosechar y conservar flores comestibles de forma segura',
    summary: 'Procedencia segura, higiene de herramientas, hora idónea de corte, refrigeración a 4 °C y señales biológicas de deterioro para evitar riesgos alimentarios.',
    categorySlug: 'cosecha-y-conservacion',
    image: '/assets/images/cosecha-conservacion.jpg',
    altText: 'Flores comestibles recién cosechadas dispuestas sobre paño de lino con tijeras de poda de precisión',
    author: 'Andres Martinez',
    authorRole: 'Responsable editorial y divulgador botánico',
    publishDate: '20 de octubre de 2026',
    readTimeMinutes: 7,
    featured: false,
    intro: [
      'El aprovechamiento culinario de las flores comestibles exige un protocolo de higiene y conservación tan exigente como el de cualquier producto fresco de alta gama. Una flor es un órgano vegetal efímero compuesto mayoritariamente por agua (entre un 85% y un 95%), con tejidos extremadamente delicados y una epidermis sensible al roce mecánico, a la deshidratación ambiental y a la proliferación bacteriana.',
      'Saber en qué momento exacto de la jornada realizar el corte, qué precauciones de asepsia adoptar y cómo acondicionar los recipientes de almacenamiento frigorífico marca la diferencia entre una guarnición reluciente y una flor marchita, parda o potencialmente riesgosa.',
      'En este artículo compilamos las mejores prácticas de cosecha y poscosecha avaladas por directrices de seguridad alimentaria.'
    ],
    sections: [
      {
        id: 'procedencia-y-contaminacion',
        title: '1. Procedencia de las flores y riesgos ambientales',
        content: [
          'La regla preliminar e innegociable de la botánica gastronómica es: jamás coseches flores silvestres al borde de carreteras con tráfico rodado, zonas de paseo canino, parques urbanos fumigados o márgenes de campos agrícolas sometidos a pulverizaciones químicas convencionales.',
          'Los metales pesados procedentes de la combustión y los residuos de herbicidas se depositan sobre la superficie de los pétalos y no se eliminan con un simple enjuague con agua. La única procedencia admisible es el autocultivo ecológico controlado o productores hortícolas certificados para consumo humano.'
        ]
      },
      {
        id: 'higiene-y-herramientas',
        title: '2. Higiene de manos y desinfección del instrumental',
        content: [
          'Antes de iniciar la cosecha, realiza un lavado exhaustivo de manos con agua tibia y jabón neutro durante un mínimo de 40 segundos.',
          'Las herramientas de corte (tijeras de floristería de hojas afiladas, bisturís botánicos o podaderas de precisión) deben desinfectarse sumergiendo las hojas en alcohol isopropílico al 70% o una solución de agua con lejía de uso alimentario diluida al 2%, secándolas posteriormente con papel desechable. Un corte limpio y afilado cicatriza de inmediato el peciolo sin aplastar los vasos conductores de xilema.'
        ]
      },
      {
        id: 'momento-de-cosecha',
        title: '3. El momento y hora idónea de la jornada',
        content: [
          'El mejor momento para cosechar flores comestibles es a primera hora de la mañana, justo cuando las corolas se han abierto y el rocío natural de la noche se ha disipado, pero antes de que los rayos solares del mediodía eleven la temperatura ambiental.',
          'Durante estas horas tempranas, los tejidos vegetales retienen su máxima turgencia de hidratación interna y la concentración de azúcares y aromas es óptima. Evita rigurosamente cosechar bajo lluvia intensa (las flores se encharcan y se apelmazan) o durante las horas de calor abrasador (las flores sufren estrés hídrico y se mustian en minutos).'
        ]
      },
      {
        id: 'metodos-de-almacenamiento',
        title: '4. Técnicas de almacenamiento en frío (4 °C a 6 °C)',
        content: [
          'Para conservar flores frescas enteras (como violas, capuchinas o borrajas):',
          '1. Utiliza recipientes plásticos o de vidrio rígidos y herméticos, de poca profundidad para que las flores no queden apiladas en múltiples capas.',
          '2. Coloca en el fondo una hoja de papel absorbente de cocina humedecida muy sutilmente con agua purificada (el papel debe estar fresco al tacto, nunca goteando).',
          '3. Coloca las flores en una sola capa con el cáliz hacia abajo y los pétalos hacia arriba, sin que se toquen entre sí.',
          '4. Coloca una segunda capa de papel absorbente seco en la parte superior para amortiguar cualquier condensación y cierra herméticamente el envase.',
          '5. Mantén en la parte menos fría del frigorífico (cajón de verduras, entre 4 °C y 6 °C). No permitas que la temperatura descienda de 1 °C, ya que las flores sufrirían daño por congelación celular.'
        ]
      },
      {
        id: 'senales-deterioro',
        title: '5. Señales biológicas de deterioro y límites reales',
        content: [
          'No existen plazos universales de conservación: la vida útil poscosecha varía radicalmente según la especie. Las violas y capuchinas bien conservadas resisten entre 4 y 7 días; las borrajas deben utilizarse preferentemente en las primeras 48 horas tras la cosecha.',
          'Descarta de inmediato cualquier flor que presente: decoloración pardusca en los bordes de los pétalos, textura viscosa al tacto, aroma avinagrado o fermentado, o presencia de filamentos blanquecinos de moho. Nunca intente "rescatar" una flor visiblemente en mal estado recortando la parte dañada.'
        ]
      }
    ],
    safetyWarnings: [
      'No recolectes flores en arcenes de carreteras ni parques públicos tratados con químicos.',
      'El lavado por inmersión violenta en agua daña los pétalos y acelera la putrefacción; límpialas suavemente con un pincel suave.',
      'Almacena siempre en refrigeración continua a 4-6 °C y desecha ejemplares deteriorados.'
    ],
    faqs: [
      {
        question: '¿Se deben desinfectar las flores con lejía alimentaria?',
        answer: 'No es recomendable sumergir flores comestibles delicadas en soluciones con desinfectantes clorados, ya que los pétalos absorben el cloro, pierden textura al instante y adquieren sabor residual químico. La seguridad se basa en cosechar flores limpias de cultivos ecológicos con herramientas higiénicas.'
      },
      {
        question: '¿Qué hacer si encuentro pequeños insectos en la flor?',
        answer: 'Retira con suavidad los insectos utilizando un pincel de cerdas muy suaves o soplando delicadamente sobre el cáliz. Evita aplastarlos contra los pétalos.'
      }
    ],
    references: [
      {
        citation: 'FAO / WHO Codex Alimentarius',
        source: 'General Principles of Food Hygiene (CXC 1-1969)',
        year: '2022'
      },
      {
        citation: 'University of Florida IFAS Extension',
        source: 'Postharvest Handling and Safety of Edible Flowers',
        year: '2023'
      }
    ],
    relatedSlugs: [
      'como-cultivar-capuchinas-comestibles',
      'como-preparar-cubitos-de-hielo-con-flores-comestibles',
      'como-crear-un-huerto-de-flores-comestibles-en-cocina'
    ]
  },
  {
    slug: 'como-preparar-cubitos-de-hielo-con-flores-comestibles',
    title: 'Cómo preparar cubitos de hielo transparentes con flores comestibles',
    summary: 'La técnica de congelación direccional explicada paso a paso para suspender flores comestibles sin turbidez, logrando cubos de hielo de cristal óptico para coctelería.',
    categorySlug: 'cocteleria-y-alta-cocina',
    image: '/assets/images/cubitos-hielo-flores.jpg',
    altText: 'Grandes cubos de hielo transparente artesanal con flores comestibles suspendidas sobre superficie de mármol',
    author: 'Andres Martinez',
    authorRole: 'Responsable editorial y divulgador botánico',
    publishDate: '19 de octubre de 2026',
    readTimeMinutes: 7,
    featured: false,
    intro: [
      'El cubito de hielo floral transparente es la cumbre de la estética botánica en la coctelería contemporánea. Observar una flor de viola o una estrella de borraja flotando aparentemente suspendida en el aire dentro de un bloque cúbico de agua totalmente cristalina y libre de burbujas blancas cautiva a cualquier comensal.',
      'Sin embargo, cuando la mayoría de aficionados intenta congelar flores en moldes convencionales en el congelador doméstico, el resultado suele ser decepcionante: un hielo blanquecino, turbio, agrietado y con las flores aplastadas o descoloridas en los bordes. Esto ocurre debido a las leyes físicas de la congelación omnidireccional y al aire disuelto en el agua.',
      'En este artículo desvelamos la física de la congelación direccional, la selección adecuada de flores resistentes y las pautas higiénicas ineludibles para crear cubos de hielo cristalinos de alta cocina.'
    ],
    sections: [
      {
        id: 'fisica-hielo-cristalino',
        title: '1. Por qué el hielo común es turbio y cómo funciona la congelación direccional',
        content: [
          'En un molde tradicional de silicona, el agua se congela de afuera hacia adentro simultáneamente desde las seis caras del cubo. A medida que el agua se convierte en hielo puro, empuja las impurezas minerales y las microburbujas de oxígeno disuelto hacia el centro geométrico del cubo, donde quedan atrapadas formando esa molesta nube blanca y opaca.',
          'La congelación direccional fuerza al agua a congelarse en un solo sentido (habitualmente de arriba hacia abajo), emulando cómo se congela un lago natural en invierno. Así, el frente de congelación avanza empujando el aire y las sales minerales hacia el fondo, permitiendo que el 75% superior del cubo sea cristal puro y transparente.'
        ]
      },
      {
        id: 'flores-aptas-congelacion',
        title: '2. Selección de flores comestibles idóneas para congelar',
        content: [
          'No todas las flores resisten la expansión volumétrica del agua al congelarse. Las mejores especies son aquellas con corolas compactas y pigmentos resistentes:',
          '• Borraja (Borago officinalis): La número uno absoluta; sus flores estelares conservan su azul vivo intacto y no se deforman.',
          '• Violas y pensamientos mini (Viola cornuta / tricolor): Sus tonalidades moradas y amarillas generan contrastes espectaculares.',
          '• Pétalos aislados de caléndula (Calendula officinalis): Flotan como hebras doradas dentro del cubo.',
          '• Flores de romero o tomillo: Aportan aromas resinosos sutiles a medida que el hielo diluye lentamente en la copa.'
        ],
        callout: {
          type: 'warning',
          title: 'Advertencia científica sobre la congelación',
          text: 'Congelar una flor NO elimina pesticidas, metales pesados ni toxinas biológicas. Utiliza única y exclusivamente flores cultivadas para consumo humano bajo estrictas prácticas agroecológicas.'
        }
      },
      {
        id: 'guia-paso-a-paso',
        title: '3. Método paso a paso para cubos cristalinos con flor centrada',
        content: [
          'Para lograr que la flor quede perfectamente centrada en el cubo y no flote en la superficie, se emplea el método de congelación en dos fases con aislamiento térmico:'
        ],
        steps: [
          {
            number: 1,
            title: 'Agua de baja mineralización',
            description: 'Utiliza agua filtrada por ósmosis inversa o agua mineral de mineralización muy débil. Hervir el agua previamente ayuda a reducir el oxígeno disuelto.',
          },
          {
            number: 2,
            title: 'Primera capa de fijación (1/3 del molde)',
            description: 'Vierte agua hasta un tercio de la altura de un molde de silicona para cubos grandes (mínimo 5x5 cm). Coloca la flor boca abajo en el agua y lleva el molde al congelador durante 90 a 120 minutos hasta que la superficie se solidifique parcialmente, fijando la flor en su posición.',
            tip: 'No dejes que se congele por completo en esta fase para evitar una línea de unión visible entre estratos.'
          },
          {
            number: 3,
            title: 'Segunda capa de llenado en nevera portátil abierta',
            description: 'Rellena el resto del molde con agua muy fría. Coloca el molde dentro de una pequeña nevera de camping aislada (cooler) con la tapa retirada. El aislamiento de las paredes y el fondo fuerza al frío a entrar únicamente por arriba (congelación direccional pura).',
          },
          {
            number: 4,
            title: 'Congelación y desmoldeado',
            description: 'Congela durante 18 a 24 horas a -14 °C. Retira el bloque, deja temperar durante 5 minutos a temperatura ambiente para evitar que el hielo se fracture por choque térmico y desmolda suavemente.',
          }
        ]
      },
      {
        id: 'manipulacion-servicio',
        title: '4. Almacenamiento higiénico y servicio en coctelería',
        content: [
          'Guarda los cubos terminados en bolsas de silicona alimentaria con cierre hermético dentro del congelador para evitar que absorban olores de otros alimentos.',
          'Al momento de servir en la copa, deposita el cubo con una pinza de hielo de puntas suaves. Vierte el cóctel lentamente por el lateral de la copa para no generar choque térmico violento que fracture el cristal del hielo. El hielo transparente de gran formato tiene una velocidad de dilución extraordinariamente lenta, manteniendo la bebida fría sin aguarla prematuramente.'
        ]
      }
    ],
    safetyWarnings: [
      'La congelación no esteriliza ni neutraliza fitosanitarios o microorganismos esporulados.',
      'Utiliza moldes de silicona de grado alimentario certificados libres de BPA.',
      'Mantén los cubos almacenados en bolsas herméticas aislados de carnes, pescados o alimentos no envasados.'
    ],
    faqs: [
      {
        question: '¿Por qué mi hielo se parte cuando le vierto la bebida encima?',
        answer: 'Se debe al choque térmico. Cuando el hielo recién salido a -18 °C entra en contacto con líquido a 20 °C, la dilatación súbita de la superficie externa genera fisuras acústicas. Deja temperar el cubo 2 o 3 minutos hasta que su superficie se vuelva brillante antes de servir el cóctel.'
      },
      {
        question: '¿Puedo usar flores de capuchina en cubitos de hielo?',
        answer: 'Sí, pero ten en cuenta que son flores huecas y ligeras que tienden a atrapar una burbuja de aire en su espolón. Sumerge la flor boca arriba y agita suavemente en agua antes de congelar para liberar el aire retenido.'
      }
    ],
    references: [
      {
        citation: 'Arnold, Dave',
        source: 'Liquid Intelligence: The Art and Science of the Perfect Cocktail',
        year: '2014'
      },
      {
        citation: 'International Association for Food Protection (IAFP)',
        source: 'Microbial Safety and Quality of Commercial and Artisanal Ice in Food Service',
        year: '2023'
      }
    ],
    relatedSlugs: [
      'como-cultivar-borraja-para-guarnicion',
      'como-elegir-flores-comestibles-para-cocteles',
      'como-cosechar-y-conservar-flores-comestibles'
    ]
  },
  {
    slug: 'como-elegir-flores-comestibles-para-cocteles',
    title: 'Cómo elegir flores comestibles para cócteles: color, sabor y forma',
    summary: 'Criterios profesionales para seleccionar flores en mixología: maridaje organoléptico, contrastes visuales, técnicas de sujeción no invasivas y seguridad botánica.',
    categorySlug: 'cocteleria-y-alta-cocina',
    image: '/assets/images/flores-cocteles-guarnicion.jpg',
    altText: 'Cóctel sofisticado en copa coupette decorado con flor de borraja y pétalos en barra elegante',
    author: 'Andres Martinez',
    authorRole: 'Responsable editorial y divulgador botánico',
    publishDate: '18 de octubre de 2026',
    readTimeMinutes: 8,
    featured: false,
    intro: [
      'En la coctelería contemporánea, la guarnición ha dejado de ser un mero añadido cosmético para convertirse en una extensión aromática, visual y conceptual del trago. Incorporar flores comestibles en un cóctel no consiste en depositar cualquier pétalo al azar sobre la espuma, sino en comprender la armonía entre el perfil sápido del destilado, el volumen de la cristalería y las propiedades físicas de la flor.',
      'Una flor mal elegida puede amargar un cóctel sutil, desprender polen no deseado, humedecerse hasta parecer un residuo flácido o estorbar físicamente los labios del cliente en cada sorbo. Por el contrario, una elección botánica meditada eleva la degustación a una experiencia multisensorial memorable.',
      'En este manual editorial exploramos los parámetros técnicos para seleccionar con acierto el color, la forma, la textura y el sabor de las flores comestibles en la barra.'
    ],
    sections: [
      {
        id: 'rueda-sabores-botanicos',
        title: '1. Perfiles sápidos documentados: maridaje con destilados',
        content: [
          'Cada flor comestible presenta una firma química propia que interactúa con el alcohol y los ácidos del cóctel:',
          '• Capuchina (Tropaeolum majus): Perfil especiado, apimentado y pungente. Marida de manera soberbia con destilados de agave (mezcal joven, tequila blanco), ginebras secas con enebro marcado y cócteles salinos como el Dirty Martini o el Red Snapper.',
          '• Borraja (Borago officinalis): Perfil fresco, crujiente y mineral que evoca pepino y melón verde. Maridaje insuperable con vodka neutro, vermuts secos y cócteles largos gasificados.',
          '• Viola y Pensamiento (Viola spp.): Perfil sutilmente herbáceo y dulce con una ligera nota de té verde. Ideal para cócteles afrutados, sours con clara de huevo o aquafaba, champán y cócteles florales con licor de saúco.',
          '• Caléndula (Calendula officinalis): Perfil amargo suave, terroso y cálido. Combina con whiskies de malta, cócteles con amaro italiano y ponches tibios.'
        ]
      },
      {
        id: 'teoria-del-color',
        title: '2. Teoría del color y contraste visual en copa',
        content: [
          'El contraste cromático debe dialogar con el tono del líquido y la transparencia de la copa:',
          '• Cócteles oscuros o ambarinos (Old Fashioned, Manhattan, Negroni): Emplea flores de tonos vivos como el amarillo de caléndula o el naranja brillante de capuchina para generar un punto focal que no se pierda en la densidad del licor.',
          '• Cócteles pálidos o cristalinos (Dry Martini, Gimlet, Gin Tonic): Las flores azules de borraja o las violas violetas profundas generan un contraste de alto impacto sobre el fondo diáfano.',
          '• Cócteles con espuma densa (Pisco Sour, Clover Club, Ramos Gin Fizz): La espuma actúa como lienzo blanco puro. Las violas planas tricolores flotan impecables sobre la corona proteica sin hundirse.'
        ]
      },
      {
        id: 'tecnicas-de-montaje',
        title: '3. Técnicas de montaje y respeto al comensal',
        content: [
          'Una guarnición botánica jamás debe interrumpir la comodidad del trago:',
          '1. Flotabilidad libre: Adecuada para flores muy ligeras (borraja desprovista de tallo, pequeñas violas). Se colocan con pinzas en el centro de la copa justo antes de servir.',
          '2. Sujeción al borde con mini-pinza de madera: Permite que el cliente decida si desea retirar la flor o mantenerla en la copa, asegurando que no se mueva hacia la boca al inclinar el cristal.',
          '3. Hielo floral integrado: La opción más higiénica y ergonómica, ya que la flor permanece inmóvil y confinada en el hielo durante toda la degustación.'
        ]
      },
      {
        id: 'errores-frecuentes',
        title: '4. Errores habituales en mixología botánica',
        content: [
          '• Usar flores demasiado grandes que cubren toda la superficie de la copa y obligan al comensal a apartarlas con los dedos.',
          '• Dejar pedúnculos largos y rugosos que rozan la nariz del cliente desprendiendo olores ásperos.',
          '• No avisar de la presencia de polen en clientes con rinitis alérgica estacional severa.',
          '• Colocar flores delicadas sobre bebidas a temperatura ambiente con alta graduación alcohólica directa, lo que "cuece" el tejido vegetal en pocos minutos volviéndolo translúcido y oscuro.'
        ]
      }
    ],
    safetyWarnings: [
      'Informa siempre al comensal de que la flor es auténticamente comestible y especifica su nombre botánico en la carta.',
      'Verifica que el personal de barra utilice pinzas limpias exclusivas para guarniciones botánicas.',
      'Nunca reutilices flores que hayan vuelto de mesas en la vajilla.'
    ],
    faqs: [
      {
        question: '¿Las flores cambian el aroma principal del destilado?',
        answer: 'Las flores frescas enteras aportan un aroma sutil y limpio que complementa sin enmascarar los aceites esenciales del destilado, siempre que no se hayan machacado en el vaso mezclador.'
      },
      {
        question: '¿Cómo mantener las flores frescas durante un turno de servicio de 6 horas en barra?',
        answer: 'Mantén las flores en una pequeña bandeja de metal con papel absorbente húmedo colocada sobre una cubeta con hielo frappé en la estación de coctelería, protegidas con una tapa transparente para evitar corrientes de aire secas.'
      }
    ],
    references: [
      {
        citation: 'Difford’s Guide for Discerning Drinkers',
        source: 'Garnishes: The Art, Technique and Chemistry of Cocktail Presentation',
        year: '2024'
      },
      {
        citation: 'Journal of Culinary Science & Technology',
        source: 'Sensory properties and consumer perception of botanical garnishes in craft mixology',
        year: '2021'
      }
    ],
    relatedSlugs: [
      'como-preparar-cubitos-de-hielo-con-flores-comestibles',
      'como-cultivar-violas-para-cocteles-y-alta-cocina',
      'como-cosechar-y-conservar-flores-comestibles'
    ]
  },
  {
    slug: 'como-crear-un-huerto-de-flores-comestibles-en-cocina',
    title: 'Cómo crear un pequeño jardín de flores comestibles para una cocina gastronómica',
    summary: 'Planificación espacial, calendario de siembras escalonadas, control biológico de plagas e higiene para asegurar un suministro continuo de flores frescas en espacios reducidos.',
    categorySlug: 'cultivo-de-flores-comestibles',
    image: '/assets/images/huerto-flores-comestibles.jpg',
    altText: 'Huerto de cocina con bancal de madera y macetas de terracota con flores comestibles en terraza soleada',
    author: 'Andres Martinez',
    authorRole: 'Responsable editorial y divulgador botánico',
    publishDate: '17 de octubre de 2026',
    readTimeMinutes: 9,
    featured: false,
    intro: [
      'Disponer de flores comestibles recién cosechadas a escasos metros de la mesa de preparación es un privilegio transformador para cualquier cocinero o bartender apasionado. La inmediatez entre el corte de la flor y su servicio en el plato garantiza una turgencia celular, un brillo cromático y una pureza aromática que el transporte frigorífico de larga distancia nunca puede igualar.',
      'Sin embargo, diseñar un huerto floral para uso gastronómico requiere una mentalidad metódica: no se trata de plantar indiscriminadamente, sino de seleccionar especies con requerimientos de luz compatibles, calendarizar siembras escalonadas para evitar vacíos productivos y garantizar la máxima bioseguridad alimentaria.',
      'En esta guía abordamos cómo estructurar un microhuerto floral en terrazas, balcones o pequeños bancales de cocina, asumiendo con realismo sus rendimientos y limitaciones.'
    ],
    sections: [
      {
        id: 'planificacion-espacio',
        title: '1. Planificación del espacio y selección de especies compatibles',
        content: [
          'En un espacio acotado (de 2 a 6 metros cuadrados), la selección debe priorizar especies con ciclos complementarios y alta tasa de floración por unidad de superficie:',
          '• Trío fundamental de cocina: Capuchinas (Tropaeolum majus nanum, porte compacto), Violas (Viola cornuta) y Caléndulas (Calendula officinalis). Juntas cubren una gama cromática completa (azul, morado, amarillo, naranja y rojo) y una diversidad gustativa que va de lo dulce a lo picante.',
          '• Aromáticas de flor comestible: Romero (flores violetas resinosas), Tomillo y Cebollino (flores globulares moradas con delicioso sabor a chalota tierna).'
        ]
      },
      {
        id: 'contenedores-y-sustrato',
        title: '2. Macetas, bancales elevados y calidad del sustrato',
        content: [
          'Los bancales elevados de madera tratada térmicamente (sin químicos tóxicos de autoclave) de 30 a 40 cm de profundidad son la solución óptima para terrazas. Si se utilizan macetas, prefiere terracota no esmaltada o geotextiles transpirables, que favorecen la oxigenación radicular y evitan el recalentamiento en verano.',
          'Prepara un sustrato vivo pero ligero: 50% turba rubia o fibra de coco, 30% compost vegetal maduro certificado y 20% perlita o vermiculita. Añade un puñado de harina de rocas volcánicas para aportar oligoelementos que intensifican los pigmentos antociánicos de las corolas.'
        ]
      },
      {
        id: 'siembras-escalonadas',
        title: '3. Siembras escalonadas y regularidad de suministro',
        content: [
          'Uno de los errores más frecuentes en los huertos de cocina es sembrar todas las semillas en una única fecha: el resultado es una sobreabundancia inabarcable durante tres semanas seguida de meses sin floración alguna.',
          'Estrategia de relevo: realiza siembras escalonadas cada 3 o 4 semanas entre marzo y julio. Mientras la primera tanda está en plena floración, la segunda desarrolla botones florales y la tercera se encuentra en fase de plántula. Esto asegura una cosecha constante de 15 a 30 flores frescas diarias en una pequeña jardinera bien gestionada.'
        ]
      },
      {
        id: 'higiene-y-prevencion',
        title: '4. Higiene operativa y prevención de plagas sin pesticidas',
        content: [
          'En un cultivo gastronómico, el uso de pesticidas de síntesis está estrictamente descartado.',
          '• Manejo preventivo: Mantén una ventilación cruzada constante entre macetas para evitar bolsas de humedad estancada que propicien botritis u oídio.',
          '• Trampas cromáticas amarillas: Colócalas a ras de suelo para monitorizar tempranamente la presencia de mosca blanca o trips antes de que colonicen las flores.',
          '• Purín de ortiga fermentado: Diluido al 5% en agua como bioestimulante foliar sobre hojas en crecimiento (nunca sobre flores abiertas) fortalece las paredes celulares vegetales contra pulgones.'
        ]
      },
      {
        id: 'limitaciones-reales',
        title: '5. Limitaciones de los huertos pequeños: honestidad productiva',
        content: [
          'Como principio rector de Garnish Botánico, debemos ser transparentes: un pequeño huerto doméstico de 3 o 4 macetas no puede abastecer las demandas masivas de un restaurante de 100 comensales diarios. Sirve para cubrir guarniciones exclusivas, eventos especiales, I+D creativo y cartas de temporada.',
          'Reconocer los límites de volumen y la variabilidad climática estacional es el primer paso para una gestión agronómica profesional y sostenible.'
        ]
      }
    ],
    safetyWarnings: [
      'Asegúrate de que los recipientes y bancales no contengan maderas tratadas con arsénico o pinturas con plomo.',
      'Usa exclusivamente agua potable para el riego de tus plantas comestibles.',
      'Aísla el huerto de fuentes de humo, parrillas directas y zonas frecuentadas por mascotas domésticas.'
    ],
    faqs: [
      {
        question: '¿Cuántas horas de sol directo necesita un huerto floral de cocina?',
        answer: 'Un mínimo de 5 a 6 horas de luz solar directa diaria para capuchinas y caléndulas. Las violas pueden prosperar con 4 horas de sol suave matutino y luz difusa el resto del día.'
      },
      {
        question: '¿Se pueden cultivar flores comestibles con luz artificial en interiores?',
        answer: 'Sí, utilizando paneles LED de cultivo de espectro completo (Full Spectrum) a una distancia de 30 cm con un fotoperíodo de 14 a 16 horas diarias, aunque la ventilación y el control de humedad en interiores requieren monitoreo constante.'
      }
    ],
    references: [
      {
        citation: 'University of California Master Gardener Program',
        source: 'Small-Scale Culinary Herb and Edible Flower Production',
        year: '2023'
      },
      {
        citation: 'Jeavons, John',
        source: 'How to Grow More Vegetables: Than You Ever Thought Possible on Less Land Than You Can Imagine',
        year: '2020'
      }
    ],
    relatedSlugs: [
      'como-cultivar-capuchinas-comestibles',
      'como-cultivar-violas-para-cocteles-y-alta-cocina',
      'como-cosechar-y-conservar-flores-comestibles'
    ]
  }
];

export const articles: Article[] = [...baseArticles, ...moreArticles];

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find((art) => art.slug === slug);
};

export const getArticlesByCategory = (categorySlug: string): Article[] => {
  return articles.filter((art) => art.categorySlug === categorySlug);
};

export const getFeaturedArticles = (): Article[] => {
  return articles.filter((art) => art.featured);
};
