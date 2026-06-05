'use client'

/**
 * Outils de typewriter "lettre par lettre" pilotés en vanilla JS.
 * Utilisés dans le Hero et la TypeBar via useEffect.
 */

const CURSOR = '<span class="cur">_</span>'

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/** Écrit `text` lettre par lettre dans `el`. */
export async function typeInto(
  el: HTMLElement,
  text: string,
  speed = 42,
  cursor = true,
  signal?: { cancelled: boolean }
) {
  let acc = ''
  for (const ch of text) {
    if (signal?.cancelled) return
    acc += ch
    el.innerHTML = escapeHtml(acc) + (cursor ? CURSOR : '')
    await sleep(speed + Math.random() * speed * 0.35)
  }
  if (signal?.cancelled) return
  // état final : sans curseur résiduel
  el.innerHTML = cursor ? escapeHtml(text) : escapeHtml(text)
}

/** Efface le contenu de `el` de droite à gauche. */
export async function eraseEl(
  el: HTMLElement,
  speed = 18,
  signal?: { cancelled: boolean }
) {
  let acc = el.textContent ?? ''
  while (acc.length > 0) {
    if (signal?.cancelled) return
    acc = acc.slice(0, -1)
    el.innerHTML = escapeHtml(acc) + CURSOR
    await sleep(speed)
  }
}

export { sleep as typeSleep }
