'use client'
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { T } from '@/lib/translations'

export type Lang = 'fr' | 'en'

interface LangCtx {
  lang: Lang
  toggle: () => void
  setLang: (l: Lang) => void
  t: (typeof T)['fr']
}

const Ctx = createContext<LangCtx | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('fr')

  // Restore preference (client only)
  useEffect(() => {
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('oa-lang') : null
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydrate preference from storage (client-only)
    if (saved === 'fr' || saved === 'en') setLangState(saved)
  }, [])

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try { window.localStorage.setItem('oa-lang', l) } catch {}
    if (typeof document !== 'undefined') document.documentElement.lang = l
  }, [])

  const toggle = useCallback(() => setLang(lang === 'fr' ? 'en' : 'fr'), [lang, setLang])

  return (
    <Ctx.Provider value={{ lang, toggle, setLang, t: T[lang] }}>
      {children}
    </Ctx.Provider>
  )
}

export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within <LangProvider>')
  return ctx
}
