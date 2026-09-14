# 📄 Rafael Antonio Hidalgo Romero — CV Digital Interactivo

![React](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node](https://img.shields.io/badge/Node-24.x-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

> CV digital bilingüe, con modo oscuro, versión imprimible y despliegue
> automático a GitHub Pages.

## 🚀 [Ver CV en vivo](https://rafael180496.github.io/template_cv_react/)

---

## 👨‍💻 Sobre el desarrollador

**Rafael Antonio Hidalgo Romero**
*Desarrollador Full Stack & Consultor Tecnológico*

- 🎂 Nacido el 18 de abril de 1996
- 💼 Desarrollando profesionalmente desde marzo de 2017
- 🏢 Consultor tecnológico en Zerviz
- 🌍 Managua, Nicaragua
- 📧 rafael180496@gmail.com
- 💻 [github.com/rafael180496](https://github.com/rafael180496)
- 🔗 [LinkedIn](https://www.linkedin.com/in/rafael-antonio-hidalgo-romero-71608a116/)

> La edad y los años de experiencia **no están escritos en ningún texto**: se
> calculan en `src/service/util.js` a partir de la fecha de nacimiento y del
> inicio de carrera, y los archivos de idioma los interpolan con los
> marcadores `DYNAMIC_AGE` y `DYNAMIC_EXPERIENCE_YEARS`.

### 🎯 Especialidades

```javascript
const expertise = {
  backend:   ['Golang', 'Node.js', 'NestJS', 'Java', 'Spring Boot'],
  frontend:  ['React', 'Vue.js', 'TypeScript'],
  mobile:    ['Flutter', 'React Native', 'Kotlin'],
  cloud:     ['AWS Lambda', 'Docker', 'Microservicios', 'Azure DevOps'],
  databases: ['Oracle', 'PostgreSQL', 'MongoDB', 'DynamoDB'],
  legacy:    ['COBOL', 'Sistemas batch', 'Facturación electrónica'],
};
```

### 🏆 Trayectoria

| Periodo | Puesto |
|---|---|
| Mar 2021 — Actual | Consultor tecnológico en **Zerviz** (Millicom/TIGO, Copa Airlines, Rosen, Abcdin) |
| Jun 2021 — Actual | Coordinador y desarrollador backend en **Sigeme** (Guatemala) |
| Sep 2021 — Sep 2026 | Desarrollador Backend Senior en **ZeroQ** (Chile) |
| Jun 2021 — Ene 2022 | Desarrollador full stack en **AnanaSoft** (Costa Rica) |
| Mar 2017 — Jun 2021 | Coordinador y desarrollador del sistema O-SGC en **The Data Age** |

---

## ✨ Qué hace la página

- **Bilingüe ES/EN** — arranca en el idioma del navegador, recuerda el cambio
  y actualiza el atributo `lang` del documento.
- **Modo claro / oscuro** — sigue al sistema operativo mientras el usuario no
  elija; la elección se persiste. El tema se pinta antes del primer render, así
  que no hay parpadeo blanco al cargar en oscuro.
- **Navegación con sección activa** — la cabecera resalta la sección que se
  está leyendo (`IntersectionObserver`).
- **Versión imprimible** — el botón de PDF abre el diálogo de impresión del
  navegador con una maqueta A4 propia, desde un iframe oculto (no lo bloquean
  los bloqueadores de ventanas emergentes).
- **Duraciones calculadas** — cada puesto muestra cuánto duró; los que siguen
  vigentes se miden contra hoy y se marcan como actuales.
- **Accesible** — enlace para saltar al contenido, foco visible, roles ARIA en
  las barras de nivel y respeto por `prefers-reduced-motion`.

---

## 🛠️ Stack

| Capa | Tecnología |
|---|---|
| UI | React 19 |
| Build | Vite 8 (Rolldown) |
| Estilos | Tailwind CSS 4 (CSS-first, sin `tailwind.config.js`) |
| Animación | `IntersectionObserver` propio (`src/hooks/useReveal.js`) |
| Iconos | Font Awesome 6 (CDN) |
| Calidad | ESLint 10 (flat config) |
| Despliegue | GitHub Actions → GitHub Pages |

> **Sin AOS.** La biblioteca de animaciones se reemplazó por un hook de ~20
> líneas: era una dependencia sin mantenimiento que además cargaba su CSS desde
> un CDN externo y no respetaba `prefers-reduced-motion`.
>
> **Sin `html2pdf.js`.** Estaba declarada pero nunca se importaba; arrastraba
> `jspdf`, `html2canvas` y `dompurify` al `node_modules` sin usarse.

---

## 🚀 Inicio rápido

### Requisitos

```bash
nvm use            # lee .nvmrc → Node 24.19.0
node --version     # >= 22.12 (mínimo declarado en engines)
```

### Instalación

```bash
git clone https://github.com/rafael180496/template_cv_react.git
cd template_cv_react
npm ci
npm run dev        # http://localhost:3000
```

### Scripts

| Script | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo en el puerto 3000 |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Sirve el build para revisarlo |
| `npm run lint` | ESLint sobre todo el proyecto |

---

## 📁 Estructura

```
template_cv_react/
├── .github/workflows/deploy.yml   # CI/CD: lint + build + deploy a Pages
├── src/
│   ├── assets/
│   │   ├── lang/{es,en}.json      # Todo el contenido del CV
│   │   └── skills.json            # Habilidades y niveles
│   ├── components/
│   │   ├── HeaderContent.jsx      # Cabecera fija + navegación
│   │   ├── CoverContent.jsx       # Portada
│   │   ├── AboutContent.jsx       # Sobre mí + contacto
│   │   ├── SkillContent.jsx       # Barras de nivel
│   │   ├── WorkContent.jsx        # Línea de tiempo
│   │   ├── FooterContent.jsx
│   │   ├── PdfGenerator.jsx       # Botón de versión imprimible
│   │   ├── Reveal.jsx, SocialCard.jsx,
│   │   └── ThemeToggle.jsx, BackToTop.jsx
│   ├── hooks/
│   │   ├── useReveal.js           # Animación al entrar en pantalla
│   │   ├── useTheme.js            # Claro / oscuro
│   │   └── useActiveSection.js    # Sección activa en la navegación
│   ├── provider/
│   │   ├── langContext.js         # Contexto + hook useLang
│   │   └── LangProvider.jsx       # Estado del idioma
│   ├── service/
│   │   ├── util.js                # Fechas, duraciones, tecnologías
│   │   ├── sections.js            # Ids de las secciones navegables
│   │   └── pdfDocument.js         # HTML de la versión imprimible
│   ├── page/HomePage.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css                  # Tema Tailwind v4 + modo oscuro
├── eslint.config.js
├── vite.config.js
└── .nvmrc
```

---

## 🎨 Personalización

### Contenido

Todo el texto vive en `src/assets/lang/es.json` y `src/assets/lang/en.json`.
Los dos archivos tienen la misma forma: si se agrega una clave en uno hay que
agregarla en el otro, o el idioma que falte mostrará el campo vacío.

```jsonc
{
  "info": {
    "name": "Tu Nombre",
    "role": "Tu rol",
    "post": "Resumen con DYNAMIC_EXPERIENCE_YEARS años de experiencia…",
    "location": "Ciudad, País",
    "email": "tu@correo.com",
    "workitems": [{ "work": "…", "emp": "…", "time": "Marzo,2021 - Presente", "descrip": "…" }]
  }
}
```

Dos convenciones del campo `descrip` que el código aprovecha:

- Una línea que empiece con `Tecnologías:` (o `Technologies:`) se saca del
  cuerpo y se muestra como etiquetas.
- `time` acepta `Mes,Año - Mes,Año` o `Mes,Año - Presente`. De ahí salen la
  duración, el orden del historial y la marca de "Actual".

### Habilidades

`src/assets/skills.json`, con `val` de 0 a 100. El nivel (Experto, Avanzado,
Intermedio, Básico) y su color se derivan de ese número.

### Colores y tipografía

`src/index.css`, en el bloque `@theme` (Tailwind v4 se configura en CSS, no en
`tailwind.config.js`).

---

## 🌐 Despliegue

El despliegue es automático: **cada push a `master` publica el sitio**.
[.github/workflows/deploy.yml](.github/workflows/deploy.yml) corre `npm ci`,
`npm run lint` y `npm run build`, y publica el contenido de `dist/` en la rama
**`gh-pages`**. Los pull requests corren lint y build, pero no publican.

```
push a master → lint + build → commit único en gh-pages → GitHub Pages sirve esa rama
```

La rama `gh-pages` es un artefacto, no historia: cada publicación la reescribe
con un solo commit (`force_orphan`), así no quedan restos de builds viejos.
No hace falta tocarla nunca a mano — y no conviene trabajar parada en ella.

### Configuración del repositorio (una sola vez)

**Settings → Pages → Build and deployment**

| Campo | Valor |
|---|---|
| Source | `Deploy from a branch` |
| Branch | **`gh-pages`** / `(root)` |

Con `Branch: master` se publica el código fuente en lugar del build: el sitio
pide `/src/index.jsx`, que en producción no existe compilado, y queda en blanco
sin ningún error de despliegue que lo explique.

### Base path

`vite.config.js` fija `base: '/template_cv_react/'` porque es un *project site*
de GitHub Pages. Si el repositorio cambia de nombre —o el sitio pasa a un
dominio propio— hay que ajustar ese valor y las rutas absolutas de
`index.html`, o la página cargará sin estilos.

---

## 🤝 Contribuir

1. Fork del proyecto
2. `git checkout -b feature/mi-mejora`
3. `npm run lint && npm run build` antes de commitear
4. Pull request contra `master`

---

## 📄 Licencia

MIT — ver [LICENSE](LICENSE).
