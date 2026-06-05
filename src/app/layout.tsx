import type { Metadata } from 'next'
import { Bebas_Neue, DM_Serif_Display, DM_Mono, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import { LangProvider } from '@/hooks/useLang'

const fd = Bebas_Neue({ subsets: ['latin'], weight: '400', variable: '--fd', display: 'swap' })
const fs = DM_Serif_Display({ subsets: ['latin'], weight: '400', style: 'italic', variable: '--fs', display: 'swap' })
const fm = DM_Mono({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--fm', display: 'swap' })
const fb = Bricolage_Grotesque({ subsets: ['latin'], weight: ['300', '400', '600', '800'], variable: '--fb', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://adiosmandesign.fr'),
  title: {
    default: 'Osman Adi — Direction Artistique & Design Graphique',
    template: '%s · Osman Adi',
  },
  description:
    'Portfolio de Osman Adi, directeur artistique & designer graphique. Branding, identité visuelle, design éditorial et motion design.',
  keywords: ['direction artistique', 'design graphique', 'branding', 'identité visuelle', 'motion design', 'Osman Adi'],
  openGraph: {
    title: 'Osman Adi — Direction Artistique & Design Graphique',
    description: 'Portfolio de Osman Adi, directeur artistique & designer graphique.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Osman Adi',
  },
  twitter: { card: 'summary_large_image', title: 'Osman Adi — Direction Artistique' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${fd.variable} ${fs.variable} ${fm.variable} ${fb.variable}`}>
      <body>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}
