
export type TImage = {
  src: string,
  alt: string,
  categorie: string
}

export type TCategorie = {
  name: string,
  images: TImage[]
}
export type TThemes = {
  name: string,
  categoriesName: {
    name: string,
    cover: string
  }[]
}


export const themes: TThemes[] = [
  {
    name: 'Animaux',
    categoriesName: [
      {
        name: 'chats',
        cover: '/images/chat2.jpg'
      },
      {
        name: 'vaches',
        cover: '/images/vache3.jpg'
      },
      {
        name: 'perruches',
        cover: '/images/perruche1.jpeg'
      }
    ]
  },
  {
    name: 'Véhicules',
    categoriesName: [
      {
        name: 'voitures',
        cover: '/images/voiture3.jpg'
      }
    ]
  },
  {
    name: 'Meubles',
    categoriesName: [
      {
        name: 'chaises',
        cover: '/images/chaise1.jpg'
      },
      {
        name: 'tables',
        cover: '/images/table1.jpg'
      }
    ]
  }
]

export const categories: TCategorie[] = [
  {
    name: "vaches",
    images: [
      {
        src: '/images/vache3.jpg',
        alt: 'image de vache',
        categorie: 'vaches'
      },
      {
        src: '/images/vache1.jpg',
        alt: 'image de vache',
        categorie: 'vaches'
      },
      {
        src: '/images/vache2.jpg',
        alt: 'image de vache',
        categorie: 'vaches'
      },
      {
        src: '/images/vache3.jpg',
        alt: 'image de vache',
        categorie: 'vaches'
      }
    ]
  },
  {
    name: 'chats',
    images: [
      {
        src: '/images/chat1.jpg',
        alt: 'image de chat',
        categorie: 'chats'
      },
      {
        src: '/images/chat2.jpg',
        alt: 'image de chat',
        categorie: 'chats'
      },
    ]
  },
  {
    name: 'perruches',
    images: [
      {
        src: '/images/perruche1.jpeg',
        alt: 'image de perruche',
        categorie: 'perruches'
      },
      {
        src: '/images/perruche2.jpg',
        alt: 'image de perruche',
        categorie: 'perruches'
      },
      {
        src: '/images/perruche3.jpg',
        alt: 'image de perruche',
        categorie: 'perruches'
      }
    ]
  },
  {
    name: "voitures",
    images: [
      {
        src: '/images/voiture1.jpg',
        alt: 'image de voiture1',
        categorie: 'voitures'
      },
      {
        src: '/images/voiture2.jpg',
        alt: 'image de voiture2',
        categorie: 'voitures'
      },
      {
        src: '/images/voiture3.jpg',
        alt: 'image de voiture3',
        categorie: 'voitures'
      }
    ]
  },
  {
    name: "chaises",
    images: [
      {
        src: '/images/chaise1.jpg',
        alt: 'image de chaise',
        categorie: 'chaises'
      },
      {
        src: '/images/chaise2.jpg',
        alt: 'image de chaise',
        categorie: 'chaises'
      },
      {
        src: '/images/chaise3.jpg',
        alt: 'image de chaise',
        categorie: 'chaises'
      }
    ]
  },
  {
    name: "tables",
    images: [
      {
        src: '/images/table1.jpg',
        alt: 'image de table',
        categorie: 'tables'
      },
      {
        src: '/images/table2.jpeg',
        alt: 'image de table',
        categorie: 'tables'
      },
      {
        src: '/images/table3.jpg',
        alt: 'image de table',
        categorie: 'tables'
      }
    ]
  }
]