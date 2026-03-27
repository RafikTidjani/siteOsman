export interface Project {
  slug: string
  title: string
  client: string
  category: string
  year: number
  description: string
  coverImage: string
  gallery: string[]
  tools: string[]
}

export const projects: Project[] = [
  {
    slug: 'maison-lumiere',
    title: 'Maison Lumiere',
    client: 'Maison Lumiere Paris',
    category: 'Branding',
    year: 2024,
    description:
      "Creation de l'identite visuelle complete pour une maison de haute couture parisienne. Le projet englobe le logo, la typographie, la papeterie, le packaging et les supports digitaux. L'approche se veut minimaliste et raffinee, refletant l'elegance de la marque.",
    coverImage: '/images/placeholder-1.svg',
    gallery: ['/images/placeholder-1.svg', '/images/placeholder-2.svg', '/images/placeholder-3.svg'],
    tools: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'],
  },
  {
    slug: 'festival-nuit-blanche',
    title: 'Festival Nuit Blanche',
    client: 'Ville de Paris',
    category: 'Direction Artistique',
    year: 2024,
    description:
      "Direction artistique pour le festival annuel Nuit Blanche. Conception des affiches, de la signaletique, du programme et de la communication digitale. Un univers graphique nocturne et immersif.",
    coverImage: '/images/placeholder-2.svg',
    gallery: ['/images/placeholder-2.svg', '/images/placeholder-3.svg', '/images/placeholder-4.svg'],
    tools: ['Photoshop', 'Illustrator', 'After Effects'],
  },
  {
    slug: 'atelier-botanique',
    title: 'Atelier Botanique',
    client: 'Atelier Botanique',
    category: 'Identite Visuelle',
    year: 2023,
    description:
      "Identite visuelle pour un concept store alliant botanique et design. Logo, charte graphique, packaging et amenagement interieur. Un dialogue entre nature et minimalisme.",
    coverImage: '/images/placeholder-3.svg',
    gallery: ['/images/placeholder-3.svg', '/images/placeholder-4.svg', '/images/placeholder-5.svg'],
    tools: ['Illustrator', 'InDesign', 'Figma'],
  },
  {
    slug: 'revue-ephemere',
    title: 'Revue Ephemere',
    client: 'Editions Ephemere',
    category: 'Edition',
    year: 2023,
    description:
      "Direction artistique et mise en page d'une revue culturelle trimestrielle. Typographie editoriale, mise en page, choix iconographiques et direction photo.",
    coverImage: '/images/placeholder-4.svg',
    gallery: ['/images/placeholder-4.svg', '/images/placeholder-5.svg', '/images/placeholder-6.svg'],
    tools: ['InDesign', 'Photoshop', 'Illustrator'],
  },
  {
    slug: 'studio-mineral',
    title: 'Studio Mineral',
    client: 'Studio Mineral',
    category: 'Branding',
    year: 2023,
    description:
      "Branding complet pour un studio de design d'interieur specialise dans les materiaux bruts. Logo, identite, site web et supports de communication.",
    coverImage: '/images/placeholder-5.svg',
    gallery: ['/images/placeholder-5.svg', '/images/placeholder-6.svg', '/images/placeholder-1.svg'],
    tools: ['Figma', 'Illustrator', 'Photoshop'],
  },
  {
    slug: 'galerie-horizon',
    title: 'Galerie Horizon',
    client: 'Galerie Horizon',
    category: 'Direction Artistique',
    year: 2022,
    description:
      "Direction artistique pour une galerie d'art contemporain. Identite visuelle, catalogues d'exposition, cartons d'invitation et communication digitale.",
    coverImage: '/images/placeholder-6.svg',
    gallery: ['/images/placeholder-6.svg', '/images/placeholder-1.svg', '/images/placeholder-2.svg'],
    tools: ['Photoshop', 'InDesign', 'After Effects'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}
