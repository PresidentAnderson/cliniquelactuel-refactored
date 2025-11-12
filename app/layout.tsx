import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Clinique l\'Actuel - Soins de Santé Professionnels à Montréal',
  description: 'Clinique l\'Actuel offre des services médicaux professionnels à Montréal. Prenez rendez-vous en ligne ou consultez sans rendez-vous. Heures d\'ouverture flexibles.',
  keywords: 'clinique, santé, Montréal, rendez-vous médical, consultation sans rendez-vous, soins de santé',
  authors: [{ name: 'Clinique l\'Actuel' }],
  openGraph: {
    title: 'Clinique l\'Actuel - Soins de Santé Professionnels',
    description: 'Services médicaux professionnels à Montréal avec rendez-vous en ligne.',
    url: 'https://cliniquelactuel.com',
    siteName: 'Clinique l\'Actuel',
    locale: 'fr_CA',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
