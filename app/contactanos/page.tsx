'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import styles from './contactanos.module.css'

// ¡ELIMINADO el export const metadata de aquí para que no de error!

const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: 'Jardín de Eva',
    telephone: '+529613706653',
    email: 'jardindeeva19@gmail.com',
    address: {
        '@type': 'PostalAddress',
        streetAddress: 'Av. Mérida entre Taxco y Guanajuato 380B, Residencial La Hacienda',
        addressLocality: 'Tuxtla Gutiérrez',
        addressRegion: 'Chiapas',
        postalCode: '29030',
        addressCountry: 'MX',
    },
    url: 'https://jardindeeva.com.mx/contactanos', // Cambia esto por tu dominio real
}

/* ── Flores flotantes del hero (posiciones fijas para SSR seguro) ── */
const heroFlores = [
    { glyph: '✿', top: '14%', left: '68%', size: '4.5rem', rot: '18deg', delay: '0s', dur: '6s' },
    { glyph: '✾', top: '35%', left: '82%', size: '3rem', rot: '-14deg', delay: '1s', dur: '7.5s' },
    { glyph: '✾', top: '58%', left: '75%', size: '2.5rem', rot: '6deg', delay: '0.5s', dur: '8s' },
    { glyph: '✿', top: '72%', left: '88%', size: '2rem', rot: '-28deg', delay: '1.5s', dur: '5.5s' },
    { glyph: '✾', top: '10%', left: '57%', size: '2.2rem', rot: '32deg', delay: '2s', dur: '9s' },
    { glyph: '✿', top: '82%', left: '65%', size: '3.2rem', rot: '-8deg', delay: '0.8s', dur: '7s' },

]

export default function Contacto() {
    const parallaxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const reveals = document.querySelectorAll(`.${styles.reveal}`)
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.1 }
        )
        reveals.forEach((el) => observer.observe(el))

        const handleScroll = () => {
            if (!parallaxRef.current) return
            parallaxRef.current.style.transform = `translateY(${window.scrollY * 0.22}px)`
        }
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <main className={styles.page}>
            {/* ── INYECCIÓN SEO ON-PAGE (AQUÍ ESTÁ LA MAGIA) ── */}
            <title>Contáctanos | Jardín de Eva</title>
            <meta name="description" content="Visítanos en Residencial La Hacienda, Tuxtla Gutiérrez. Contáctanos por WhatsApp, correo o Instagram." />

            <Script
                id="schema-local-business"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />

            {/* ══ HERO ══ */}
            <section className={styles.hero}>
                <div className={styles.heroFlores} ref={parallaxRef} aria-hidden="true">
                    {heroFlores.map((f, i) => (
                        <span
                            key={i}
                            className={styles.floatingFlor}
                            style={{
                                top: f.top,
                                left: f.left,
                                fontSize: f.size,
                                '--rot': f.rot,
                                '--dur': f.dur,
                                '--delay': f.delay,
                            } as React.CSSProperties}
                        >
                            {f.glyph}
                        </span>
                    ))}
                </div>

                <nav className={styles.breadcrumb} aria-label="Navegación">
                    <Link href="/" className={styles.breadcrumbLink}>Inicio</Link>
                    <span className={styles.breadcrumbSep} aria-hidden="true">›</span>
                    <span className={styles.breadcrumbCurrent}>Contáctanos</span>
                </nav>

                <div className={styles.heroInner}>
                    <h1 className={`${styles.heroTitle} ${styles.reveal}`} style={{ '--delay': '80ms' } as React.CSSProperties}>
                        Contáctanos
                    </h1>
                    <p className={`${styles.heroSub} ${styles.reveal}`} style={{ '--delay': '160ms' } as React.CSSProperties}>
                        Escríbenos, llámanos o visítanos en nuestra tienda.
                    </p>
                </div>
            </section>

            {/* ══ CONTENIDO ══ */}
            <section className={`${styles.content} ${styles.reveal}`} style={{ '--delay': '80ms' } as React.CSSProperties}>
                <div className={styles.grid}>

                    <div className={styles.mapWrap}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d8196.961541373024!2d-93.1406521203248!3d16.762651496656897!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDQ1JzQ4LjYiTiA5M8KwMDgnMDMuOSJX!5e0!3m2!1sen!2smx!4v1773353813174!5m2!1sen!2smx"
                            title="Ubicación Jardín de Eva"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className={styles.infoCard}>
                        <a href="tel:+529613706653" className={styles.contactItem}>
                            <span className={styles.iconBox}>
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 4a1 1 0 011-1h3.49a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.19 2.2z" />
                                </svg>
                            </span>
                            <div className={styles.contactText}>
                                <span className={styles.contactLabel}>Teléfono / WhatsApp</span>
                                <span className={styles.contactValue}>+52 961 370 6653</span>
                            </div>
                            <span className={styles.arrow} aria-hidden="true">›</span>
                        </a>

                        <div className={styles.divider} />

                        <a href="mailto:jardindeeva19@gmail.com" className={styles.contactItem}>
                            <span className={styles.iconBox}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                    <path d="m2 7 10 7 10-7" />
                                </svg>
                            </span>
                            <div className={styles.contactText}>
                                <span className={styles.contactLabel}>Correo electrónico</span>
                                <span className={styles.contactValue}>jardindeeva19@gmail.com</span>
                            </div>
                            <span className={styles.arrow} aria-hidden="true">›</span>
                        </a>

                        <div className={styles.divider} />

                        <a href="https://www.instagram.com/_jardindeeva_/" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                            <span className={styles.iconBox}>
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                </svg>
                            </span>
                            <div className={styles.contactText}>
                                <span className={styles.contactLabel}>Instagram</span>
                                <span className={styles.contactValue}>@_jardindeeva_</span>
                            </div>
                            <span className={styles.arrow} aria-hidden="true">›</span>
                        </a>

                        <div className={styles.divider} />

                        <a href="https://www.facebook.com/profile.php?id=61585013472323" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                            <span className={styles.iconBox}>
                                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.874v2.276h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                                </svg>
                            </span>
                            <div className={styles.contactText}>
                                <span className={styles.contactLabel}>Facebook</span>
                                <span className={styles.contactValue}>Jardín de Eva</span>
                            </div>
                            <span className={styles.arrow} aria-hidden="true">›</span>
                        </a>

                        <div className={styles.divider} />

                        <a href="https://maps.app.goo.gl/g1XbtHXE8YShNCtk9" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                            <span className={styles.iconBox}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                    <circle cx="12" cy="9" r="2.5" />
                                </svg>
                            </span>
                            <div className={styles.contactText}>
                                <span className={styles.contactLabel}>Dirección</span>
                                <span className={styles.contactValue}>
                                    Av. Mérida 380B, Residencial La Hacienda<br />
                                    Tuxtla Gutiérrez, Chiapas. C.P. 29030
                                </span>
                            </div>
                            <span className={styles.arrow} aria-hidden="true">›</span>
                        </a>

                    </div>
                </div>
            </section>
        </main>
    )
}