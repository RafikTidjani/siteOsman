'use client'
import { useRouter } from 'next/navigation'
import { useLang } from '@/hooks/useLang'

export default function CtaBand() {
  const { t } = useLang()
  const router = useRouter()
  return (
    <div className="ctaband">
      <div className="ctal">
        <span className="ctalbl">{t.ctalbl}</span>
        <span className="ctah">{t.ctah}</span>
        <span className="ctasub">{t.ctasub}</span>
      </div>
      <button className="ctabtn" onClick={() => router.push('/about')} aria-label={t.ctabtn}>
        {t.ctabtn}
      </button>
    </div>
  )
}
