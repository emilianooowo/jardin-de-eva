// app/layout.tsx
import type { Metadata } from 'next'
import { Playfair_Display, Jost } from 'next/font/google'
import Header from '@/components/header/header'
import Footer from '@/components/Footer/Footer'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-playfair',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
})

export const metadata: Metadata = {
  title: 'Jardín de Eva',
  description: 'Florería Y Cafetería',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${jost.variable}`}>
      <body>
        <Header />
        <main style={{ marginTop: '70px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}