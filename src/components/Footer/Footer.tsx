'use client'
import { EMAIL } from '@/lib/constants'
import { useLang } from '@/hooks/useLang'
import styles from './Footer.module.css'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className={styles.footer}>
      <span className={styles.left}>© 2026 Osman Adi</span>
      <a href={`mailto:${EMAIL}`} className={styles.mid}>{EMAIL}</a>
      <span className={styles.right}>
        {lang === 'fr' ? 'Mulhouse · France' : 'Mulhouse · France'}
      </span>
    </footer>
  )
}
