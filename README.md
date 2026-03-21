# 🚀 Jairo Alexandro - Portfolio Personal

Un portfolio moderno y profesional construido con React, TypeScript y Tailwind CSS, diseñado para mostrar habilidades, proyectos y experiencia como desarrollador Full Stack.

## ✨ Características Principales

### 🎨 **Diseño y UX**

- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Modo Oscuro/Claro**: Toggle automático con persistencia local
- **Animaciones Suaves**: Framer Motion para transiciones fluidas
- **Glassmorphism**: Efectos visuales modernos y atractivos
- **Accesibilidad**: Navegación por teclado y ARIA labels

### 🛠 **Funcionalidades**

- **Navegación Suave**: Scroll automático entre secciones
- **Filtros de Proyectos**: Búsqueda y categorización inteligente
- **Formulario de Contacto**: Validación en tiempo real con EmailJS
- **Lazy Loading**: Carga optimizada de componentes
- **Rutas Dinámicas**: Sistema de navegación con React Router

### 📱 **Responsive Design**

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints Inteligentes**: Adaptación automática a diferentes pantallas
- **Touch Friendly**: Interacciones optimizadas para dispositivos táctiles

## 🏗 **Arquitectura del Proyecto**

```
src/
├── components/          # Componentes reutilizables
│   ├── contact/        # Formulario de contacto
│   ├── footer/         # Pie de página
│   ├── hero/           # Sección principal
│   ├── navbar/         # Navegación
│   ├── projects/       # Galería de proyectos
│   └── skills/         # Habilidades técnicas
├── context/            # Contexto global de la aplicación
├── hooks/              # Hooks personalizados
├── data/               # Datos estáticos
├── styles/             # Estilos y variables CSS
└── types/              # Definiciones de TypeScript
```

## 🚀 **Tecnologías Utilizadas**

### **Frontend**

- **React 18** - Biblioteca de interfaz de usuario
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Animaciones y transiciones
- **React Router** - Enrutamiento de la aplicación

### **Herramientas de Desarrollo**

- **Vite** - Bundler y servidor de desarrollo
- **ESLint** - Linting de código
- **Prettier** - Formateo de código
- **Vitest** - Framework de testing

### **Librerías de UI**

- **Lucide React** - Iconos modernos
- **React Slick** - Carousel de skills
- **EmailJS** - Integración de formularios

## 📦 **Instalación y Configuración**

### **Prerrequisitos**

- Node.js 18+
- npm o yarn

### **1. Clonar el Repositorio**

```bash
git clone https://github.com/JairoAlexandro/portfolio.git
cd portfolio
```

### **2. Instalar Dependencias**

```bash
npm install
```

### **3. Configurar Variables de Entorno**

Crear un archivo `.env.local` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### **4. Ejecutar en Desarrollo**

```bash
npm run dev
```

### **5. Construir para Producción**

```bash
npm run build
npm run preview
```

## 🎯 **Uso y Personalización**

### **Personalizar Información Personal**

1. Editar `src/data/projects.ts` para tus proyectos
2. Modificar `src/components/hero/Hero.tsx` para tu información
3. Actualizar enlaces sociales en los componentes

### **Cambiar Colores y Estilos**

1. Modificar `src/styles/variables.css` para la paleta de colores
2. Ajustar `tailwind.config.js` para personalizar Tailwind
3. Editar `src/App.css` para estilos adicionales

### **Agregar Nuevas Secciones**

1. Crear nuevo componente en `src/components/`
2. Agregar ruta en `src/App.tsx`
3. Incluir enlace en la navegación

## 🔧 **Scripts Disponibles**

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa de producción
npm run lint         # Linting del código
npm run test         # Ejecutar tests
```

## 📱 **Estructura de Componentes**

### **Hero Section**

- Presentación personal con animaciones
- Botones de acción (CV, Contacto)
- Enlaces a redes sociales

### **Skills Section**

- Categorización por áreas técnicas
- Niveles de experiencia visuales
- Carousel interactivo con filtros

### **Projects Section**

- Grid responsivo de proyectos
- Filtros por tecnología y categoría
- Búsqueda en tiempo real
- Métricas de GitHub y visitas

### **Contact Section**

- Formulario con validación
- Información de contacto
- Integración con EmailJS
- Estados de envío visuales

## 🎨 **Sistema de Diseño**

### **Paleta de Colores**

- **Primarios**: Azules y púrpuras
- **Secundarios**: Grises y blancos
- **Acentos**: Verdes y amarillos para estados

### **Tipografía**

- **Fuente Principal**: Oxanium (Google Fonts)
- **Jerarquía**: Sistema de tamaños responsivos
- **Legibilidad**: Alto contraste y espaciado optimizado

### **Espaciado y Layout**

- **Grid System**: CSS Grid y Flexbox
- **Espaciado**: Sistema de 8px base
- **Breakpoints**: Mobile, tablet, desktop

## 🚀 **Despliegue**

### **Vercel (Recomendado)**

```bash
npm install -g vercel
vercel
```

### **Netlify**

```bash
npm run build
# Arrastrar la carpeta dist a Netlify
```

### **GitHub Pages**

```bash
npm run build
# Configurar GitHub Actions para deploy automático
```

## 📊 **Performance y SEO**

### **Optimizaciones Implementadas**

- **Lazy Loading** de componentes
- **Code Splitting** automático
- **Image Optimization** con Cloudinary
- **Bundle Analysis** con Vite

### **SEO**

- **Meta Tags** dinámicos
- **Open Graph** para redes sociales
- **Structured Data** para mejor indexación
- **Sitemap** automático

## 🤝 **Contribuir**

1. Fork el proyecto
2. Crear rama para feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 **Licencia**

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 **Contacto**

- **Email**: jairo@example.com
- **LinkedIn**: [Jairo Alexandro](https://www.linkedin.com/in/jairo-alexandro)
- **GitHub**: [@JairoAlexandro](https://github.com/JairoAlexandro)

## 🙏 **Agradecimientos**

- [React](https://reactjs.org/) - Biblioteca de UI
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [Vite](https://vitejs.dev/) - Build tool
- [Lucide](https://lucide.dev/) - Iconos

---

⭐ **Si te gusta este proyecto, ¡dale una estrella en GitHub!**
