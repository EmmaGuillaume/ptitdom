import type { TImage } from "$lib/data/images";

export function questions(images: TImage[]) {


  if (images.length === 1) {
    return `quelle est cette image ?`
  }
  const image = images[Math.floor(Math.random()*images.length)];

  image.alt
  return `montre moi la(es) image(s) ${image.alt}`
}
