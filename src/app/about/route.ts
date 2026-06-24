import { readFileSync } from 'fs'
import { join } from 'path'

// /about sert le même site autonome (navigation interne gérée en JS dans le HTML).
export const dynamic = 'force-static'

const html = readFileSync(join(process.cwd(), 'public', 'site.html'), 'utf8')

export function GET() {
  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}
