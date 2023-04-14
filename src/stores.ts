import { writable } from 'svelte/store'
import { browser } from "$app/environment";

import type { TImage } from '$lib/data/images';

export type TStoredImage = {
 folder: string
 displayName: string
 images: TImage[]
}

const defaultValue: string = JSON.stringify([{folder: 'paquet1', displayName: "paquet n°1", images: []}]);
const activeDefaultValue: string = JSON.stringify({folder: 'paquet1', displayName: "paquet n°1", images: []});

let stored = browser ? window.localStorage.getItem('storedImages') ?? defaultValue : defaultValue;
let activeStored = browser ? window.localStorage.getItem('activeStoredImages') ?? activeDefaultValue : activeDefaultValue;

if (stored == '[]') {
  stored = defaultValue
}
export const selectedImages = writable<TStoredImage[] | []>(JSON.parse(stored));
export const activeSelectedImages = writable<TStoredImage>(JSON.parse(activeStored));

export const validation = writable<boolean>(false);

selectedImages.subscribe(value => {
    if (browser) {
        window.localStorage.setItem('storedImages', JSON.stringify(value));
    }
});
activeSelectedImages.subscribe(value => {
    if (browser) {
        window.localStorage.setItem('activeStoredImages', JSON.stringify(value));
    }
});
