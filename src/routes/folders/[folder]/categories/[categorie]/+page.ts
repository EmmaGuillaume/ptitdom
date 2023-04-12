import { categories } from '$data/categories';

import { error } from '@sveltejs/kit';

import type { PageLoad } from '../$types';

export const load = (({ params }: {params: { categorie: string}}) => {
    const { categorie } = params;
    try {
        const categorieData = categories.find((cat) => cat.name === categorie);

        return { categorieData }
    } catch (err) {

        throw error(404, 'Not found');
    }


}) satisfies PageLoad;
