'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import styles from './sobre-nosotros.module.css'

const valores = [
    { palabra: 'Ternura', desc: 'Transmitimos calidez en cada creación.', flor: '/flores-valores/flor-1.svg' },
    { palabra: 'Creatividad', desc: 'Innovamos con estilo propio.', flor: '/flores-valores/flor-2.svg' },
    { palabra: 'Cercanía', desc: 'Atendemos con amabilidad y empatía.', flor: '/flores-valores/flor-3.svg' },
    { palabra: 'Rapidez', desc: 'Respondemos y entregamos con eficiencia.', flor: '/flores-valores/flor-4.svg' },
    { palabra: 'Honestidad', desc: 'Actuamos con transparencia.', flor: '/flores-valores/flor-5.svg' },
    { palabra: 'Lealtad', desc: 'Construimos confianza duradera.', flor: '/flores-valores/flor-6.svg' },
    { palabra: 'Responsabilidad', desc: 'Cumplimos lo que prometemos.', flor: '/flores-valores/flor-7.svg' },
    { palabra: 'Calidad', desc: 'Garantizamos un resultado impecable.', flor: '/flores-valores/flor-8.svg' },
]

// Flores flotantes del hero — posición fija para SSR seguro
const heroFlores = [
    { glyph: '✿', top: '12%', left: '72%', size: '5rem', rot: '20deg', delay: '0s', dur: '6s' },
    { glyph: '✾', top: '30%', left: '85%', size: '3rem', rot: '-15deg', delay: '1s', dur: '7s' },
    { glyph: '✾', top: '55%', left: '78%', size: '2.5rem', rot: '5deg', delay: '0.5s', dur: '8s' },
    { glyph: '✿', top: '70%', left: '90%', size: '2rem', rot: '-30deg', delay: '1.5s', dur: '5.5s' },
    { glyph: '✾', top: '8%', left: '60%', size: '2.2rem', rot: '35deg', delay: '2s', dur: '9s' },
    { glyph: '✿', top: '80%', left: '68%', size: '3.5rem', rot: '-10deg', delay: '0.8s', dur: '7.5s' },
]

export default function SobreNosotrosV2() {
    const parallaxRef = useRef<HTMLDivElement>(null)

    const aboutPageSchema = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "Florist",
            "name": "Jardín de Eva",
            "description": "Jardín de Eva es una marca de diseño floral y café express en Tuxtla Gutiérrez. Creada para acompañar momentos con ternura y creatividad.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tuxtla Gutiérrez",
                "addressRegion": "Chiapas",
                "addressCountry": "MX"
            }
        }
    };

    useEffect(() => {
        // Scroll reveal
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

        // Parallax suave en flores del hero
        const handleScroll = () => {
            if (!parallaxRef.current) return
            const y = window.scrollY
            parallaxRef.current.style.transform = `translateY(${y * 0.25}px)`
        }
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <main className={styles.page}>
            {/* 2. Inyección de Meta-etiquetas y Script JSON-LD */}
            <title>Nuestra Historia | Jardín de Eva Florería</title>
            <meta name="description" content="Conoce la historia de Jardín de Eva, tu florería y café express. Descubre nuestros valores, misión y visión." />
            <Script
                id="schema-about-page"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
            />

            {/* ══════════ HERO ══════════ */}
            <section className={styles.hero}>
                <nav className={styles.breadcrumb} aria-label="Navegación">
                    <Link href="/" className={styles.breadcrumbLink}>Inicio</Link>
                    <span className={styles.breadcrumbSep}>›</span>
                    <span className={styles.breadcrumbCurrent}>Sobre nosotros</span>
                </nav>

                {/* flores con parallax */}
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

                <div className={styles.heroInner}>
                    <p className={`${styles.heroEyebrow} ${styles.reveal}`}>Nuestra historia</p>
                    <h1 className={`${styles.heroTitle} ${styles.reveal}`} style={{ '--delay': '80ms' } as React.CSSProperties}>
                        Jardín<br /><em>de Eva</em>
                    </h1>
                    <p className={`${styles.heroSub} ${styles.reveal}`} style={{ '--delay': '160ms' } as React.CSSProperties}>
                        Una marca de diseño floral y café express, creada para acompañar
                        momentos con ternura, creatividad y detalles de calidad.
                    </p>
                </div>
            </section>

            {/* ══════════ QUIÉNES SOMOS ══════════ */}
            <section className={styles.section}>
                <div className={styles.sectionFlor} aria-hidden="true">✾</div>
                <div className={styles.sectionInner}>
                    <div className={`${styles.stickyLabel} ${styles.reveal}`}>
                        <span className={styles.stickyNum}>01</span>
                        <span className={styles.stickyName}>¿Quiénes somos?</span>
                    </div>
                    <div className={styles.sectionBody}>
                        <p className={`${styles.bodyText} ${styles.reveal}`}>
                            Jardín de Eva es una marca de diseño floral y café express, creada
                            para acompañar momentos con ternura, creatividad y detalles de calidad.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════ ORIGEN ══════════ */}
            <section className={styles.section}>
                <div className={styles.sectionFlor} aria-hidden="true">✿</div>
                <div className={styles.sectionInner}>
                    <div className={`${styles.stickyLabel} ${styles.reveal}`}>
                        <span className={styles.stickyNum}>02</span>
                        <span className={styles.stickyName}>¿Cómo nació?</span>
                    </div>
                    <div className={styles.sectionBody}>
                        <p className={`${styles.bodyText} ${styles.reveal}`}>
                            Jardín de Eva nació del deseo de crear algo más que una florería.
                            La idea comenzó con el amor por las flores, los colores pastel y esa
                            sensación de ternura que solo un detalle bien hecho puede transmitir.
                        </p>
                        <p className={`${styles.bodyText} ${styles.reveal}`} style={{ '--delay': '80ms' } as React.CSSProperties}>
                            Con el tiempo entendí que regalar flores no es solo comprar un
                            producto, sino entregar un mensaje: amor, gratitud, apoyo, emoción
                            o incluso un <em>&quot;estoy contigo&quot;</em>.
                        </p>
                        <p className={`${styles.bodyText} ${styles.reveal}`} style={{ '--delay': '160ms' } as React.CSSProperties}>
                            Por eso quise construir un lugar donde cada arreglo se sienta especial,
                            donde se note la creatividad y el cariño, y que además ofrezca una
                            experiencia completa con un local y cafetería que hagan sentir a las
                            personas cómodas, felices y bien atendidas.
                        </p>
                    </div>
                </div>
            </section>

            {/* ══════════ VALORES ══════════ */}
            <section className={styles.valoresSection}>
                {/* flores de fondo decorativas */}
                <div className={styles.valoresBg} aria-hidden="true">
                    <span style={{ top: '10%', left: '5%', fontSize: '6rem', opacity: 0.06, transform: 'rotate(-20deg)' }}>✿</span>
                    <span style={{ top: '60%', left: '2%', fontSize: '4rem', opacity: 0.05, transform: 'rotate(10deg)' }}>✾</span>
                    <span style={{ top: '20%', right: '4%', fontSize: '5rem', opacity: 0.06, transform: 'rotate(25deg)' }}>✿</span>
                    <span style={{ bottom: '8%', right: '8%', fontSize: '7rem', opacity: 0.04, transform: 'rotate(-5deg)' }}>✾</span>
                </div>

                <div className={styles.valoresWrap}>
                    <div className={`${styles.valoresHeader} ${styles.reveal}`}>
                        <span className={styles.sectionNum}>03</span>
                        <h2 className={styles.sectionTitle}>Valores</h2>
                    </div>

                    <ul className={styles.valoresList}>
                        {valores.map(({ palabra, desc, flor }, i) => (
                            <li
                                key={palabra}
                                className={`${styles.valorItem} ${styles.reveal}`}
                                style={{ '--delay': `${i * 55}ms` } as React.CSSProperties}
                            >
                                <img
                                    src={flor}
                                    alt=""
                                    className={styles.valorFlor}
                                    aria-hidden="true"
                                />

                                <span className={styles.valorPalabra}>{palabra}</span>
                                <span className={styles.valorDesc}>{desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* ══════════ MISIÓN Y VISIÓN ══════════ */}
            <section className={styles.mvSection}>
                <div className={styles.mvFloresLeft} aria-hidden="true">✿</div>
                <div className={styles.mvFloresRight} aria-hidden="true">✾</div>

                <div className={styles.mvGrid}>
                    <div className={`${styles.mvCard} ${styles.reveal}`}>
                        <span className={styles.mvNum}>04</span>
                        <h2 className={styles.mvTitle}>Misión</h2>
                        <p className={styles.mvText}>
                            Brindar arreglos florales y detalles con estilo tierno y creativo,
                            cuidando cada elemento con amor, ofreciendo una atención rápida,
                            amable y cercana, para que cada cliente viva una experiencia bonita
                            y memorable antes, durante y después de su compra.
                        </p>
                    </div>

                    <div
                        className={`${styles.mvCard} ${styles.reveal}`}
                        style={{ '--delay': '140ms' } as React.CSSProperties}
                    >
                        <span className={styles.mvNum}>05</span>
                        <h2 className={styles.mvTitle}>Visión</h2>
                        <p className={styles.mvText}>
                            Ser una de las florerías y café express más reconocidos de Tuxtla
                            por su ternura, creatividad y excelente servicio, posicionándonos
                            como una marca confiable, cálida y líder en detalles florales,
                            regalos y eventos, creando un espacio donde las personas siempre
                            se sientan a gusto y quieran regresar.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    )
}