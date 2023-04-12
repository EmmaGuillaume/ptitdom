import { writable } from 'svelte/store'
import { browser } from "$app/environment";

import type { TImage } from '$lib/data/images';

export type TStoredImage = {
 folder: string
 displayName: string
 images: TImage[]
}

const defaultValue: string = JSON.stringify([{folder: 'folder1', displayName: "dossier n°1", images: []}]);

let stored = browser ? window.localStorage.getItem('storedImages') ?? defaultValue : defaultValue;

if (stored == '[]') {
  stored = defaultValue
}
export const selectedImages = writable<TStoredImage[] | []>(JSON.parse(stored));

export const validation = writable<boolean>(false);

selectedImages.subscribe(value => {
    if (browser) {
        window.localStorage.setItem('storedImages', JSON.stringify(value));
    }
});
