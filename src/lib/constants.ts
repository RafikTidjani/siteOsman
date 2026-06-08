export interface ParcoursItem {
  year: string
  badge: { fr: string; en: string }
  role: { fr: string; en: string }
  where: string
  period: { fr: string; en: string }
  type: 'cn' | 'cd' | 'cm' | 'ch'
}

export const PARCOURS: ParcoursItem[] = [
  { year: '20', badge: { fr: 'Formation', en: 'Education' },  role: { fr: 'Bac STI2D', en: 'High School Dipl.' },       where: 'Lycée Jean-Mermoz',     period: { fr: '2019–2020 · Mention AB', en: '2019–2020' }, type: 'cn' },
  { year: '22', badge: { fr: 'Formation', en: 'Education' },  role: { fr: 'DUT Multimédia', en: 'Multimedia Degree' },   where: 'IUT Mulhouse',          period: { fr: '2020–2022', en: '2020–2022' },              type: 'cn' },
  { year: '22', badge: { fr: 'Stage', en: 'Internship' },     role: { fr: 'Asst. Communication', en: 'Comm. Assistant' },where: 'BMW Motorrad',          period: { fr: 'Avr.–Juin 2022', en: 'Apr.–Jun 2022' },     type: 'cd' },
  { year: '23', badge: { fr: 'Bachelor', en: 'Bachelor' },    role: { fr: 'Comm. & Webmarketing', en: 'Comm. & Web Mkt' },where: 'ESGM Mulhouse',         period: { fr: '2022–2023', en: '2022–2023' },              type: 'cm' },
  { year: '23', badge: { fr: 'Alternance', en: 'Work-study' },role: { fr: 'Chargé de Comm.', en: 'Comm. Manager' },      where: 'BIGMAT Bringel',        period: { fr: 'Sept. 2022–Juin 2023', en: 'Sep 2022–Jun 2023' }, type: 'cm' },
  { year: '24', badge: { fr: 'Master', en: 'Master' },        role: { fr: 'Design Graphique', en: 'Graphic Design' },    where: 'ESMA Montpellier',      period: { fr: '2023–2024', en: '2023–2024' },              type: 'cd' },
  { year: '25', badge: { fr: 'Stage · DA', en: 'Internship · AD' }, role: { fr: 'DA Junior', en: 'Junior AD' },          where: 'Green Dorm Group — CH', period: { fr: 'Juil.–Nov. 2025', en: 'Jul.–Nov. 2025' },   type: 'ch' },
]

export const TOOLS_PRIMARY = ['Photoshop', 'Illustrator', 'After Effects', 'InDesign']
export const TOOLS_SECONDARY = ['Premiere Pro', 'Media Encoder', 'Canva', 'Miro', 'Photographie']

export const DISCIPLINES = {
  fr: [
    { l: 'Direction Artistique', it: false, rd: false },
    { l: 'Branding', it: false, rd: true },
    { l: 'Motion Design', it: false, rd: false },
    { l: 'Design Éditorial', it: true, rd: false },
    { l: 'Identité Visuelle', it: false, rd: false },
    { l: 'Illustration', it: true, rd: true },
  ],
  en: [
    { l: 'Art Direction', it: false, rd: false },
    { l: 'Branding', it: false, rd: true },
    { l: 'Motion Design', it: false, rd: false },
    { l: 'Editorial Design', it: true, rd: false },
    { l: 'Visual Identity', it: false, rd: false },
    { l: 'Illustration', it: true, rd: true },
  ],
}

export const EMAIL = 'contact@adiosmandesign.fr'
export const SOCIALS = {
  cv: 'mailto:contact@adiosmandesign.fr?subject=Demande%20de%20CV',
  instagram: 'https://www.instagram.com/osman_adi/',
  linkedin: 'https://www.linkedin.com/in/osman-adi-b75047209/',
}
