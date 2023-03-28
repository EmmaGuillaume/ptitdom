
export type TImage = {
  src: string,
  alt: string,
  categorie: string
}

export const images: TImage[] = [
  {
    src: '/images/nom-de-l-image.png',
    alt: 'image de chat',
    categorie: 'chat'}

]



export type TCategorie = string

export const categories: TCategorie[] = [
  "chat",
  "chien"
]
