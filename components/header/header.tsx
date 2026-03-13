'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import styles from './header.module.css'

const socialLinks = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/_jardindeeva_/',
        path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
    },
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/profile.php?id=61585013472323',
        path: 'M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.791-4.697 4.533-4.697 1.313 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.874v2.276h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z'
    },
    {
        label: 'Teléfono',
        href: 'tel:9613706653',
        path: 'M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.85 21 3 13.15 3 4a1 1 0 011-1h3.49a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.19 2.2z'
    },
    {
        label: 'Correo',
        href: 'mailto:jardindeeva19@gmail.com',
        path: 'M2 4h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 2v.01L12 13 22 6.01V6H2zm20 2.236-9.445 6.72a1 1 0 0 1-1.11 0L2 8.236V18h20V8.236z'
    }
]

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = useCallback(() => {
        setMenuOpen(false)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMenu()
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [closeMenu])

    return (
        <>
            {/* ── HEADER ── */}
            <header className={styles.header}>
                {/* Lado Izquierdo: Hamburguesa + Logo */}
                <div className={styles.leftSection}>
                    <button
                        className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <Link href="/" className={styles.logo}>
                        <img src="je.png" alt="Jardín de Eva" />
                    </Link>
                </div>

                {/* Lado Derecho: Iconos Sociales */}
                <div className={styles.socialBar}>
                    {socialLinks.map(({ label, href, path }) => (
                        <a key={label} href={href} className={styles.socialLink} aria-label={label}>
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d={path} />
                            </svg>
                        </a>
                    ))}
                </div>
            </header>

            <div
                className={`${styles.overlay} ${menuOpen ? styles.overlayVisible : ''}`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            <aside className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ''}`}>
                <nav>
                    <Link href="/" className={styles.navItem} onClick={closeMenu}>
                        Inicio
                    </Link>
                    <Link href="/sobre-nosotros" className={styles.navItem} onClick={closeMenu}>
                        Sobre Nosotros
                    </Link>
                    <Link href="/flores" className={styles.navItem} onClick={closeMenu}>
                        Flores
                    </Link>
                    <Link href="/contactanos" className={styles.navItem} onClick={closeMenu}>
                        Contáctanos
                    </Link>
                </nav>
            </aside>
        </>
    )
}