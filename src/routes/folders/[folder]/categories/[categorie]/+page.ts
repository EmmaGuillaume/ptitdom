import { categories } from '$data/categories';

import { error, redirect } from '@sveltejs/kit';

import type { PageLoad } from '../$types';
import { selectedImages } from '$src/stores';
import { get } from 'svelte/store';

export const load = (({ params }: {params: { categorie: string}}) => {
    const { categorie, folder } = params;

    const folders = get(selectedImages)

    const index = folders.findIndex((item) => item.folder === folder);


    if (index === -1) {
      console.log('no');
      
      // throw redirect(302, `/folders`);
    }
    try {
        const categorieData = categories.find((cat) => cat.name === categorie);


        return { categorieData, folder }
    } catch (err) {

        throw error(404, 'Not found');
    }


}) satisfies PageLoad;
