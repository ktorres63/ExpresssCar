# G&L CAR EXPRESS — Sitio web

Sitio web de marketing para G&L CAR EXPRESS (Arequipa, Perú): alquiler de vehículos y
transporte privado. El objetivo es presentar los servicios y la flota, y llevar al visitante a
solicitar una cotización.

## Stack

- Astro 7 (sitio estático)
- Tailwind CSS 4 (vía `@tailwindcss/vite`)
- `@lucide/astro` para iconos
- pnpm como gestor de paquetes

## Comandos

| Comando        | Acción                                     |
| :------------- | :----------------------------------------- |
| `pnpm install` | Instala dependencias                       |
| `pnpm dev`     | Servidor de desarrollo en `localhost:4321` |
| `pnpm build`   | Genera el sitio en `./dist/`               |
| `pnpm preview` | Previsualiza el sitio compilado             |

## Estructura

```text
src/
├── components/
│   ├── layout/        Header y Footer
│   ├── sections/      Secciones de la página
│   ├── fleet/         Tarjeta de vehículo
│   └── ui/            Botones y bloques de imagen
├── data/              Contenido editable (sitio, flota, servicios)
├── layouts/           Layout base y metadatos
├── pages/index.astro  Página principal
└── styles/global.css  Tokens de marca y estilos base
```

## Hero con video

- **Escritorio:** `public/videos/3-1uz6Wo_display.mp4` como fondo, con overlay y contenido encima.
- **Móvil, tablet y `prefers-reduced-motion`:** `public/images/heroRespaldo.webp`. El video no se
  descarga (la condición se evalúa antes de asignar el `src`).
- **Carga:** la imagen se muestra de inmediato; el video aparece con un fundido cuando está listo.
  Si no lo está en 3 segundos, falla o el navegador bloquea la reproducción, se cancela la carga y
  se conserva la imagen, sin mensajes de error.
- Las rutas se configuran en `heroMedia` (`src/data/site.ts`).

## Contenido pendiente del cliente

- **Contacto:** WhatsApp, teléfono y correo en `src/data/site.ts`. Mientras estén en `null`, la
  web muestra marcadores "[... pendiente de confirmar]".
- **Flota:** `src/data/vehicles.ts` contiene marcadores. Añadir modelos, capacidades y
  características solo cuando el cliente los confirme.
- **Imágenes:** la sección de Arequipa y los vehículos siguen con marcadores. Colocar los archivos
  en `public/images/` y actualizar las rutas en `site.ts` y `vehicles.ts`.
- **Integración de consultas:** sin definir. No hay formulario porque aún no existe un destino
  para los envíos.
- **Protección ejecutiva:** servicio mencionado por el cliente, aún no incluido en la web.
