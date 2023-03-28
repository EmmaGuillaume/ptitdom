import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

import { categories } from '$lib/images.ts';

export const load = (({ params }) => {
    const { categorie } = params;
    try {
        const categorieData = categories.find((cat) => cat.name === categorie);
        // console.log(categorieData, categorie)
        return { categorieData }
    } catch (err) {

        throw error(404, 'Not found');
    }


}) satisfies PageLoad;
