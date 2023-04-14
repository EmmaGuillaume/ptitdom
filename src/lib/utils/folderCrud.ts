import { get } from 'svelte/store';
import { activeSelectedImages, selectedImages} from '../../stores';

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


  const slugified = slugify(name)

  const index = folders.findIndex((folder) => folder.folder === slugified )
  if (index === -1) {

    selectedImages.set([...folders, {folder: slugified, displayName: name, images: []}])

    activeSelectedImages.set({folder: slugified, displayName: name, images: []})


  }







}
export function deleteFolder(name:string) {
  const folders = get(selectedImages)
  if (name === "" || folders.length <= 1) {
    return
  }



  const newFolders = folders.filter((folder) => folder.folder != name )


  selectedImages.set(newFolders)

  const newfolder = get(selectedImages)
  activeSelectedImages.set(newfolder[0])






}
