import { writable } from 'svelte/store'
import { browser } from "$app/environment";

import type { TImage } from '$lib/data/images';

export type TStoredImage = {
 folder: string
 images: TImage[]
}

const defaultValue: string = JSON.stringify([]);

const stored = browser ? window.localStorage.getItem('storedImages') ?? defaultValue : defaultValue;

export const selectedImages = writable<TStoredImage[] | []>(JSON.parse(stored));

export const validation = writable<boolean>(false);

selectedImages.subscribe(value => {
    if (browser) {
        window.localStorage.setItem('storedImages', JSON.stringify(value));
    }
});
