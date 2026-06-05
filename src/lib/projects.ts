export interface Project {
  key: string
  tags: string[]
  cardImage: string
  cardBg?: string
  cardContain?: boolean
  barColor: string
  isNew: boolean
  title: { fr: string; en: string }
  subtitle: { fr: string; en: string }
  context: { fr: string; en: string }
  missions: { fr: string[]; en: string[] }
  gallery: string[]
}

export const PROJECTS: Project[] = [
  {
    key: 'internship',
    tags: ['editorial', 'design'],
    cardImage: '/assets/design/internship-main.jpg',
    barColor: 'var(--red)',
    isNew: true,
    title:   { fr: 'My Internship in Data',  en: 'My Internship in Data' },
    subtitle:{ fr: 'Design Éditorial · Stage Green Dorm 2025', en: 'Editorial Design · Green Dorm Internship 2025' },
    context: { fr: "Poster éditorial réalisé à l'issue du stage chez Green Dorm Group à Pratteln. Chaque forme représente une activité du stage, mise à l'échelle proportionnellement au temps passé.", en: "Editorial poster created at the end of the internship at Green Dorm Group, Pratteln. Each shape represents a stage activity, scaled proportionally to time spent." },
    missions:{ fr: ['Design éditorial', 'Data visualisation', 'Typographie', 'Composition'], en: ['Editorial design', 'Data visualisation', 'Typography', 'Composition'] },
    gallery: ['/assets/design/internship-1.jpg', '/assets/design/internship-2.jpg', '/assets/design/internship-3.jpg', '/assets/design/internship-4.jpg', '/assets/design/internship-5.jpg', '/assets/design/internship-6.jpg', '/assets/design/internship-7.jpg', '/assets/design/internship-8.jpg'],
  },
  {
    key: 'autrement',
    tags: ['design', 'affiche'],
    cardImage: '/assets/affichage/autrement-v1.jpg',
    barColor: 'var(--red)',
    isNew: true,
    title:   { fr: 'Festival Autrement', en: 'Festival Autrement' },
    subtitle:{ fr: 'Direction Artistique · Lille 2026', en: 'Art Direction · Lille 2026' },
    context: { fr: "Direction artistique pour le Festival des Arts & de la Création, Lille 2026. Thème : L'art n'a pas de corps standard. Deux versions d'affiche et déclinaisons print.", en: "Art direction for the Festival of Arts & Creation, Lille 2026. Theme: Art has no standard body. Two poster versions and print adaptations." },
    missions:{ fr: ['Direction artistique', 'Affiche V1 & V2', 'Déclinaisons print', 'Mockup in situ'], en: ['Art direction', 'Poster V1 & V2', 'Print adaptations', 'In situ mockup'] },
    gallery: ['/assets/affichage/autrement-v1.jpg', '/assets/affichage/autrement-v2.jpg', '/assets/affichage/autrement-mockup.jpg'],
  },
  {
    key: 'laproie',
    tags: ['affiche', 'design'],
    cardImage: '/assets/affichage/la-proie.jpg',
    barColor: 'var(--red)',
    isNew: false,
    title:   { fr: 'La Proie', en: 'La Proie' },
    subtitle:{ fr: 'Affiche Cinéma · Court-métrage', en: 'Film Poster · Short Film' },
    context: { fr: "Affiche pour le court-métrage 'La Proie' de Melike Celikbas et Norine Sedda. Composition axiale, fort contraste rouge sur noir.", en: "Poster for the short film 'La Proie' by Melike Celikbas and Norine Sedda. Axial composition, strong red on black contrast." },
    missions:{ fr: ['Conception affiche', 'Composition visuelle', 'Typographie cinéma'], en: ['Poster design', 'Visual composition', 'Cinema typography'] },
    gallery: ['/assets/affichage/la-proie.jpg'],
  },
  {
    key: 'greendorm',
    tags: ['branding', 'design'],
    cardImage: '/assets/green-dorm/mockup-haman.jpg',
    barColor: 'var(--red)',
    isNew: true,
    title:   { fr: 'Green Dorm Group', en: 'Green Dorm Group' },
    subtitle:{ fr: 'Branding · Rebranding · Pratteln, CH · 2025', en: 'Branding · Rebranding · Pratteln, CH · 2025' },
    context: { fr: "Rebranding complet des marques Hamman & Boonel pour Green Dorm Group en Suisse. Motion design, signalétique, vitrophanies, kakémonos, flyers, tote bags — 65 créations en 4 mois.", en: "Full rebranding of Hamman & Boonel brands for Green Dorm Group in Switzerland. Motion design, signage, vinyl prints, kakemonos, flyers, tote bags — 65 creations in 4 months." },
    missions:{ fr: ['Direction artistique', 'Identité visuelle', 'Motion design', 'Signalétique', 'Print & digital'], en: ['Art direction', 'Visual identity', 'Motion design', 'Signage', 'Print & digital'] },
    gallery: ['/assets/green-dorm/mockup-haman.jpg', '/assets/green-dorm/mockup-boonel.jpg', '/assets/green-dorm/flyer-recto.jpg', '/assets/green-dorm/kakemono.jpg', '/assets/green-dorm/vitrophanie.jpg', '/assets/green-dorm/totebag.jpg', '/assets/green-dorm/planche.jpg', '/assets/green-dorm/logo-haman.png', '/assets/green-dorm/logo-boonel.png'],
  },
  {
    key: 'soyol',
    tags: ['branding'],
    cardImage: '/assets/soyol/mockup-rouge.jpg',
    barColor: 'var(--green)',
    isNew: false,
    title:   { fr: 'Soyol', en: 'Soyol' },
    subtitle:{ fr: 'Branding · ESMA Montpellier', en: 'Branding · ESMA Montpellier' },
    context: { fr: "Identité visuelle d'un œuf mollet végétal créée avec l'Institut Agro pour Écotrophélia. Naming, logo, packaging, mascotte et univers de marque.", en: "Visual identity for a plant-based soft-boiled egg with Institut Agro for Écotrophélia. Naming, logo, packaging, mascot and brand universe." },
    missions:{ fr: ['Naming', 'Logo', 'Packaging', 'Mascotte', 'Univers de marque'], en: ['Naming', 'Logo', 'Packaging', 'Mascot', 'Brand universe'] },
    gallery: ['/assets/soyol/mockup-rouge.jpg', '/assets/soyol/mockup-vert.jpg', '/assets/soyol/ambiance.jpg', '/assets/soyol/charte.jpg', '/assets/soyol/logo.png', '/assets/soyol/mascotte.jpg'],
  },
  {
    key: 'tennis',
    tags: ['branding'],
    cardImage: '/assets/tennis/logo-masc.png',
    cardBg: '#c8e6d4',
    cardContain: true,
    barColor: 'var(--green)',
    isNew: false,
    title:   { fr: 'Tennis Spirit', en: 'Tennis Spirit' },
    subtitle:{ fr: 'Branding · École de tennis, Suisse', en: 'Branding · Tennis school, Switzerland' },
    context: { fr: "Identité visuelle pour une école de tennis en Suisse. Logo créé en formation DUT MMI, refonte récente de la charte graphique avec déclinaisons produits.", en: "Visual identity for a tennis school in Switzerland. Logo created during MMI degree, recent brand guideline redesign with product adaptations." },
    missions:{ fr: ['Logo', 'Charte graphique', 'Déclinaisons produits'], en: ['Logo', 'Brand guidelines', 'Product adaptations'] },
    gallery: ['/assets/tennis/logo-masc.png', '/assets/tennis/logo-fem.png', '/assets/tennis/charte.jpg', '/assets/tennis/gourde.jpg', '/assets/tennis/cap.jpg'],
  },
]
