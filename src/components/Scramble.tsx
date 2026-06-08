'use client'
import { useScramble } from '@/hooks/useScramble'

interface Props {
  text: string
  className?: string
}

/** Texte avec scramble au survol (desktop uniquement, géré dans le hook). */
export default function Scramble({ text, className }: Props) {
  const ref = useScramble<HTMLSpanElement>(text)
  return <span ref={ref} className={className}>{text}</span>
}
