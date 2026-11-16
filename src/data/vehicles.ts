export const vehicleIds = [
  'ford-territory',
  'nissan-urvan',
  'toyota-rav4',
  'toyota-yaris-cross',
] as const;

export type VehicleId = (typeof vehicleIds)[number];

export type VehicleCategory = 'suv' | 'van';

export type VehicleTransmission = 'automatic' | 'manual';

export interface Vehicle {
  id: VehicleId;
  name: string;
  category: VehicleCategory;
  image: string;
  width: number;
  height: number;
  // Solo se completan cuando el cliente confirme los datos.
  passengers?: number;
  luggage?: number;
  transmission?: VehicleTransmission;
  climate?: boolean;
}

// Los textos alternativos viven en src/i18n/ui.ts, indexados por id.
export const vehicles: Vehicle[] = [
  {
    id: 'ford-territory',
    name: 'Ford Territory',
    category: 'suv',
    image: '/images/fordTerritory.jpeg',
    width: 1376,
    height: 768,
    passengers: 5,
    luggage: 3,
    transmission: 'automatic',
    climate: true,
  },
  {
    id: 'toyota-rav4',
    name: 'Toyota RAV4',
    category: 'suv',
    image: '/images/toyotarav4.webp',
    width: 1140,
    height: 630,
  },
  {
    id: 'toyota-yaris-cross',
    name: 'Toyota Yaris Cross',
    category: 'suv',
    image: '/images/ToyotaYarisCross.jpeg',
    width: 1200,
    height: 896,
  },
  {
    id: 'nissan-urvan',
    name: 'Nissan Urvan',
    category: 'van',
    image: '/images/nissanUrban.jpeg',
    width: 1200,
    height: 896,
  },
];
