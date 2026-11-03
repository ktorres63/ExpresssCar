export type VehicleCategory = 'suv' | 'van';

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  image: string;
  alt: string;
  width: number;
  height: number;
  // Solo se completan cuando el cliente confirme los datos.
  passengers?: number;
  luggage?: number;
  transmission?: string;
  climate?: string;
  dailyRate?: string;
}

export const vehicleCategoryLabels: Record<VehicleCategory, string> = {
  suv: 'SUV',
  van: 'Van',
};

export const vehicles: Vehicle[] = [
  {
    id: 'ford-territory',
    name: 'Ford Territory',
    category: 'suv',
    image: '/images/fordTerritory.webp',
    alt: 'Ford Territory gris claro en un paisaje desértico',
    width: 800,
    height: 450,
    passengers: 5,
    luggage: 3,
    transmission: 'Automática',
    climate: 'Sí',
    dailyRate: 'A confirmar',
  },
  {
    id: 'nissan-urvan',
    name: 'Nissan Urvan',
    category: 'van',
    image: '/images/nissanUrban.jpg',
    alt: 'Nissan Urvan blanca frente a un concesionario',
    width: 1920,
    height: 1439,
  },
  {
    id: 'toyota-rav4',
    name: 'Toyota RAV4',
    category: 'suv',
    image: '/images/toyotarav4.webp',
    alt: 'Toyota RAV4 gris circulando por una avenida',
    width: 1140,
    height: 630,
  },
  {
    id: 'toyota-yaris-cross',
    name: 'Toyota Yaris Cross',
    category: 'suv',
    image: '/images/toyotaYarisCross.jpg',
    alt: 'Toyota Yaris Cross plateado estacionado frente a un edificio',
    width: 2419,
    height: 1814,
  },
];
