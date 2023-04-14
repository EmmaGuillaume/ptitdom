import type {TImage } from '$lib/data/images';
import { get } from 'svelte/store';
import { selectedImages,activeSelectedImages, validation, type TStoredImage} from '../../stores';

export function setSelectedImages(image: TImage, folder: string) {
    const selected = get(selectedImages)
    const validate = get(validation)
    validation.set(false)

    const folderIndex = selected.findIndex((item: TStoredImage) => item.folder === folder);

    if (folderIndex === -1) {

      validation.set(true)
      activeSelectedImages.set({folder: folder, images: [image]})
      return (selectedImages.set([...selected, {folder: folder, images: [image]}]));
    }

    const imagesInFolder = selected[folderIndex].images
    const indexImage = imagesInFolder.findIndex((img: TImage) => img.src === image.src);

    if (indexImage === -1) {

        if (selected[folderIndex].images.length < 10) {

          const test = selected
          test[folderIndex].images = [...imagesInFolder, image]

          activeSelectedImages.set(test[folderIndex])

          // Object not found, add it to the array
          validation.set(true)
          return (selectedImages.set(test));
        }
      }

}

export function removeSelectedImage(image: TImage, folder: string) {
  const selected = get(selectedImages);
  const folderIndex = selected.findIndex((item: TStoredImage) => item.folder === folder);

  if (folderIndex === -1) {
    return;
  }

  const imagesInFolder = selected[folderIndex].images;
  const indexImage = imagesInFolder.findIndex((img: TImage) => img.src === image.src);

  if (indexImage === -1) {
    return;
  }

  const test = selected;
  test[folderIndex].images = [
    ...imagesInFolder.slice(0, indexImage),
    ...imagesInFolder.slice(indexImage + 1)
  ];

  activeSelectedImages.set(test[folderIndex]);

  selectedImages.set(test);
}
