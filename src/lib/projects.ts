export interface MediaItem {
  type: 'image' | 'video' | 'youtube' | 'pdf'
  src: string
  alt?: string
  /** YouTube video ID (for type: 'youtube') */
  videoId?: string
}

export interface ProjectItem {
  title: string
  description: string
  images: string[]
  media?: MediaItem[]
  tools: string[]
  context?: string
  mission?: string
  intention?: string
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
    accentColor: '#034C3C',
    bgColor: '#F4EDDE',
    projects: [
      {
        title: 'Inktober 2024',
        description:
          'Série d\'illustrations réalisées dans le cadre du défi Inktober 2024. Chaque jour, un animal et une scène de camping dessinés à l\'encre.',
        images: [
          '/images/illustration/inktober/autruche.jpg',
          '/images/illustration/inktober/camping.jpg',
          '/images/illustration/inktober/caméleon.jpg',
          '/images/illustration/inktober/chameau.jpg',
          '/images/illustration/inktober/chévre.jpg',
          '/images/illustration/inktober/cochon.jpg',
          '/images/illustration/inktober/crocodile.jpg',
          '/images/illustration/inktober/phasme.jpg',
          '/images/illustration/inktober/poisson.jpg',
          '/images/illustration/inktober/rhinocéros.jpg',
        ],
        tools: ['Encre', 'Procreate'],
      },
      {
        title: 'Projets personnels',
        description:
          'Illustrations personnelles inspirées d\'expressions du quotidien. Un exercice de style entre humour et graphisme.',
        images: [
          '/images/illustration/personnel/allumette.png',
          '/images/illustration/personnel/Qalb-100.jpg',
        ],
        tools: ['Illustrator', 'Photoshop'],
      },
    ],
  },
  {
    slug: 'branding',
    name: 'Branding',
    accentColor: '#93032E',
    bgColor: '#F4EDDE',
    projects: [
      {
        title: 'Green Dorm Group',
        description:
          'Rebranding complet de deux marques du consortium Green Dorm Group (secteur BTP) : Hamman et Boonel, à l\'occasion de l\'installation d\'un showroom à Pratteln.',
        context:
          'Stage de 4 mois en tant que directeur artistique junior.',
        mission:
          'Refonte de l\'identité visuelle de deux entités du groupe.',
        intention:
          'Créer une identité moderne, professionnelle et cohérente avec le positionnement du groupe dans le secteur du bâtiment.',
        images: [
          '/images/branding/green-dorm/logo boonel.png',
          '/images/branding/green-dorm/logo haman.png',
          '/images/branding/green-dorm/logo typo boonel.png',
          '/images/branding/green-dorm/logo typo haman.png',
          '/images/branding/green-dorm/Mockup_Boonel.jpg',
          '/images/branding/green-dorm/mockup_Haman.png',
          '/images/branding/green-dorm/Mockup boonel.jpg',
          '/images/branding/green-dorm/Mockup_Kakemono_Boonel.jpg',
          '/images/branding/green-dorm/Ceres_mockup_Vitrophanie.jpg',
          '/images/branding/green-dorm/flyers_A5_Recto.jpg',
          '/images/branding/green-dorm/flyers_A5_Verso.jpg',
          '/images/branding/green-dorm/mockup packaging boonel Clair.jpg',
          '/images/branding/green-dorm/mockup packaging boonel sombre.jpg',
          '/images/branding/green-dorm/totebag boonel.jpg',
          '/images/branding/green-dorm/Plan de travail 1-2.jpg',
        ],
        media: [
          {
            type: 'video',
            src: '/images/branding/green-dorm/motion haman.mp4',
            alt: 'Motion design Haman',
          },
        ],
        tools: ['Illustrator', 'Photoshop', 'InDesign', 'After Effects'],
      },
      {
        title: 'Logo MMI Mulhouse',
        description:
          'Redesign du logo de la formation MMI afin de différencier la promotion des autres départements, souvent dotés d\'identités visuelles similaires.',
        context: 'Projet réalisé dans le cadre de la formation MMI.',
        intention:
          'Apporter une identité forte et reconnaissable, en rupture avec les codes existants.',
        images: [
          '/images/branding/logo-mmi/Logo MMI Fond Clair.png',
          '/images/branding/logo-mmi/Logo MMI Fond Sombre.png',
          '/images/branding/logo-mmi/Logo MMI Fond Clair_Typo.png',
          '/images/branding/logo-mmi/Logo MMI Fond Sombre-Typo.png',
          '/images/branding/logo-mmi/Charte graphique MMI.png',
          '/images/branding/logo-mmi/ancien logo mmi.png',
          '/images/branding/logo-mmi/Plan de travail 49 copie 3-80.jpg',
        ],
        tools: ['Illustrator', 'Figma'],
      },
      {
        title: 'Tennis Spirit',
        description:
          'Identité visuelle dynamique et évolutive pour une école de tennis en Suisse. Logo initial créé en formation MMI, puis modernisé récemment.',
        intention:
          'Transmettre une image sportive, dynamique et accessible, tout en assurant une cohérence graphique durable.',
        images: [
          '/images/branding/tennis-spirit/logo_tennisspirit-masculine.png',
          '/images/branding/tennis-spirit/logo_tennisspirit-feminine.png',
          '/images/branding/tennis-spirit/Charte_Graphique_Tennis_Spirit.jpg',
          '/images/branding/tennis-spirit/Plan de travail 49 copie 2.png',
          '/images/branding/tennis-spirit/Cap_Tennis_Spirit.jpg',
          '/images/branding/tennis-spirit/gourde_tennis_spirit.jpg',
          '/images/branding/tennis-spirit/Polo Collar_Jersey Mockup_by Narin Graphic.jpg',
          '/images/branding/tennis-spirit/tennis-spirit instagram.jpg',
        ],
        tools: ['Illustrator', 'Photoshop', 'Figma'],
      },
      {
        title: 'Soyol',
        description:
          'Identité visuelle d\'un produit innovant : un œuf mollet végétal, destiné à être présenté au concours Écotrophélia. Naming, logo, packaging et univers graphique complet.',
        context:
          'Projet réalisé à l\'ESMA Montpellier en collaboration avec l\'Institut Agro.',
        intention:
          'Valoriser un produit innovant à travers une identité moderne, attractive et en accord avec les enjeux alimentaires et écologiques actuels.',
        images: [
          '/images/branding/soyol/logo soyol.png',
          '/images/branding/soyol/charte graphique soyol.jpg',
          '/images/branding/soyol/mockup rouge.png',
          '/images/branding/soyol/mockup vert.png',
          '/images/branding/soyol/ambiancce.png',
          '/images/branding/soyol/mascotte basic.png',
          '/images/branding/soyol/mascotte Allez les coq.png',
          '/images/branding/soyol/mascotte héro du gout.png',
          '/images/branding/soyol/mascotte l\'escrot.png',
        ],
        media: [
          {
            type: 'video',
            src: '/images/branding/soyol/soyol_Animation.mp4',
            alt: 'Animation Soyol',
          },
        ],
        tools: ['Illustrator', 'Photoshop', 'After Effects'],
      },
    ],
  },
  {
    slug: 'projet',
    name: 'Projet',
    accentColor: '#034C3C',
    bgColor: '#F4EDDE',
    projects: [
      {
        title: 'Affiche "La Proie"',
        description:
          'Affiche réalisée pour un court-métrage. Un travail de composition et de direction artistique au service du récit cinématographique.',
        images: ['/images/projet/la-proie.png'],
        tools: ['Photoshop', 'Illustrator'],
      },
      {
        title: 'Animation de bienvenue',
        description:
          'Animation réalisée pour un ancien portfolio. Présentée ici comme archive et souvenir d\'un travail passé.',
        images: [],
        media: [
          {
            type: 'video',
            src: '/images/projet/anime-web.mp4',
            alt: 'Animation ancien portfolio',
          },
        ],
        tools: ['After Effects'],
      },
      {
        title: 'Mémoire de stage — Green Dorm Group',
        description:
          'Mémoire de stage rédigé dans le cadre du stage de 4 mois chez Green Dorm Group, documentant la démarche de direction artistique et de rebranding.',
        images: [],
        media: [
          {
            type: 'pdf',
            src: '/images/projet/memoire-2025.pdf',
            alt: 'Mémoire de stage 2025',
          },
        ],
        tools: ['InDesign'],
      },
      {
        title: 'Montpellier Cœur de Ville',
        description:
          'Animation motion design réalisée pour la ville de Montpellier. Un travail alliant identité graphique et animation pour la communication urbaine.',
        images: [],
        media: [
          {
            type: 'video',
            src: '/images/projet/montpellier-coeur-de-ville.mp4',
            alt: 'Animation Montpellier Cœur de Ville',
          },
          {
            type: 'youtube',
            src: 'https://www.youtube.com/watch?v=afm5qj6g7XQ',
            videoId: 'afm5qj6g7XQ',
            alt: 'Montpellier Cœur de Ville — YouTube',
          },
        ],
        tools: ['After Effects', 'Illustrator'],
      },
    ],
  },
  {
    slug: 'curiosite',
    name: 'Curiosité',
    accentColor: '#93032E',
    bgColor: '#F4EDDE',
    projects: [
      {
        title: 'Explorations visuelles',
        description:
          'Photos, dessins et expérimentations visuelles. Une facette plus spontanée et exploratoire du travail.',
        images: [
          '/images/curiosite/IMG_1385.jpeg',
          '/images/curiosite/IMG_2677.jpeg',
          '/images/curiosite/IMG_3814.jpeg',
          '/images/curiosite/IMG_4031.jpeg',
          '/images/curiosite/IMG_4730.jpeg',
          '/images/curiosite/IMG_4951.jpeg',
          '/images/curiosite/IMG_5012.jpeg',
          '/images/curiosite/IMG_9850.jpeg',
          '/images/curiosite/5E27E8D4-2796-4D99-AC2D-5E94739EF037.JPG',
        ],
        tools: [],
      },
    ],
  },
]
