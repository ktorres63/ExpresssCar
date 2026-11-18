import type { ServiceId } from '../data/services';
import type { VehicleCategory, VehicleId } from '../data/vehicles';

export const locales = ['es', 'en'] as const;

export type Lang = (typeof locales)[number];

export const defaultLang: Lang = 'es';

const es = {
  meta: {
    title: 'G&L CAR EXPRESS | Transporte privado en Arequipa',
    description:
      'Alquiler de vehículos y transporte privado en Arequipa, Perú: traslados al aeropuerto, transporte ejecutivo y corporativo, turismo y grupos.',
  },
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Flota', href: '#flota' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Contacto', href: '#contacto' },
  ],
  enterprice: 'Grupo MACSE E.I.R.L',
  header: {
    skip: 'Saltar al contenido',
    navLabel: 'Principal',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    switchLabel: 'Ver sitio en inglés',
    switchShort: 'EN',
  },
  hero: {
    title: 'Que tu tiempo no se detenga.',
    description:
      'Viaja cómodo y seguro con nuestros choferes calificados, incluidos en todos los servicios. Alquiler de vehículos y transporte privado para viajes locales e interprovinciales, servicios para empresas, grupos y particulares. Traslados al aeropuerto y otros destinos. ¡Reserva tu servicio hoy mismo!',
    cta: 'Solicitar cotización',
    note: 'Cuéntanos qué necesitas. Nuestro equipo revisará tu pedido y te contactará para dejar tu servicio listo.',
  },
  fleet: {
    kicker: 'Flota',
    title: 'Vehículos para cada tipo de viaje',
    intro: 'Parte de nuestras unidades full equipo',
    note: 'Las fichas técnicas, la disponibilidad y las tarifas se confirman al revisar tu solicitud de cotización.',
    categories: { suv: 'SUV', van: 'Van' } satisfies Record<VehicleCategory, string>,
    service: 'Transporte privado',
    alt: {
      'ford-territory': 'Ford Territory gris claro en un paisaje desértico',
      'nissan-urvan': 'Nissan Urvan blanca frente a un concesionario',
      'toyota-rav4': 'Toyota RAV4 gris circulando por una avenida',
      'toyota-yaris-cross': 'Toyota Yaris Cross plateado estacionado frente a un edificio',
    } satisfies Record<VehicleId, string>,
  },
  services: {
    kicker: 'Servicios',
    title: 'Transporte privado para cada necesidad',
    imageAlt:
      'Pasajero trabajando con una laptop y hablando por teléfono en el asiento trasero de un vehículo',
    items: {
      ejecutivo: {
        title: 'Transporte ejecutivo y corporativo',
        description:
          'Traslados para ejecutivos, reuniones y viajes de trabajo, coordinados con anticipación.',
      },
      alquiler: {
        title: 'Alquila tu vehículo, con chofer incluido',
        description:
          'Muévete con comodidad y sin preocuparte por manejar. Indícanos las fechas y el tipo de vehículo, y nuestro chofer calificado se encarga del resto.',
      },
      aeropuerto: {
        title: 'Traslados al aeropuerto',
        description:
          'Traslados desde y hacia el aeropuerto con chofer calificado, en el horario y punto que acordemos. Extiende el servicio según lo necesites.',
      },
      turistico: {
        title: 'Transporte turístico',
        description:
          'Descubre Arequipa y más destinos con transporte privado y chofer calificado, según tu itinerario.',
      },
    } satisfies Record<ServiceId, { title: string; description: string }>,
  },
  why: {
    kicker: 'Nosotros',
    title: '¿Por qué elegir G&L CAR EXPRESS?',
    description:
      'Somos la empresa con los más altos estándares de calidad en la región Arequipa. Te ofrecemos unidades de primer nivel, cómodas y de excelente rendimiento, con todo incluido y un equipo capacitado que te acompaña y te guía para que tengas la mejor experiencia en tu estadía o misión.',
    items: [
      {
        title: 'Atención personalizada',
        description:
          'Adaptamos el servicio a tus necesidades: tipo de vehículo, número de pasajeros, horarios y recorrido.',
      },
      {
        title: 'Coordinación con anticipación',
        description:
          'Validamos cada detalle con anticipación: fecha, vehículo y chofer calificado, para que solo te preocupes por disfrutar.',
      },
      {
        title: 'Conductores profesionales',
        description:
          'Choferes expertos en rutas locales e interprovinciales, para que viajes con seguridad y sin contratiempos.',
      },
      {
        title: 'Vehículos de máximo desempeño',
        description:
          'Unidades de primer nivel, cómodas y bien equipadas, con la potencia y confiabilidad que tu viaje merece. Unidades no rotuladas.',
      },
    ],
  },
  arequipa: {
    title: 'Elige cómo quieres moverte',
    description:
      'Si visitas Arequipa por turismo, negocios o un evento, podemos organizar tu transporte privado. Coordinamos el servicio según las fechas y el itinerario que acuerdes con nosotros.',
    cta: 'Solicitar cotización',
    imageAlt: 'Mapa de la región Arequipa con sus principales localidades',
    placeholder: 'Fotografía de Arequipa pendiente (material con licencia o del cliente)',
  },
  how: {
    kicker: 'Proceso',
    title: '¿Cómo funciona?',
    imageAlt: 'Vehículos alineados en un estacionamiento, entre ellos SUVs y una minivan',
    carouselLabel: 'Pasos para solicitar una cotización',
    carouselRole: 'carrusel',
    stepRole: 'paso',
    stepLabel: (step: number, total: number) => `Paso ${step} de ${total}`,
    prev: 'Paso anterior',
    next: 'Paso siguiente',
    noteLabel: 'Importante',
    note: 'enviar una solicitud no es lo mismo que confirmar una reserva. La reserva se confirma cuando G&L CAR EXPRESS verifica la disponibilidad y te contacta.',
    steps: [
      {
        title: 'Explora los servicios',
        description:
          'Revisa los servicios y la flota disponibles según el tipo de viaje que necesitas.',
      },
      {
        title: 'Solicita tu cotización',
        description: 'Contáctanos por WhatsApp, teléfono o correo con los datos de tu viaje.',
      },
      {
        title: 'Revisamos tu solicitud',
        description: 'Verificamos el servicio, la fecha y la disponibilidad.',
      },
      {
        title: 'Confirmamos los detalles',
        description:
          'Te contactamos para confirmar el servicio. La reserva solo queda confirmada después de ese paso.',
      },
    ],
  },
  contact: {
    kicker: 'Contacto',
    title: 'Solicita tu cotización',
    description:
      'Escríbenos o llámanos con los datos de tu viaje. Revisaremos tu solicitud y te contactaremos para confirmar disponibilidad y detalles. Tu solicitud no equivale a una reserva confirmada.',
    includeTitle: 'Incluye en tu mensaje',
    details: [
      'Tipo de servicio que necesitas',
      'Fecha y hora del servicio',
      'Origen y destino, si aplica',
      'Número de pasajeros',
    ],
    cta: 'Solicitar cotización',
    whatsappNote: 'Se abrirá WhatsApp con un mensaje listo para enviar.',
    whatsappPending: '[Número de WhatsApp pendiente de confirmar]',
    whatsappMessage: 'Hola, quisiera solicitar una cotización de transporte.',
    whatsappFab: 'Escríbenos por WhatsApp',
    channels: {
      whatsapp: { label: 'WhatsApp', pending: 'Número de WhatsApp pendiente de confirmar' },
      phone: { label: 'Teléfono', pending: 'Número pendiente de confirmar' },
      email: { label: 'Correo', pending: 'Correo pendiente de confirmar' },
    },
  },
  footer: {
    slogan: 'Que tu tiempo no se detenga, te movilizamos a tu medida.',
    navLabel: 'Pie de página',
    rights: (year: number) => `© ${year} G&L CAR EXPRESS. Todos los derechos reservados.`,
  },
};

const en = {
  meta: {
    title: 'G&L CAR EXPRESS | Private transport in Arequipa',
    description:
      'Vehicle rental and private transport in Arequipa, Peru: airport transfers, executive and corporate transport, tourism and groups.',
  },
  nav: [
    { label: 'Home', href: '#inicio' },
    { label: 'Fleet', href: '#flota' },
    { label: 'Services', href: '#servicios' },
    { label: 'About', href: '#nosotros' },
    { label: 'Contact', href: '#contacto' },
  ],
  enterprice: 'Grupo MACSE E.I.R.L',
  header: {
    skip: 'Skip to content',
    navLabel: 'Main',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    switchLabel: 'View site in Spanish',
    switchShort: 'ES',
  },
  hero: {
    title: 'So your time doesn\'t stop.',
    description:
      'Travel comfortably and safely with our qualified drivers, included in all our services. We offer vehicle rentals and private transportation for local and interprovincial trips, corporate services, and transportation for groups and individuals. Airport transfers and transportation to other destinations. Book your service today!',
    cta: 'Request a quote',
    note: 'Tell us what you need. Our team will review your request and contact you to get your service ready.',
  },
  fleet: {
    kicker: 'Fleet',
    title: 'Vehicles for every kind of trip',
    intro: 'Some of our fully equipped vehicles',
    note: 'Specifications, availability and rates are confirmed when we review your quote request.',
    categories: { suv: 'SUV', van: 'Van' },
    service: 'Private transport',
    alt: {
      'ford-territory': 'Light grey Ford Territory in a desert landscape',
      'nissan-urvan': 'White Nissan Urvan outside a dealership',
      'toyota-rav4': 'Grey Toyota RAV4 driving along an avenue',
      'toyota-yaris-cross': 'Silver Toyota Yaris Cross parked in front of a building',
    },
  },
  services: {
    kicker: 'Services',
    title: 'Private transport for every need',
    imageAlt: 'Passenger working on a laptop and talking on the phone in the back seat of a vehicle',
    items: {
      ejecutivo: {
        title: 'Executive and corporate transportation',
        description:
          'Transportation for executives, meetings, and business trips, arranged in advance.',
      },
      alquiler: {
        title: 'Rent a vehicle with a driver included',
        description:
        'Travel in comfort without worrying about driving. Let us know your dates and preferred vehicle type, and our qualified driver will take care of the rest.',
      },
      aeropuerto: {
        title: 'Airport transfers',
        description:
          'Transfers to and from the airport with a qualified driver, at the agreed time and location. Extend the service as needed.',
      },
      turistico: {
        title: 'Tourist transportation',
        description:
          'Discover Arequipa and other destinations with private transportation and a qualified driver, tailored to your itinerary.',
      },
    },
  },
  why: {
    kicker: 'About us',
    title: 'Why choose G&L CAR EXPRESS?',
    description:
      'We hold the highest quality standards in the Arequipa region. We offer top-tier vehicles that are comfortable and high-performing, with everything included, and a trained team that accompanies and guides you so your stay or assignment is the best it can be.',
    items: [
      {
        title: 'Personal attention',
        description:
          'We adapt the service to your needs: type of vehicle, number of passengers, schedule and route.',
      },
      {
        title: 'Advance coordination',
        description:
          'We confirm every detail in advance: date, vehicle and qualified driver, so all you have to do is enjoy the trip.',
      },
      {
        title: 'Professional drivers',
        description:
          'Drivers with experience on local and interprovincial routes, so you travel safely and without setbacks.',
      },
      {
        title: 'Top-performance vehicles',
        description:
          'Top-tier, comfortable and well-equipped vehicles, with the power and reliability your trip deserves. Unbranded vehicles.',
      },
    ],
  },
  arequipa: {
    title: 'Choose how you want to travel.',
    description:
      'If you are visiting Arequipa for tourism, business or an event, we can arrange your private transport. We coordinate the service according to the dates and itinerary you agree with us.',
    cta: 'Request a quote',
    imageAlt: 'Map of the Arequipa region with its main towns',
    placeholder: 'Arequipa photograph pending (licensed or client material)',
  },
  how: {
    kicker: 'Process',
    title: 'How does it work?',
    imageAlt: 'Vehicles lined up in a parking lot, including SUVs and a minivan',
    carouselLabel: 'Steps to request a quote',
    carouselRole: 'carousel',
    stepRole: 'step',
    stepLabel: (step: number, total: number) => `Step ${step} of ${total}`,
    prev: 'Previous step',
    next: 'Next step',
    noteLabel: 'Important',
    note: 'sending a request is not the same as confirming a booking. The booking is confirmed when G&L CAR EXPRESS checks availability and contacts you.',
    steps: [
      {
        title: 'Explore the services',
        description:
          'Review the services and fleet available for the kind of trip you need.',
      },
      {
        title: 'Request your quote',
        description: 'Contact us by WhatsApp, phone or email with the details of your trip.',
      },
      {
        title: 'We review your request',
        description: 'We check the service, the date and availability.',
      },
      {
        title: 'We confirm the details',
        description:
          'We contact you to confirm the service. The booking is only confirmed after that step.',
      },
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Request your quote',
    description:
      'Write or call us with the details of your trip. We will review your request and contact you to confirm availability and details. Your request is not a confirmed booking.',
    includeTitle: 'Include in your message',
    details: [
      'Type of service you need',
      'Date and time of the service',
      'Origin and destination, if applicable',
      'Number of passengers',
    ],
    cta: 'Request a quote',
    whatsappNote: 'WhatsApp will open with a message ready to send.',
    whatsappPending: '[WhatsApp number pending confirmation]',
    whatsappMessage: 'Hello, I would like to request a transport quote.',
    whatsappFab: 'Message us on WhatsApp',
    channels: {
      whatsapp: { label: 'WhatsApp', pending: 'WhatsApp number pending confirmation' },
      phone: { label: 'Phone', pending: 'Phone number pending confirmation' },
      email: { label: 'Email', pending: 'Email pending confirmation' },
    },
  },
  footer: {
    slogan: 'So your time doesn\'t stop: we move you the way you need.',
    navLabel: 'Footer',
    rights: (year: number) => `© ${year} G&L CAR EXPRESS. All rights reserved.`,
  },
};

export const ui = {
  es,
  en,
} satisfies Record<Lang, typeof es>;
