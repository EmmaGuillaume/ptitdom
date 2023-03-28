import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

import { images } from '$lib/images.ts';

export const load = (() => {


  try {

    return {images}
  }catch(err) {

    throw error(404, 'Not found');
  }


}) satisfies PageLoad;
