import type { Metadata } from 'next'
import './globals.css'
import { AppShell } from '@/components/layout/AppShell'

export const metadata: Metadata = {
  title: {
    default: 'Osman Adi — Direction Artistique & Design Graphique',
    template: '%s | Osman Adi',
  },
  description:
    'Portfolio de Osman Adi, directeur artistique et designer graphique. Branding, identité visuelle, édition et direction artistique.',
  keywords: [
    'direction artistique',
    'design graphique',
    'branding',
    'identité visuelle',
    'portfolio',
    'Osman Adi',
  ],
  metadataBase: new URL('https://adiosmandesign.fr'),
  openGraph: {
    title: 'Osman Adi — Direction Artistique',
    description: 'Portfolio de Osman Adi, directeur artistique et designer graphique.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Osman Adi',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Osman Adi — Direction Artistique',
    description: 'Portfolio de Osman Adi, directeur artistique et designer graphique.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased font-body" suppressHydrationWarning>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  )
}
