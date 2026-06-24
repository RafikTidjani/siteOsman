import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 24,
        gap: 18,
      }}
    >
      <p style={{ fontSize: 'clamp(72px, 18vw, 160px)', lineHeight: 1, fontWeight: 800 }}>
        4<span style={{ color: '#c8321a' }}>0</span>4
      </p>
      <Link
        href="/"
        style={{
          fontSize: 13,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#ede8df',
          background: '#1a1714',
          borderRadius: 999,
          padding: '12px 24px',
          textDecoration: 'none',
        }}
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
