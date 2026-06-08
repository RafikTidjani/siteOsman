export type Tone = '' | 'r' | 'g'

export interface Chip { fr: string; en: string; tone: Tone }

export interface MediaItem {
  type: 'image' | 'video'
  src: string
  poster?: string
  contain?: boolean
  bg?: string
  label?: { fr: string; en: string }
}

export interface Project {
  key: string
  tags: string[]
  cardImage?: string
  cardVideoPlaceholder?: boolean
  cardContain?: boolean
  cardBg?: string
  barColor: string
  isNew: boolean
  year: string
  chips: Chip[]
  title: { fr: string; en: string }
  subtitle: { fr: string; en: string }
  context: { fr: string; en: string }
  missions: { fr: string[]; en: string[] }
  gallery: MediaItem[]
}

const img = (src: string, contain = false, bg?: string): MediaItem => ({ type: 'image', src, contain, bg })

export const PROJECTS: Project[] = [
  {
    key: 'internship',
    tags: ['editorial', 'design'],
    cardImage: '/assets/design/internship-main.jpg',
    barColor: 'var(--red)', isNew: true, year: '2025',
    chips: [{ fr: 'Éditorial', en: 'Editorial', tone: 'r' }, { fr: 'Data viz', en: 'Data viz', tone: 'r' }],
    title: { fr: 'My Internship in Data', en: 'My Internship in Data' },
    subtitle: { fr: 'Design Éditorial · 2025', en: 'Editorial Design · 2025' },
    context: {
      fr: "Poster éditorial réalisé à l'issue du stage chez Green Dorm Group (Suisse). Chaque forme visuelle encode une donnée du stage : 65 créations livrées, 936 corrections, 450h de production.",
      en: 'Editorial poster created at the end of the internship at Green Dorm Group (Switzerland). Each visual shape encodes a stage metric: 65 creations delivered, 936 corrections, 450h of production.',
    },
    missions: {
      fr: ['Design éditorial', 'Data visualisation', 'Typographie expressive', 'Composition'],
      en: ['Editorial design', 'Data visualisation', 'Expressive typography', 'Composition'],
    },
    gallery: [img('/assets/design/internship-1.jpg'), img('/assets/design/internship-2.jpg'), img('/assets/design/internship-3.jpg'), img('/assets/design/internship-4.jpg'), img('/assets/design/internship-5.jpg'), img('/assets/design/internship-6.jpg'), img('/assets/design/internship-7.jpg'), img('/assets/design/internship-8.jpg')],
  },
  {
    key: 'autrement',
    tags: ['design', 'affiche'],
    cardImage: '/assets/affichage/autrement-v1.jpg',
    barColor: 'var(--red)', isNew: true, year: '2026',
    chips: [{ fr: 'DA', en: 'AD', tone: 'r' }, { fr: 'Affiche', en: 'Poster', tone: 'r' }],
    title: { fr: 'Festival Autrement', en: 'Festival Autrement' },
    subtitle: { fr: 'Direction Artistique · 2026', en: 'Art Direction · 2026' },
    context: {
      fr: "Direction artistique complète pour le Festival des Arts & de la Création, Lille 2026. Thème : « L'art n'a pas de corps standard ». Deux versions d'affiche, déclinaisons print, mockups in situ.",
      en: 'Full art direction for the Festival of Arts & Creation, Lille 2026. Theme: "Art has no standard body". Two poster versions, print adaptations, in-situ mockups.',
    },
    missions: {
      fr: ['Direction artistique', 'Affiches V1 & V2', 'Déclinaisons print', 'Mockups'],
      en: ['Art direction', 'Posters V1 & V2', 'Print adaptations', 'Mockups'],
    },
    gallery: [img('/assets/affichage/autrement-v1.jpg'), img('/assets/affichage/autrement-v2.jpg'), img('/assets/affichage/autrement-mockup.jpg')],
  },
  {
    key: 'laproie',
    tags: ['affiche', 'design'],
    cardImage: '/assets/affichage/la-proie.jpg',
    barColor: 'var(--red)', isNew: false, year: '2024',
    chips: [{ fr: 'Affiche', en: 'Poster', tone: 'r' }, { fr: 'Cinéma', en: 'Cinema', tone: 'r' }],
    title: { fr: 'La Proie', en: 'La Proie' },
    subtitle: { fr: 'Affiche Cinéma · 2024', en: 'Film Poster · 2024' },
    context: {
      fr: "Affiche pour le court-métrage « La Proie » de Celikbas & Sedda. Composition axiale, fort contraste rouge brique sur fond encre. Jeu typographique entre la miniature romaine et le titre impactant.",
      en: 'Poster for the short film "La Proie" by Celikbas & Sedda. Axial composition, strong brick-red on ink contrast. Typographic play between the roman caption and the impactful title.',
    },
    missions: {
      fr: ['Conception affiche', 'Composition visuelle', 'Typographie cinéma'],
      en: ['Poster design', 'Visual composition', 'Cinema typography'],
    },
    gallery: [img('/assets/affichage/la-proie.jpg')],
  },
  {
    key: 'greendorm',
    tags: ['design', 'motion', 'branding'],
    cardImage: '/assets/green-dorm/mockup-haman.jpg',
    barColor: 'var(--red)', isNew: true, year: '2025',
    chips: [{ fr: 'Rebranding', en: 'Rebranding', tone: 'r' }, { fr: 'Motion', en: 'Motion', tone: 'r' }],
    title: { fr: 'Green Dorm Group', en: 'Green Dorm Group' },
    subtitle: { fr: 'Rebranding + Motion · 2025', en: 'Rebranding + Motion · 2025' },
    context: {
      fr: "Refonte complète de l'identité Green Dorm Group lors du stage DA en Suisse. Rebranding corporate, signalétique, motion design pour les réseaux sociaux, supports print & digital — 65 créations en 4 mois.",
      en: 'Full identity overhaul for Green Dorm Group during the AD internship in Switzerland. Corporate rebranding, signage, motion design for social media, print & digital supports — 65 creations in 4 months.',
    },
    missions: {
      fr: ['Rebranding', 'Signalétique', 'Motion design', 'Print & Digital'],
      en: ['Rebranding', 'Signage', 'Motion design', 'Print & Digital'],
    },
    gallery: [img('/assets/green-dorm/mockup-haman.jpg'), img('/assets/green-dorm/mockup-boonel.jpg'), img('/assets/green-dorm/flyer-recto.jpg'), img('/assets/green-dorm/kakemono.jpg'), img('/assets/green-dorm/vitrophanie.jpg'), img('/assets/green-dorm/totebag.jpg'), img('/assets/green-dorm/planche.jpg'), img('/assets/green-dorm/logo-haman.png', true), img('/assets/green-dorm/logo-boonel.png', true)],
  },
  {
    key: 'soyol',
    tags: ['branding'],
    cardImage: '/assets/soyol/mockup-rouge.jpg',
    barColor: 'var(--green)', isNew: false, year: '2024',
    chips: [{ fr: 'Branding', en: 'Branding', tone: 'g' }, { fr: 'Packaging', en: 'Packaging', tone: 'g' }],
    title: { fr: 'Soyol', en: 'Soyol' },
    subtitle: { fr: 'Branding · ESMA Montpellier', en: 'Branding · ESMA Montpellier' },
    context: {
      fr: "Identité visuelle complète pour un œuf mollet végétal dans le cadre d'Écotrophélia. Naming, logotype, packaging recto-verso, mascotte et univers de marque cohérent.",
      en: 'Full visual identity for a plant-based soft-boiled egg as part of Écotrophélia. Naming, logotype, double-sided packaging, mascot and a coherent brand universe.',
    },
    missions: {
      fr: ['Naming', 'Logo', 'Packaging', 'Mascotte', 'Univers de marque'],
      en: ['Naming', 'Logo', 'Packaging', 'Mascot', 'Brand universe'],
    },
    gallery: [img('/assets/soyol/mockup-rouge.jpg'), img('/assets/soyol/mockup-vert.jpg'), img('/assets/soyol/ambiance.jpg'), img('/assets/soyol/charte.jpg'), img('/assets/soyol/mascotte.jpg'), img('/assets/soyol/logo.png', true)],
  },
  {
    key: 'tennis',
    tags: ['branding'],
    cardImage: '/assets/tennis/logo-masc.png', cardContain: true, cardBg: '#c8e6d4',
    barColor: 'var(--green)', isNew: false, year: '2022',
    chips: [{ fr: 'Logo', en: 'Logo', tone: 'g' }, { fr: 'Charte', en: 'Guidelines', tone: 'g' }],
    title: { fr: 'Tennis Spirit', en: 'Tennis Spirit' },
    subtitle: { fr: 'Branding · Suisse', en: 'Branding · Switzerland' },
    context: {
      fr: "Identité visuelle pour une école de tennis suisse. Logo créé en formation MMI, refonte récente de la charte graphique complète lors du stage DA chez Green Dorm Group.",
      en: 'Visual identity for a Swiss tennis school. Logo created during the MMI degree, recent full brand-guideline redesign during the AD internship at Green Dorm Group.',
    },
    missions: {
      fr: ['Logo', 'Charte graphique', 'Déclinaisons produits'],
      en: ['Logo', 'Brand guidelines', 'Product adaptations'],
    },
    gallery: [img('/assets/tennis/logo-masc.png', true, 'var(--gbg)'), img('/assets/tennis/logo-fem.png', true, 'var(--gbg)'), img('/assets/tennis/charte.jpg'), img('/assets/tennis/gourde.jpg'), img('/assets/tennis/cap.jpg')],
  },
  {
    key: 'motion',
    tags: ['motion'],
    cardImage: '/assets/motion/poster-internship.jpg',
    cardVideoPlaceholder: true,
    barColor: 'var(--mid)', isNew: true, year: '2024–25',
    chips: [{ fr: 'AE', en: 'AE', tone: '' }, { fr: 'Pr', en: 'Pr', tone: '' }],
    title: { fr: 'Motion Design', en: 'Motion Design' },
    subtitle: { fr: 'Animation · 2024–2025', en: 'Animation · 2024–2025' },
    context: {
      fr: "Animations de branding et d'interface réalisées sous After Effects & Premiere Pro. Habillage motion, transitions, exports web et réseaux sociaux pour différents projets.",
      en: 'Branding and interface animations created with After Effects & Premiere Pro. Motion design, transitions, web and social-media exports across several projects.',
    },
    missions: {
      fr: ['After Effects', 'Premiere Pro', 'Motion branding', 'Export web'],
      en: ['After Effects', 'Premiere Pro', 'Motion branding', 'Web export'],
    },
    gallery: [
      { type: 'video', src: '/assets/motion/internship-motion.mp4', poster: '/assets/motion/poster-internship.jpg', label: { fr: 'Internship in Data', en: 'Internship in Data' } },
      { type: 'video', src: '/assets/motion/anime-web.mp4', poster: '/assets/motion/poster-anime.jpg', label: { fr: 'Anime Web', en: 'Anime Web' } },
      { type: 'video', src: '/assets/motion/montpellier.mp4', poster: '/assets/motion/poster-montpellier.jpg', label: { fr: 'Montpellier', en: 'Montpellier' } },
    ],
  },
  {
    key: 'logommi',
    tags: ['branding'],
    cardImage: '/assets/mmi/logo-sombre.png', cardContain: true, cardBg: '#1a1714',
    barColor: 'var(--mid)', isNew: false, year: '2022',
    chips: [{ fr: 'Logo', en: 'Logo', tone: '' }, { fr: 'IUT', en: 'IUT', tone: '' }],
    title: { fr: 'Logo MMI', en: 'MMI Logo' },
    subtitle: { fr: 'Identité · IUT Mulhouse', en: 'Identity · IUT Mulhouse' },
    context: {
      fr: "Création du logotype MMI (Métiers du Multimédia et de l'Internet) pour l'IUT de Mulhouse. Projet de design d'identité en formation DUT : versions positives/négatives et charte.",
      en: 'Creation of the MMI logotype (Multimedia & Internet) for IUT Mulhouse. An identity-design project during the DUT degree: positive/negative versions and guidelines.',
    },
    missions: {
      fr: ['Logotype', 'Identité visuelle', 'Charte graphique'],
      en: ['Logotype', 'Visual identity', 'Brand guidelines'],
    },
    gallery: [img('/assets/mmi/logo-sombre.png', true, '#1a1714'), img('/assets/mmi/logo-clair.png', true, '#ede8df'), img('/assets/mmi/logo-typo-sombre.png', true, '#1a1714'), img('/assets/mmi/charte.png', true, '#ede8df'), img('/assets/mmi/ancien-logo.png', true, '#ede8df')],
  },
]
