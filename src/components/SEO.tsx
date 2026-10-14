export default function SEO() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Dinstaire C.A.",
    "description": "Más de 40 años de experiencia en climatización profesional. Venta e instalación de aire acondicionado, proyectos corporativos y refrigeración industrial.",
    "url": "https://dinstaire.netlify.app",
    "telephone": "+58-424-3222919",
    "email": "info@dinstaire.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Avenida Intercomunal",
      "addressLocality": "Maracay",
      "addressRegion": "Aragua",
      "addressCountry": "VE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.2465",
      "longitude": "-67.5958"
    },
    "openingHours": "Mo-Fr 07:00-17:00, Sa 08:00-12:00",
    "priceRange": "$$",
    "image": "/proyectos/logo.jpg",
    "logo": "/proyectos/logo.jpg",
    "sameAs": [
      "https://www.instagram.com/dinstaire/",
      "https://facebook.com/dinstaire"
    ],
    "areaServed": {
      "@type": "State",
      "name": "Aragua"
    },
    "serviceType": [
      "Venta de equipos de aire acondicionado",
      "Proyectos corporativos",
      "Cálculo de carga térmica",
      "Instalación profesional",
      "Refrigeración industrial",
      "Mantenimiento"
    ],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "minValue": 10,
      "maxValue": 50
    },
    "foundingDate": "1984",
    "paymentAccepted": ["Cash", "Transfer", "Mobile Payment"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}