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
        cover: '/images/data/animaux/chats/chat4.jpeg'
      },
      {
        name: 'vaches',
        cover: '/images/vache3.jpg'
      }
    ]
  },
  {
    name: 'Véhicules',
    categoriesName: [
      {
        name: 'ambulances',
        cover: '/images/data/vehicules/ambulances/ambulance3.jpg'
      },
      {
        name: 'bus',
        cover: '/images/data/vehicules/bus/bus3.jpg'
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
      }
    ]
  },
  {
    name: 'chats',
    images: [
      {
        src: '/images/data/animaux/chats/chat1.png',
        alt: 'image de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat2.png',
        alt: 'image de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat3.jpeg',
        alt: 'image de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat4.jpeg',
        alt: 'image de chat',
        categorie: 'chats'
      },
      {
        src: '/images/data/animaux/chats/chat5.webp',
        alt: 'image de chat',
        categorie: 'chats'
      },
        ]
  },
  {
    name: "ambulances",
    images: [
      {
        src: '/images/data/vehicules/ambulances/ambulance1.jpg',
        alt: 'image de ambulance',
        categorie: 'ambulances'
      },
      {
        src: '/images/data/vehicules/ambulances/ambulance2.jpg',
        alt: 'image de ambulance',
        categorie: 'ambulances'
      },
      {
        src: '/images/data/vehicules/ambulances/ambulance3.jpg',
        alt: 'image de ambulance',
        categorie: 'ambulances'
      }
    ]
  },
  {
    name: "bus",
    images: [
      {
        src: '/images/data/vehicules/bus/bus1.jpg',
        alt: 'image de bus',
        categorie: 'bus'
      },
      {
        src: '/images/data/vehicules/bus/bus2.jpg',
        alt: 'image de bus',
        categorie: 'bus'
      },
      {
        src: '/images/data/vehicules/bus/bus3.jpg',
        alt: 'image de bus',
        categorie: 'bus'
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