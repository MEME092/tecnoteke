import { SeasonalTip } from '../types';

export const seasonalTips: SeasonalTip[] = [
  {
    season: 'Primavera',
    title: 'Despertar vegetativo y siembras principales',
    generalAdvice: 'En zonas templadas del hemisferio correspondiente, la primavera marca el momento ideal para la siembra directa de especies anuales como capuchina, caléndula y borraja tras el cese de las heladas tardías. En regiones subtropicales o tropicales secas, la época de floración puede invertirse o sincronizarse con el régimen de lluvias local.',
    speciesToWatch: ['Capuchinas (Tropaeolum majus)', 'Borraja (Borago officinalis)', 'Caléndula (Calendula officinalis)'],
    harvestNotes: 'Primeras corolas tiernas de violas sembradas en otoño y brotes aromáticos tempranos.'
  },
  {
    season: 'Verano',
    title: 'Gestión del calor, sombreado y riego de precisión',
    generalAdvice: 'Durante los períodos de máxima insolación térmica, las especies de corola fina como las violas sufren estrés hídrico. Proporciona sombra ligera en las horas de sol cenital (12:00 a 16:00) y concentra los riegos en el amanecer. Es época dorada para caléndulas y capuchinas en latitudes medias.',
    speciesToWatch: ['Caléndula en plena floración', 'Capuchinas con desbotonado continuo', 'Flores de albahaca y tomillo'],
    harvestNotes: 'Cosecha a primera hora del amanecer (entre las 7:00 y las 9:00) para evitar que el calor marchite los pétalos antes del servicio.'
  },
  {
    season: 'Otoño',
    title: 'Siembras de ciclo fresco y segunda floración',
    generalAdvice: 'Con el descenso paulatino de las temperaturas y la disminución de la radiación abrasadora, las violas, pensamientos y caléndulas experimentan un rebrote vigoroso. Es la estación clave para sembrar variedades que soportan heladas suaves en climas continentales.',
    speciesToWatch: ['Viola cornuta', 'Pensamientos (Viola tricolor)', 'Flores de romero'],
    harvestNotes: 'Flores compactas con colores muy intensificados por el contraste térmico nocturno.'
  },
  {
    season: 'Invierno',
    title: 'Protección en microclimas e invernadero frío',
    generalAdvice: 'En zonas frías con nevadas recurrentes, la producción al aire libre cesa y se traslada a microtúneles fríos o mesas de cultivo de interior con iluminación auxiliar. En regiones de clima mediterráneo suave o subtropical, el invierno es la temporada reina de las violas y flores de brásicas.',
    speciesToWatch: ['Viola tricolor bajo campana', 'Caléndula en solana protegida', 'Flores de cítricos en interior'],
    harvestNotes: 'Producción reducida pero de excepcional firmeza celular gracias a las bajas temperaturas.'
  }
];
