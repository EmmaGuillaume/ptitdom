
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
        name: 'peruche',
        cover: '/images/vache3.jpg'
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
  }

]