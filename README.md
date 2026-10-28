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
