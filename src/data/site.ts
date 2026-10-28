export interface NavItem {
  label: string;
  href: string;
}

export interface ContactDetails {
  // WhatsApp en formato internacional sin "+", por ejemplo 51XXXXXXXXX. Pendiente de confirmar por el cliente.
  whatsapp: string | null;
  // Pendiente de confirmar por el cliente.
  phone: string | null;
  // Pendiente de confirmar por el cliente.
  email: string | null;
}

export const site = {
  name: 'G&L CAR EXPRESS',
  slogan: 'Que tu tiempo no se detenga, te movilizamos a tu medida.',
  description:
    'Alquiler de vehículos y transporte privado en Arequipa, Perú: traslados al aeropuerto, transporte ejecutivo y corporativo, turismo y grupos.',
  location: 'Arequipa, Perú',
  quoteHref: '#contacto',
} as const;

export const navItems: NavItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Flota', href: '#flota' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
];

export const contactDetails: ContactDetails = {
  whatsapp: null,
  phone: null,
  email: null,
};

// Ruta dentro de public/ cuando el cliente entregue la foto de Arequipa.
export const siteImages: { arequipa: string | null } = {
  arequipa: null,
};

// Fondo del hero principal. La imagen se muestra siempre; el video solo se carga en escritorio.
export const heroMedia = {
  video: '/videos/3-1uz6Wo_display.mp4',
  poster: '/images/heroRespaldo.webp',
} as const;
