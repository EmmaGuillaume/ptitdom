import type { TImage } from '$lib/images';
import { writable } from 'svelte/store'

export const stored = localStorage.content;
export const content = writable(stored || 'Hello, World!')
content.subscribe((value) => localStorage.content = value)

export const selectedImages = writable<TImage[] | []>([]);
// localStorage.setItem('selectedImages', selectedImages);

export const validation = writable<boolean>(false);
