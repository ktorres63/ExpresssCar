export type VehicleCategory = 'suv' | 'minibus';

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  image: string | null;
  alt: string;
  // Los datos de la ficha se muestran como pendientes mientras confirmed sea false.
  confirmed: boolean;
  passengers?: number;
  luggage?: number;
  features?: string[];
}

export const vehicleCategoryLabels: Record<VehicleCategory, string> = {
  suv: 'SUV',
  minibus: 'Minibús',
};

// Marcadores pendientes: reemplazar con la flota confirmada por el cliente.
export const vehicles: Vehicle[] = [
  {
    id: 'suv-pendiente',
    name: 'Modelo por confirmar',
    category: 'suv',
    image: null,
    alt: 'Fotografía pendiente de una SUV de la flota',
    confirmed: false,
  },
  {
    id: 'minibus-pendiente',
    name: 'Modelo por confirmar',
    category: 'minibus',
    image: null,
    alt: 'Fotografía pendiente de un minibús de la flota',
    confirmed: false,
  },
];
