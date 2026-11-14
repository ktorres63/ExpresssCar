// Los textos de cada servicio viven en src/i18n/ui.ts, indexados por id.
export const serviceIds = ['ejecutivo', 'alquiler', 'aeropuerto', 'turistico', 'chofer'] as const;

export type ServiceId = (typeof serviceIds)[number];
