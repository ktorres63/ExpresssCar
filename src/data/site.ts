export interface ContactDetails {
  // WhatsApp en formato internacional sin "+", por ejemplo 51XXXXXXXXX. Pendiente de confirmar por el cliente.
  whatsapp: string | null;
  // Pendiente de confirmar por el cliente.
  phone: string | null;
  // Pendiente de confirmar por el cliente.
  email: string | null;
}

// Datos que no se traducen: marca, contacto e imágenes.
export const site = {
  name: 'G&L CAR EXPRESS',
  quoteHref: '#contacto',
} as const;

export const contactDetails: ContactDetails = {
  whatsapp: null,
  phone: null,
  email: null,
};

// Imágenes de secciones dentro de public/.
export const siteImages: { arequipa: string | null; services: string; fleet: string } = {
  arequipa: '/images/mapaArequipa.jpeg',
  services: '/images/imgBusiness.webp',
  fleet: '/images/FlotaIA.jpeg',
};

// Fondo del hero principal. La imagen se muestra siempre; el video solo se carga en escritorio.
export const heroMedia = {
  video: '/videos/3-1uz6Wo_display.mp4',
  poster: '/images/heroRespaldo.webp',
} as const;
