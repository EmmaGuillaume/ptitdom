
export type TImage = {
  src: string,
  alt: string,
  categorie: string
}

export const images: TImage[] = [
  {
    src: '/images/nom-de-l-image.png',
    alt: 'image de chat',
    categorie: 'chat'
  },
  {
    src: '/images/voiture.jpg',
    alt: 'image de voiture1',
    categorie: 'voiture'
  },
  {
    src: '/images/voiture.jpg',
    alt: 'image de voiture2',
    categorie: 'voiture'
  },
  {
    src: '/images/voiture.jpg',
    alt: 'image de voiture3',
    categorie: 'voiture'
  }
]

export type TCategorie = string

export const categories: TCategorie[] = [
  "chat",
  "chien",
  "voiture"
]
