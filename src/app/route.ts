import { readFileSync } from 'fs'
import { join } from 'path'

// Sert le site statique autonome (public/site.html) directement à la racine "/".
// Lu au build (force-static) puis servi tel quel — fiable en dev, prod et Vercel.
export const dynamic = 'force-static'

const html = readFileSync(join(process.cwd(), 'public', 'site.html'), 'utf8')

export function GET() {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
