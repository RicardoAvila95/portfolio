# Portfolio de Ricardo Ávila

Portfolio personal de Ricardo Ávila, Software Engineer. El sitio presenta su perfil profesional, experiencia, tecnologías y formas de contacto. También incluye una sección para mostrar proyectos personales, que se irá actualizando a medida que estén disponibles.

## Contenido

- Presentación y resumen profesional.
- Experiencia como Software Engineer en Blue Room Innovation.
- Tecnologías organizadas por áreas: frontend, backend y herramientas.
- Sección de proyectos personales.
- Enlaces de contacto por correo electrónico y LinkedIn.

## Tecnologías

- [Next.js](https://nextjs.org/) 16 con App Router
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Geist](https://vercel.com/font), mediante `next/font`

## Requisitos

- Node.js compatible con Next.js 16
- npm

## Desarrollo local

1. Clona el repositorio y entra en la carpeta del proyecto.
2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia Next.js en modo desarrollo. |
| `npm run build` | Genera la compilación de producción. |
| `npm run start` | Sirve la compilación de producción. |
| `npm run lint` | Analiza el código con ESLint. |

## Estructura del proyecto

```text
src/
├── app/
│   ├── globals.css    # Estilos globales
│   ├── layout.tsx     # Layout raíz y metadatos
│   └── page.tsx       # Página principal del portfolio
└── components/        # Secciones y navegación del sitio
    ├── About.tsx
    ├── Contact.tsx
    ├── Experience.tsx
    ├── Footer.tsx
    ├── Hero.tsx
    ├── Navbar.tsx
    ├── Projects.tsx
    └── Skills.tsx
```

El contenido de perfil, experiencia y tecnologías se mantiene directamente en los componentes de `src/components/`. La página principal compone esas secciones desde `src/app/page.tsx`.

## Despliegue

Se puede desplegar en [Vercel](https://vercel.com/), que ofrece integración directa con Next.js. También es posible generar la compilación con `npm run build` y servirla con `npm run start` en un entorno compatible.

## Contacto

- Email: [ricard_995@hotmail.com](mailto:ricard_995@hotmail.com)
- LinkedIn: [linkedin.com/in/ricardoavila95](https://www.linkedin.com/in/ricardoavila95)
