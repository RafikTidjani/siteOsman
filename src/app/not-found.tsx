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
        padding: '24px',
        gap: '18px',
      }}
    >
      <p style={{ fontFamily: 'var(--fd), sans-serif', fontSize: 'clamp(96px, 22vw, 200px)', lineHeight: 1, color: 'var(--ink)' }}>
        4<span style={{ color: 'var(--red)' }}>0</span>4
      </p>
      <p style={{ fontFamily: 'var(--fm), monospace', fontSize: '13px', letterSpacing: '0.1em', color: 'var(--mid)' }}>
        Page introuvable
      </p>
      <Link
        href="/"
        style={{
          fontFamily: 'var(--fm), monospace',
          fontSize: '12px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'var(--bg)',
          background: 'var(--ink)',
          borderRadius: '999px',
          padding: '12px 24px',
          minHeight: '44px',
          display: 'inline-flex',
          alignItems: 'center',
        }}
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  )
}
