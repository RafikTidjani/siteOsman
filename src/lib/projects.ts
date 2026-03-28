export interface ProjectItem {
  title: string
  description: string
  images: string[]
  tools: string[]
}

export interface Category {
  slug: string
  name: string
  accentColor: string
  bgColor: string
  projects: ProjectItem[]
}

export const categories: Category[] = [
  {
    slug: 'illustration',
    name: 'Illustration',
    accentColor: '#cbfb78',
    bgColor: '#F4EDDE',
    projects: [
      {
        title: 'Portraits Urbains',
        description: 'Serie d\'illustrations de portraits stylises, melant traits expressifs et couleurs vives pour capturer l\'essence de la vie urbaine.',
        images: ['/images/placeholder-1.svg', '/images/placeholder-2.svg', '/images/placeholder-3.svg'],
        tools: ['Illustrator', 'Photoshop', 'Procreate'],
      },
      {
        title: 'Faune Geometrique',
        description: 'Collection d\'illustrations animaliers construites a partir de formes geometriques pures. Un equilibre entre abstraction et reconnaissance.',
        images: ['/images/placeholder-2.svg', '/images/placeholder-4.svg', '/images/placeholder-6.svg'],
        tools: ['Illustrator', 'Figma'],
      },
      {
        title: 'Natures Mortes',
        description: 'Reinterpretation contemporaine de natures mortes classiques en illustration digitale, avec un jeu de textures et de lumiere.',
        images: ['/images/placeholder-3.svg', '/images/placeholder-5.svg', '/images/placeholder-1.svg'],
        tools: ['Photoshop', 'Procreate'],
      },
    ],
  },
  {
    slug: 'branding',
    name: 'Branding',
    accentColor: '#a78bfa',
    bgColor: '#1a1a2e',
    projects: [
      {
        title: 'Maison Lumiere',
        description: 'Identite visuelle complete pour une maison de couture parisienne. Logo, typographie, papeterie, packaging et supports digitaux.',
        images: ['/images/placeholder-4.svg', '/images/placeholder-1.svg', '/images/placeholder-5.svg'],
        tools: ['Illustrator', 'Photoshop', 'InDesign'],
      },
      {
        title: 'Studio Mineral',
        description: 'Branding pour un studio de design d\'interieur specialise dans les materiaux bruts. Logo, charte graphique et site web.',
        images: ['/images/placeholder-5.svg', '/images/placeholder-3.svg', '/images/placeholder-2.svg'],
        tools: ['Figma', 'Illustrator', 'Photoshop'],
      },
      {
        title: 'Cafe Botanica',
        description: 'Creation de l\'univers visuel d\'un coffee shop bio. Logo, packaging, menu et communication sur les reseaux sociaux.',
        images: ['/images/placeholder-6.svg', '/images/placeholder-2.svg', '/images/placeholder-4.svg'],
        tools: ['Illustrator', 'InDesign', 'Photoshop'],
      },
    ],
  },
  {
    slug: 'projet',
    name: 'Projet',
    accentColor: '#34d399',
    bgColor: '#f0fdf4',
    projects: [
      {
        title: 'Festival Nuit Blanche',
        description: 'Direction artistique pour le festival Nuit Blanche. Affiches, signaletique, programme et communication digitale pour un univers nocturne immersif.',
        images: ['/images/placeholder-2.svg', '/images/placeholder-6.svg', '/images/placeholder-1.svg'],
        tools: ['Photoshop', 'Illustrator', 'After Effects'],
      },
      {
        title: 'Revue Ephemere',
        description: 'Direction artistique et mise en page d\'une revue culturelle trimestrielle. Typographie editoriale, choix iconographiques et direction photo.',
        images: ['/images/placeholder-4.svg', '/images/placeholder-3.svg', '/images/placeholder-5.svg'],
        tools: ['InDesign', 'Photoshop', 'Illustrator'],
      },
      {
        title: 'Exposition Horizons',
        description: 'Conception de l\'identite visuelle et des supports de communication pour une exposition d\'art contemporain en galerie.',
        images: ['/images/placeholder-1.svg', '/images/placeholder-5.svg', '/images/placeholder-3.svg'],
        tools: ['InDesign', 'Photoshop', 'After Effects'],
      },
    ],
  },
  {
    slug: 'curiosite',
    name: 'Curiosite',
    accentColor: '#fb923c',
    bgColor: '#fffbeb',
    projects: [
      {
        title: 'Typo Experimentale',
        description: 'Experimentations typographiques melant lettrage a la main, glitch et deformations. Exploration des limites de la lisibilite.',
        images: ['/images/placeholder-3.svg', '/images/placeholder-1.svg', '/images/placeholder-6.svg'],
        tools: ['Illustrator', 'After Effects'],
      },
      {
        title: 'Generative Patterns',
        description: 'Motifs generes par des regles algorithmiques puis retravailles a la main. Un dialogue entre logique mathematique et sensibilite artistique.',
        images: ['/images/placeholder-5.svg', '/images/placeholder-4.svg', '/images/placeholder-2.svg'],
        tools: ['Figma', 'Processing', 'Illustrator'],
      },
      {
        title: 'Collages Numeriques',
        description: 'Compositions visuelles par superposition d\'elements photographiques, typographiques et illustres. Un exercice de style libre.',
        images: ['/images/placeholder-6.svg', '/images/placeholder-3.svg', '/images/placeholder-1.svg'],
        tools: ['Photoshop', 'Illustrator'],
      },
    ],
  },
]
