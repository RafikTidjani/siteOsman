export interface Dict {
  langbtn: string
  nr: string; na: string; navportfolio: string
  ey: string; avt: string
  tplbl: string
  srt: string; shc: string; pills: string[]
  ctalbl: string; ctah: string; ctasub: string; ctabtn: string
  ahey: string; ahloc: string; phlb: string; ahbio: string
  legDesign: string; legMkt: string; legForm: string
  parc: string; outils: string
  solarlbl: string; solartxt: string
  toolsPrim: string; toolsSec: string
  ctit: string; cthl: string; ctelbl: string; ctavs: string; ctavt: string; ctrtop: string
  sc: string[]; sch: string[]
  ctx_label: string; mission_label: string
  proj: string
}

export const T: Record<'fr' | 'en', Dict> = {
  fr: {
    langbtn: 'EN',
    nr: 'Réalisations', na: 'À propos', navportfolio: 'Portfolio 2024–2026',
    ey: 'Direction Artistique & Design Graphique',
    avt: 'Disponible pour une <strong>ALTERNANCE</strong> — 2026',
    tplbl: 'Spécialité —',
    srt: 'RÉALISATIONS', shc: 'projets',
    pills: ['Design', 'Branding', 'Motion', 'Éditorial', 'Affiche'],
    ctalbl: 'Une idée ? Un projet ? Une collaboration ?',
    ctah: 'Travaillons ensemble.',
    ctasub: 'Discutons-en.',
    ctabtn: 'Contactez-moi →',
    ahey: 'Direction Artistique & Design Graphique',
    ahloc: 'Mulhouse · Grand Est · Disponible pour missions',
    phlb: 'Portrait',
    ahbio: "Jeune directeur artistique polyvalent, formé au design graphique, à la communication digitale et au webmarketing depuis 2020. Mon travail navigue entre <strong>identité de marque, design éditorial et motion design</strong>.<br><br>Je conçois des visuels qui ont quelque chose à dire — <em>une esthétique brute et précise</em>, toujours au service du message.",
    legDesign: 'Design / DA', legMkt: 'Marketing', legForm: 'Formation',
    parc: 'PARCOURS', outils: 'OUTILS & APPROCHE',
    solarlbl: 'Approche',
    solartxt: "Je travaille par <em>itérations</em> — chaque version rapproche du juste. Le design doit être <strong>honnête</strong> : ni décoratif pour le décoratif, ni fonctionnel sans âme.",
    toolsPrim: 'Principaux', toolsSec: 'Secondaires',
    ctit: 'CONTACT',
    cthl: 'Travaillons\nensemble.',
    ctelbl: 'Email direct',
    ctavs: 'Disponible — 2026',
    ctavt: 'Ouvert aux stages, alternances et projets freelance. Basé à Mulhouse, mobilité possible.',
    ctrtop: 'Disponible pour stages, alternances & freelance',
    sc: ['CV', 'Instagram', 'LinkedIn'],
    sch: ['Télécharger', '@osman_adi', 'linkedin.com/in/osman-adi'],
    ctx_label: 'Contexte', mission_label: 'Mission',
    proj: 'projets',
  },
  en: {
    langbtn: 'FR',
    nr: 'Works', na: 'About', navportfolio: 'Portfolio 2024–2026',
    ey: 'Artistic Direction & Graphic Design',
    avt: 'Available for <strong>APPRENTICESHIP</strong> — 2026',
    tplbl: 'Specialty —',
    srt: 'WORKS', shc: 'projects',
    pills: ['Design', 'Branding', 'Motion', 'Editorial', 'Poster'],
    ctalbl: 'An idea? A project? A collaboration?',
    ctah: "Let's work together.",
    ctasub: "Let's talk.",
    ctabtn: 'Contact me →',
    ahey: 'Artistic Direction & Graphic Design',
    ahloc: 'Mulhouse · Alsace · Available for projects',
    phlb: 'Portrait',
    ahbio: "Junior art director, trained in graphic design, digital communication and web marketing since 2020. My work navigates between <strong>brand identity, editorial design and motion design</strong>.<br><br>I create visuals that have something to say — <em>a raw and precise aesthetic</em>, always in service of the message.",
    legDesign: 'Design / AD', legMkt: 'Marketing', legForm: 'Education',
    parc: 'BACKGROUND', outils: 'TOOLS & APPROACH',
    solarlbl: 'Approach',
    solartxt: "I work through <em>iterations</em> — each version gets closer to the truth. Design must be <strong>honest</strong>: neither decorative for decoration's sake, nor functional without soul.",
    toolsPrim: 'Primary', toolsSec: 'Secondary',
    ctit: 'CONTACT',
    cthl: "Let's work\ntogether.",
    ctelbl: 'Direct email',
    ctavs: 'Available — 2026',
    ctavt: 'Open to internships, apprenticeships and freelance projects. Based in Mulhouse, open to mobility.',
    ctrtop: 'Available for internships, apprenticeships & freelance',
    sc: ['CV', 'Instagram', 'LinkedIn'],
    sch: ['Download', '@osman_adi', 'linkedin.com/in/osman-adi'],
    ctx_label: 'Context', mission_label: 'Mission',
    proj: 'projects',
  },
}

export type Translations = typeof T
