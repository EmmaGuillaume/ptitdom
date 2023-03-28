
export type TImage = {
  src: string,
  alt: string,
  categorie: string
}

export const images: TImage[] = [
  {
    src: '/images/voiture1.jpg',
    alt: 'image de voiture1',
    categorie: 'voiture'
  },
  {
    src: '/images/voiture2.jpg',
    alt: 'image de voiture2',
    categorie: 'voiture'
  },
  {
    src: '/images/voiture3.jpg',
    alt: 'image de voiture3',
    categorie: 'voiture'
  },
  {
    src: '/images/chat1.jpg',
    alt: 'image de chat',
    categorie:'chat'
  },
  {
    src: '/images/chat2.jpg',
    alt: 'image de chat',
    categorie:'chat'
  },
  {
    src: '/images/vache1.jpg',
    alt: 'image de vache',
    categorie:'vache'
  },
  {
    src: '/images/vache2.jpg',
    alt: 'image de vache',
    categorie:'vache'
  },
  {
    src: '/images/vache3.jpg',
    alt: 'image de vache',
    categorie:'vache'
  }
]



export type TCategorie = string

export const categories: TCategorie[] = [
  "chat",
  "chien",
  "voiture"
]
