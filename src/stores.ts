import { writable } from 'svelte/store'
import { browser } from "$app/environment";

import type { TImage } from '$lib/data/images';

////content.subscribe((value) => localStorage.content = value)

const defaultValue: string = JSON.stringify([]);
//console.log();

const stored = browser ? window.localStorage.getItem('selectedImages') ?? defaultValue : defaultValue;

export const selectedImages = writable<TImage[] | []>(JSON.parse(stored));

export const validation = writable<boolean>(false);



selectedImages.subscribe(value => {
    if (browser) {
        window.localStorage.setItem('selectedImages', JSON.stringify(value));
    }
});
