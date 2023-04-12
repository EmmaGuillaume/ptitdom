
import type {TImage } from '$lib/data/images';
import { get } from 'svelte/store';
import { selectedImages, validation, type TStoredImage} from '../../stores';


export function setSelectedImages(image: TImage, folder: string) {
    const selected = get(selectedImages)
    const validate = get(validation)
    validation.set(false)

    console.log({selected});
    const folderIndex = selected.findIndex((item: TStoredImage) => item.folder === folder);

    if (folderIndex === -1) {
      console.log('folder not existing', image, folder );

      validation.set(true)
      return (selectedImages.set([...selected, {folder: folder, images: [image]}]));
    }

    const imagesInFolder = selected[folderIndex].images
    const indexImage = imagesInFolder.findIndex((img: TImage) => img.src === image.src);
    //console.log($selectedImages);

    if (indexImage === -1) {
        console.log('in folder but image not found', image, folder);

        const test = selected
        test[folderIndex].images = [...imagesInFolder, image]


        // Object not found, add it to the array
        validation.set(true)
        return (selectedImages.set(test));
    } else {
        // Object found, remove it from the array
        console.log('in folder need to remove image', image, folder);

        const test = selected
        test[folderIndex].images = [
          ...imagesInFolder.slice(0, indexImage),
          ...imagesInFolder.slice(indexImage + 1)
        ]

        console.log({test});

        return (selectedImages.set(test));
    }
}
