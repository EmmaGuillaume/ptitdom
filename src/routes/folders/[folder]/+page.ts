import { error } from '@sveltejs/kit';

import type { PageLoad } from '../$types';

export const load = (({ params }: {params: { folder: string}}) => {
    const { folder } = params;
    try {


        return { folder }
    } catch (err) {

        throw error(404, 'Not found');
    }


}) satisfies PageLoad;
