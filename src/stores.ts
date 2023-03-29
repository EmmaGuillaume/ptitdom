import type { TImage } from '$lib/images';
import { writable } from 'svelte/store'


export const selectedImages = writable<TImage[] | []>([]);
export const validation = writable<boolean>(false);
