export interface Dict {
  nav_real: string; nav_about: string
  hero_ey: string; avail: string; spec: string
  sec01: string; proj: string; filters: string[]
  parcours: string; outils: string; contact: string
  cthl: string; ctelbl: string; ctavs: string; ctavt: string; cv_dl: string
  logiciels: string; approche: string; apptxt: string
  ah_ey: string; ah_sub: string; bio: string
  disciplines: string[]
  ctx_label: string; mission_label: string
}

export const T: Record<'fr' | 'en', Dict> = {
  fr: {
    nav_real: 'Réalisations', nav_about: 'À propos',
    hero_ey: 'Direction Artistique & Design Graphique',
    avail: 'Disponible pour une <strong>alternance</strong> — 2026',
    spec: 'Spécialité —',
    sec01: 'RÉALISATIONS', proj: 'projets',
    filters: ['Design', 'Branding', 'Motion', 'Éditorial', 'Affiche'],
    parcours: 'PARCOURS', outils: 'OUTILS & APPROCHE', contact: 'CONTACT',
    cthl: 'Travaillons\nensemble.',
    ctelbl: 'Email direct', ctavs: 'Disponible — 2026',
    ctavt: 'Ouvert aux stages, alternances et projets freelance. Basé à Mulhouse, mobilité possible.',
    cv_dl: 'Télécharger',
    logiciels: 'Logiciels', approche: 'Approche',
    apptxt: "Je travaille par <em>itérations</em> — chaque version rapproche du juste. Le design doit être honnête : ni décoratif pour le décoratif, ni fonctionnel sans âme. Polyvalent par formation, je m'adapte.",
    ah_ey: 'Direction Artistique & Design Graphique',
    ah_sub: 'Mulhouse · Disponible pour missions',
    bio: "Jeune directeur artistique polyvalent, formé au design graphique, à la communication digitale et au webmarketing depuis 2020. Mon travail navigue entre <strong>identité de marque, design éditorial et motion design</strong>.<br><br>Je conçois des visuels qui ont quelque chose à dire — <em>une esthétique brute et précise</em>, toujours au service du message.",
    disciplines: ['Direction Artistique', 'Branding', 'Motion Design', 'Design Éditorial', 'Identité Visuelle', 'Illustration'],
    ctx_label: 'Contexte', mission_label: 'Mission',
  },
  en: {
    nav_real: 'Work', nav_about: 'About',
    hero_ey: 'Art Direction & Graphic Design',
    avail: 'Available for an <strong>apprenticeship</strong> — 2026',
    spec: 'Specialty —',
    sec01: 'PROJECTS', proj: 'projects',
    filters: ['Design', 'Branding', 'Motion', 'Editorial', 'Poster'],
    parcours: 'BACKGROUND', outils: 'TOOLS & APPROACH', contact: 'CONTACT',
    cthl: "Let's work\ntogether.",
    ctelbl: 'Direct email', ctavs: 'Available — 2026',
    ctavt: 'Open to internships, apprenticeships and freelance. Based in Mulhouse, open to relocation.',
    cv_dl: 'Download',
    logiciels: 'Tools', approche: 'Approach',
    apptxt: "I work through <em>iterations</em> — each version gets closer to right. Design should be honest: neither decorative for its own sake, nor functional without soul. Versatile by training, I adapt.",
    ah_ey: 'Art Direction & Graphic Design',
    ah_sub: 'Mulhouse · Available for projects',
    bio: "Junior art director with a versatile background in graphic design, digital communication and web marketing since 2020. My work navigates between <strong>brand identity, editorial design and motion design</strong>.<br><br>I create visuals that have something to say — <em>a raw and precise aesthetic</em>, always in service of the message.",
    disciplines: ['Art Direction', 'Branding', 'Motion Design', 'Editorial Design', 'Visual Identity', 'Illustration'],
    ctx_label: 'Context', mission_label: 'Mission',
  },
}

export type Translations = typeof T
