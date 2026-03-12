import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    // Cambia esta URL por el dominio final que compren (ej. el .com.mx)
    const baseUrl = 'https://jardindeeva.com.mx'

    return [
        {
            url: `${baseUrl}`, // Página de Inicio
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0, // Prioridad máxima (100%)
        },
        {
            url: `${baseUrl}/catalogo`, // Página del Catálogo
            lastModified: new Date(),
            changeFrequency: 'weekly', // Le decimos a Google que pase seguido porque el stock/precios cambian
            priority: 0.9, // Súper importante para que la gente encuentre los productos
        },
        {
            url: `${baseUrl}/nosotros`, // Página de Nosotros / Historia
            lastModified: new Date(),
            changeFrequency: 'yearly', // La historia y misión casi nunca cambian
            priority: 0.6, // Prioridad normal
        },
    ]
}