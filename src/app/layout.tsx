import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Osman Adi — Direction Artistique & Design Graphique',
  description:
    'Portfolio de Osman Adi, directeur artistique et designer graphique. Branding, identite visuelle, edition et direction artistique.',
  keywords: [
    'direction artistique',
    'design graphique',
    'branding',
    'identite visuelle',
    'portfolio',
    'Osman Adi',
  ],
  openGraph: {
    title: 'Osman Adi — Direction Artistique',
    description: 'Portfolio de Osman Adi, directeur artistique et designer graphique.',
    type: 'website',
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
        {/* Preload fonts from Fontshare */}
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=satoshi@300,400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
