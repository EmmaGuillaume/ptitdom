import { get } from 'svelte/store';
import { selectedImages, type TStoredImage} from '../../stores';

export const slugify = (...args: (string | number)[]): string => {
  const value = args.join(' ')

  return value
      .normalize('NFD') // split an accented letter in the base letter and the acent
      .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
      .replace(/\s+/g, '-') // separator
}


export function createFolder(name:string) {
  if (name === "") {
    return
  }
  const folders = get(selectedImages)

  selectedImages.set([...folders, {folder: slugify(name), displayName: name, images: []}])

  console.log();



}
