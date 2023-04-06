
import type {TImage } from '$lib/data/images';
import { get } from 'svelte/store';
import { selectedImages, validation} from '../../stores';


export function setSelectedImages(image: TImage) {
    const selected = get(selectedImages)
    const validate = get(validation)
    validation.set(false)

    const index = selected.findIndex((img: TImage) => img.src === image.src);
    //console.log($selectedImages);

    //console.log($selectedImages, index);
    if (index === -1) {
        // Object not found, add it to the array
        validation.set(true)
        return (selectedImages.set([...selected, image]));
    } else {
        // Object found, remove it from the array

        return (selectedImages.set([
            ...selected.slice(0, index),
            ...selected.slice(index + 1)
        ]));
    }
}
