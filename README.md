# 📄 Rafael Antonio Hidalgo Romero - CV Digital Interactivo

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)

> **CV Digital Moderno y Profesional** - Desarrollado con las últimas tecnologías web para una experiencia interactiva y responsiva.

## 🚀 [Ver CV en Vivo](http://rafael180496.github.io/template_cv_react)

---

## 👨‍💻 Sobre el Desarrollador

**Rafael Antonio Hidalgo Romero**
*Full Stack Developer & Technology Consultant*

- 🎂 **28 años** (nacido 18 de abril, 1996)
- 💼 **7+ años de experiencia** (desde marzo 2017)
- 🏢 **Consultor Tecnológico** en Zerviz
- 🌍 **Ubicación**: Doral City, Florida
- 📧 **Email**: rafael180496@gmail.com
- 💻 **GitHub**: [rafael180496](https://github.com/rafael180496)
- 🔗 **LinkedIn**: [Rafael Hidalgo](https://linkedin.com/in/rafael-hidalgo)

### 🎯 Especialidades

```javascript
const expertise = {
  backend: ['Node.js', 'Golang', 'Java', 'Spring Boot', 'NestJS'],
  frontend: ['React', 'Vue.js', 'JavaScript', 'TypeScript'],
  mobile: ['Flutter', 'React Native', 'Kotlin'],
  cloud: ['AWS Lambda', 'Docker', 'Microservicios'],
  databases: ['SQL', 'MongoDB', 'DynamoDB', 'SQLite'],
  tools: ['Git', 'Azure DevOps', 'Zendesk', 'Five9', 'SQS']
};
```

### 🏆 Experiencia Destacada

- **Zerviz (2021-Actual)**: Consultor tecnológico para Millicom(TIGO), Copa Airlines, Rosen, Abcdin
- **ZeroQ (2021-2022)**: Desarrollo full-stack con Vue.js y Ruby on Rails
- **Sigeme (2020-2021)**: Coordinador y desarrollador backend del sistema SGC
- **The Data Age (2017-2021)**: Líder de desarrollo del sistema O-SGC en Golang
- **Proyectos Freelance**: APIs REST, aplicaciones móviles, sistemas de facturación

---

## 🛠️ Tecnologías del Proyecto

### **Frontend**
- ⚛️ **React 19** - Última versión con createRoot API
- ⚡ **Vite 6** - Build tool ultra-rápido
- 🎨 **Tailwind CSS 4** - Framework CSS utility-first
- 📱 **Responsive Design** - Optimizado para todos los dispositivos
- ✨ **AOS Animations** - Animaciones smooth on scroll

### **Funcionalidades**
- 🌐 **Bilingüe** - Español/Inglés dinámico
- 🎂 **Edad dinámica** - Calculada automáticamente
- 📊 **Experiencia dinámica** - Años actualizados desde marzo 2017
- 📄 **Generación PDF** - CV descargable con diseño optimizado
- 🎯 **Skills interactivos** - Barras de progreso con niveles de expertise
- 📱 **Mobile-first** - Diseño completamente responsivo
- ⚡ **Performance optimized** - Carga rápida y animaciones fluidas

### **Características Técnicas**
- 📦 **ES Modules** - JavaScript moderno
- 🎨 **Custom Theme** - Colores y tipografías profesionales
- 🖨️ **Print-optimized PDF** - Sin recortes, diseño compacto
- 🔄 **Hot Reload** - Desarrollo ágil con Vite
- 📱 **PWA Ready** - Preparado para Progressive Web App
- 🚀 **GitHub Pages Deploy** - CI/CD automático

---

## 🚀 Inicio Rápido

### **Prerrequisitos**
```bash
# Node.js 18+ requerido
node --version  # v18.0.0+
npm --version   # v8.0.0+
```

### **Instalación**
```bash
# Clonar repositorio
git clone https://github.com/rafael180496/template_cv_react.git
cd template_cv_react

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### **Scripts Disponibles**
```bash
npm run dev       # 🚀 Desarrollo (localhost:5173)
npm run build     # 📦 Build para producción
npm run preview   # 👀 Preview del build
npm run deploy    # 🌐 Deploy a GitHub Pages
```

---

## 📁 Estructura del Proyecto

```
template_cv_react/
├── 📂 src/
│   ├── 📂 assets/
│   │   ├── 🌐 lang/           # Traducciones ES/EN
│   │   ├── 🖼️  img/           # Imágenes y assets
│   │   └── 📊 skills.json     # Datos de habilidades
│   ├── 📂 components/
│   │   ├── 🏠 CoverContent.jsx    # Header principal
│   │   ├── 👤 AboutContent.jsx    # Información personal
│   │   ├── 🎯 SkillContent.jsx    # Habilidades técnicas
│   │   ├── 💼 WorkContent.jsx     # Experiencia laboral
│   │   ├── 🌐 HeaderContent.jsx   # Navegación y social
│   │   ├── 🔗 SocialCard.jsx      # Enlaces sociales
│   │   ├── 📄 PdfGenerator.jsx    # Generador de PDF
│   │   └── 📱 BodyContent.jsx     # Layout principal
│   ├── 📂 service/
│   │   └── ⚙️  util.js         # Utilidades y cálculos
│   ├── 📂 page/
│   │   └── 🏠 HomePage.jsx     # Página principal
│   └── 🎨 App.js              # Componente raíz
├── ⚙️  vite.config.js         # Configuración Vite
├── 🎨 tailwind.config.js      # Configuración Tailwind
├── 📦 package.json           # Dependencias y scripts
└── 📝 README.md              # Este archivo
```

---

## 🎨 Personalización

### **Modificar Información Personal**
```javascript
// src/assets/lang/es.json & en.json
{
  "info": {
    "name": "Tu Nombre",
    "post": "Tu Posición Profesional",
    "aboutme": "Tu descripción profesional...",
    // ... más campos
  }
}
```

### **Agregar/Modificar Skills**
```javascript
// src/assets/skills.json
{
  "language_skills": [
    {
      "title": "JavaScript",
      "val": "90"  // Porcentaje de expertise
    }
  ],
  "lib_skills": [
    {
      "title": "React",
      "val": "85"
    }
  ]
}
```

### **Personalizar Colores**
```css
/* src/index.css */
@theme {
  --color-primary: {
    50: #eff6ff;
    500: #3b82f6;
    900: #1e3a8a;
  }
}
```

---

## 📱 Características del CV

### **🎯 Secciones Interactivas**

#### **👤 About Me**
- ✅ Información personal dinámica
- ✅ Edad calculada automáticamente (28 años)
- ✅ Enlaces sociales con animaciones
- ✅ Contacto completo

#### **💼 Experiencia Profesional**
- ✅ Timeline interactivo con hover effects
- ✅ 8+ posiciones profesionales detalladas
- ✅ Tecnologías utilizadas como tags
- ✅ Descripciones completas de proyectos

#### **🎓 Educación**
- ✅ Ingeniería en Computación (2018)
- ✅ Universidad Politécnica de Nicaragua
- ✅ Descripción académica completa

#### **💻 Habilidades Técnicas**
- ✅ 18+ lenguajes de programación
- ✅ 25+ frameworks y herramientas
- ✅ Barras de progreso animadas
- ✅ Niveles de expertise coloreados

#### **📄 PDF Generator**
- ✅ Generación nativa del navegador
- ✅ Diseño optimizado sin recortes
- ✅ Información completa en formato imprimible
- ✅ Estilos profesionales para reclutadores

### **🌟 Funcionalidades Avanzadas**

#### **🌐 Internacionalización**
```javascript
// Cambio dinámico de idioma
const switchLanguage = (lang) => {
  // ES: Español completo
  // EN: English full translation
}
```

#### **📊 Analytics Dinámicos**
```javascript
// Cálculos automáticos
getCurrentAge()           // 28 años
getCurrentExperienceYears() // 7+ años desde 2017
```

#### **🎨 Animaciones Fluidas**
```javascript
// AOS (Animate On Scroll)
AOS.init({
  duration: 600,    // Animaciones suaves
  delay: 50,        // Efectos escalonados
  easing: 'ease'    // Transiciones naturales
});
```

---

## 🚀 Performance

### **⚡ Métricas de Rendimiento**
- ✅ **First Paint**: < 1s
- ✅ **Interactive**: < 2s
- ✅ **Bundle Size**: < 500KB
- ✅ **Mobile Score**: 95+

### **🔧 Optimizaciones**
- ✅ **Code Splitting** con Vite
- ✅ **Tree Shaking** automático
- ✅ **Asset Optimization**
- ✅ **Lazy Loading** de imágenes
- ✅ **Minificación** CSS/JS

---

## 🌐 Deployment

### **GitHub Pages (Automático)**
```bash
# Deploy automático con cada push a main
npm run deploy
```

### **Otros Servicios**
```bash
# Vercel
npm run build && vercel --prod

# Netlify
npm run build && netlify deploy --prod --dir=dist

# Surge
npm run build && cd dist && surge
```

---

## 🤝 Contribuir

### **🐛 Reportar Issues**
¿Encontraste un bug? [Crear issue](https://github.com/rafael180496/template_cv_react/issues)

### **💡 Sugerencias**
¿Ideas para mejorar? [Crear discussion](https://github.com/rafael180496/template_cv_react/discussions)

### **🔧 Pull Requests**
1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

---

## 📄 Licencia

Este proyecto está bajo la **MIT License** - ver [LICENSE](LICENSE) para detalles.

---

## 💼 ¿Por qué elegir este CV?

### **Para Reclutadores**
- 📱 **Responsivo** en todos los dispositivos
- 📄 **PDF descargable** optimizado para impresión
- 🔍 **Información completa** y bien organizada
- ⚡ **Carga rápida** y experiencia fluida

### **Para Desarrolladores**
- 🛠️ **Código moderno** React 19 + Vite
- 🎨 **Diseño profesional** con Tailwind CSS 4
- 🔧 **Fácil personalización** y mantenimiento
- 📦 **Estructura escalable** y bien documentada

### **Tecnologías Actualizadas**
- ✅ **React 19** - Última versión estable
- ✅ **Vite 6** - Build tool de nueva generación
- ✅ **Tailwind CSS 4** - Framework CSS moderno
- ✅ **ES2023+** - JavaScript actualizado

---

## 📞 Contacto

**Rafael Antonio Hidalgo Romero**

📧 **Email**: rafael180496@gmail.com
🌐 **Portfolio**: [rafael180496.github.io](http://rafael180496.github.io/template_cv_react)
💼 **LinkedIn**: [Rafael Hidalgo](https://linkedin.com/in/rafael-hidalgo)
👨‍💻 **GitHub**: [rafael180496](https://github.com/rafael180496)
📱 **WhatsApp**: +1 (786) 715-5291

---

<div align="center">

**⭐ Si te gusta este proyecto, ¡dale una estrella! ⭐**

*Desarrollado con ❤️ por Rafael Antonio Hidalgo Romero*

**React • Vite • Tailwind CSS • TypeScript Ready**

</div>