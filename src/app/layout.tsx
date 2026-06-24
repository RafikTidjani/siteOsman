import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://adiosmandesign.fr'),
  title: 'OSMAN ADI — Direction Artistique',
  description:
    "Portfolio d'Osman Adi, directeur artistique junior basé à Mulhouse. Branding, motion design et design éditorial. Disponible pour alternance 2026.",
  robots: { index: true, follow: true },
}

// L'application Next sert principalement le site statique public/site.html
// (réécritures dans next.config.ts). Ce layout n'habille que les routes
// résiduelles (404, etc.).
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, background: '#ede8df', color: '#1a1714', fontFamily: 'system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
