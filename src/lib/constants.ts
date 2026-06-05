export interface ParcoursItem {
  year: string
  badge: string
  role: string
  where: string
  period: string
  type: 'cn' | 'cd' | 'cm' | 'ch'
}

export const PARCOURS: ParcoursItem[] = [
  { year: '20', badge: 'Formation',  role: 'Bac STI2D — ITEC',          where: 'Lycée Jean-Mermoz',       period: '2019–2020',           type: 'cn' },
  { year: '22', badge: 'Formation',  role: 'DUT Métiers du Multimédia', where: 'IUT Mulhouse',            period: '2020–2022',           type: 'cn' },
  { year: '22', badge: 'Stage',      role: 'Assistant Communication',   where: 'BMW Motorrad',            period: 'Avr.–Juin 2022',      type: 'cd' },
  { year: '23', badge: 'Bachelor',   role: 'Com. & Webmarketing',       where: 'ESGM Mulhouse',           period: '2022–2023',           type: 'cm' },
  { year: '23', badge: 'Alternance', role: 'Chargé de Communication',   where: 'BIGMAT Bringel',          period: 'Sept.2022–Juin 2023', type: 'cm' },
  { year: '24', badge: 'Master',     role: 'Design Graphique & Com.',   where: 'ESMA Montpellier',        period: '2023–2024',           type: 'cd' },
  { year: '25', badge: 'Stage · DA', role: 'Directeur Artistique Jr.',  where: 'Green Dorm Group — CH',   period: 'Juil.–Nov. 2025',     type: 'ch' },
]

export const TOOLS = ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Premiere Pro', 'Media Encoder', 'Canva', 'Miro']
export const TOOLS_PRIMARY = ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Premiere Pro']

export const DISCIPLINES = {
  fr: ['Direction Artistique', 'Branding', 'Motion Design', 'Design Éditorial', 'Identité Visuelle', 'Illustration'],
  en: ['Art Direction', 'Branding', 'Motion Design', 'Editorial Design', 'Visual Identity', 'Illustration'],
}
// index aligné sur DISCIPLINES : style italique / accent rouge
export const DISC_ITALIC = [false, false, false, true, false, true]
export const DISC_RED    = [false, true, false, false, false, true]

export const EMAIL = 'ademetrafik@gmail.com'
