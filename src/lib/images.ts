
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
    src: '/images/chat1.png',
    alt: 'image de chat',
    categorie:'chat'
  },
  {
    src: '/images/chat2.png',
    alt: 'image de chat',
    categorie:'chat'
  },
  {
    src: '/images/vache1.png',
    alt: 'image de vache',
    categorie:'vache'
  },
  {
    src: '/images/vache2.png',
    alt: 'image de vache',
    categorie:'vache'
  },
  {
    src: '/images/vache3.png',
    alt: 'image de vache',
    categorie:'vache'
  },

]

export type TCategorie = string

export const categories: TCategorie[] = [
  "chat",
  "chien"
]
