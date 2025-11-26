# TechNova 🚀

Tienda online moderna de productos tecnológicos y servicios de TI, construida con las últimas tecnologías web.

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React con App Router
- **TypeScript** - Tipado estático para JavaScript
- **Tailwind CSS** - Framework de CSS utility-first
- **Framer Motion** - Librería de animaciones
- **React Icons** - Iconos modernos para React

## ✨ Características

- ✅ Diseño moderno y responsivo
- ✅ Animaciones suaves y atractivas
- ✅ Catálogo de productos con filtros
- ✅ Sección de servicios profesionales
- ✅ Carrito de compras
- ✅ Testimonios de clientes
- ✅ Newsletter
- ✅ SEO optimizado
- ✅ Rendimiento optimizado

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone [tu-repositorio]
cd TechNova
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
TechNova/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── productos/         # Página de productos
│   ├── servicios/         # Página de servicios
│   └── carrito/           # Página del carrito
├── components/            # Componentes reutilizables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ProductCard.tsx
│   ├── ServiceCard.tsx
│   └── ...
├── data/                  # Datos de productos y servicios
│   ├── products.ts
│   └── services.ts
├── types/                 # Tipos de TypeScript
│   └── index.ts
└── public/               # Archivos estáticos
```

## 🎨 Personalización

### Colores

Los colores se pueden personalizar en `tailwind.config.js`:

```js
colors: {
  primary: {
    // Tus colores personalizados
  }
}
```

### Productos y Servicios

Edita los archivos en la carpeta `data/`:
- `data/products.ts` - Productos de la tienda
- `data/services.ts` - Servicios ofrecidos

## 🚀 Despliegue

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa tu proyecto en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js y configurará todo

### Otros Proveedores

```bash
# Construir para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📝 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 📧 Contacto

- Email: info@technova.com
- Website: [www.technova.com](https://www.technova.com)

---

Hecho con ❤️ por el equipo de TechNova

