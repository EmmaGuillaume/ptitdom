import type { TImage } from '$lib/images';
import { writable } from 'svelte/store'
export const boum = "lala";
export const stored = localStorage.getItem('cc');
export const content = writable(stored)

content.subscribe((value) => localStorage.content = value)

export const selectedImages = writable<TImage[] | []>([]);
// localStorage.setItem('selectedImages', selectedImages);

export const validation = writable<boolean>(false);
localStorage.getItem(selectedImages);