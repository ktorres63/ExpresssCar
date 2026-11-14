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
  location: 'Arequipa, Perú',
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
    note: 'Enviar una consulta no confirma una reserva. El equipo revisa la disponibilidad y te contacta para confirmar los detalles.',
  },
  fleet: {
    kicker: 'Flota',
    title: 'Vehículos para cada tipo de viaje',
    intro: 'Parte de nuestras unidades full equipo',
    note: 'Las fichas técnicas, la disponibilidad y las tarifas se confirman al revisar tu solicitud de cotización.',
    categories: { suv: 'SUV', van: 'Van' } satisfies Record<VehicleCategory, string>,
    service: 'Transporte privado',
    zone: 'Arequipa',
    availability: 'A confirmar',
    detailsTitle: 'Detalles del servicio',
    labels: {
      service: 'Servicio',
      zone: 'Zona',
      availability: 'Disponibilidad',
      passengers: 'Pasajeros',
      luggage: 'Maletas',
      transmission: 'Transmisión',
      climate: 'A/C',
    },
    transmission: { automatic: 'Automática', manual: 'Manual' },
    climate: { yes: 'Sí', no: 'No' },
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
    cta: 'Solicitar cotización',
    items: {
      ejecutivo: {
        title: 'Transporte ejecutivo y corporativo',
        description:
          'Traslados para ejecutivos, reuniones y viajes de trabajo, coordinados con anticipación.',
      },
      alquiler: {
        title: 'Alquiler de vehículos',
        description:
          'Vehículos para tus desplazamientos. Indícanos las fechas y el tipo de vehículo que necesitas para revisar disponibilidad.',
      },
      aeropuerto: {
        title: 'Traslados al aeropuerto',
        description:
          'Recojo y traslado hacia y desde el aeropuerto, con horario y punto de encuentro acordados.',
      },
      turistico: {
        title: 'Transporte turístico',
        description:
          'Transporte privado para tus viajes de turismo, según el itinerario que acuerdes con nosotros.',
      },
      chofer: {
        title: 'Servicio con chofer',
        description: 'Conductor para tus traslados, según el servicio que solicites.',
      },
    } satisfies Record<ServiceId, { title: string; description: string }>,
  },
  why: {
    kicker: 'Nosotros',
    title: '¿Por qué elegir G&L CAR EXPRESS?',
    items: [
      {
        title: 'Atención personalizada',
        description:
          'Adaptamos el servicio a tu viaje: tipo de vehículo, número de pasajeros y horario.',
      },
      {
        title: 'Coordinación con anticipación',
        description:
          'Revisamos cada solicitud antes de confirmar fecha, vehículo y detalles del servicio.',
      },
      {
        title: 'Para distintos tipos de cliente',
        description:
          'Viajeros de negocios, turistas, empresas, familias y grupos que necesitan transporte privado.',
      },
      {
        title: 'Confirmación directa',
        description:
          'Te contactamos para validar los detalles. Una consulta no se considera reserva confirmada hasta ese momento.',
      },
    ],
  },
  arequipa: {
    kicker: 'Arequipa',
    title: 'Transporte privado para tu visita a Arequipa',
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
  location: 'Arequipa, Peru',
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
    note: 'Sending an inquiry does not confirm a booking. Our team checks availability and contacts you to confirm the details.',
  },
  fleet: {
    kicker: 'Fleet',
    title: 'Vehicles for every kind of trip',
    intro: 'Some of our fully equipped vehicles',
    note: 'Specifications, availability and rates are confirmed when we review your quote request.',
    categories: { suv: 'SUV', van: 'Van' },
    service: 'Private transport',
    zone: 'Arequipa',
    availability: 'To be confirmed',
    detailsTitle: 'Service details',
    labels: {
      service: 'Service',
      zone: 'Area',
      availability: 'Availability',
      passengers: 'Passengers',
      luggage: 'Luggage',
      transmission: 'Transmission',
      climate: 'A/C',
    },
    transmission: { automatic: 'Automatic', manual: 'Manual' },
    climate: { yes: 'Yes', no: 'No' },
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
    cta: 'Request a quote',
    items: {
      ejecutivo: {
        title: 'Executive and corporate transport',
        description: 'Transfers for executives, meetings and business trips, coordinated in advance.',
      },
      alquiler: {
        title: 'Vehicle rental',
        description:
          'Vehicles for your trips. Tell us the dates and the type of vehicle you need so we can check availability.',
      },
      aeropuerto: {
        title: 'Airport transfers',
        description:
          'Pick-up and transfer to and from the airport, with the schedule and meeting point agreed in advance.',
      },
      turistico: {
        title: 'Tourist transport',
        description:
          'Private transport for your sightseeing trips, following the itinerary you agree with us.',
      },
      chofer: {
        title: 'Chauffeur service',
        description: 'A driver for your transfers, according to the service you request.',
      },
    },
  },
  why: {
    kicker: 'About us',
    title: 'Why choose G&L CAR EXPRESS?',
    items: [
      {
        title: 'Personal attention',
        description:
          'We adapt the service to your trip: type of vehicle, number of passengers and schedule.',
      },
      {
        title: 'Advance coordination',
        description:
          'We review every request before confirming the date, vehicle and service details.',
      },
      {
        title: 'For different types of clients',
        description:
          'Business travellers, tourists, companies, families and groups who need private transport.',
      },
      {
        title: 'Direct confirmation',
        description:
          'We contact you to confirm the details. An inquiry is not considered a confirmed booking until then.',
      },
    ],
  },
  arequipa: {
    kicker: 'Arequipa',
    title: 'Private transport for your visit to Arequipa',
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

export type Translation = typeof es;
