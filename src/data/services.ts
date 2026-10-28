export interface Service {
  id: string;
  title: string;
  description: string;
}

// "Protección ejecutiva" no se incluye hasta confirmar el servicio exacto y cómo describirlo.
export const services: Service[] = [
  {
    id: 'alquiler',
    title: 'Alquiler de vehículos',
    description:
      'Vehículos para tus desplazamientos. Indícanos las fechas y el tipo de vehículo que necesitas para revisar disponibilidad.',
  },
  {
    id: 'ejecutivo',
    title: 'Transporte ejecutivo y corporativo',
    description: 'Traslados para ejecutivos, reuniones y viajes de trabajo, coordinados con anticipación.',
  },
  {
    id: 'aeropuerto',
    title: 'Traslados al aeropuerto',
    description: 'Recojo y traslado hacia y desde el aeropuerto, con horario y punto de encuentro acordados.',
  },
  {
    id: 'turistico',
    title: 'Transporte turístico',
    description: 'Transporte privado para tus viajes de turismo, según el itinerario que acuerdes con nosotros.',
  },
  {
    id: 'grupos',
    title: 'Transporte para grupos',
    description: 'Vehículos desde SUVs hasta minibuses para grupos, viajes y eventos.',
  },
  {
    id: 'chofer',
    title: 'Servicio con chofer',
    description: 'Conductor para tus traslados, según el servicio que solicites.',
  },
];
