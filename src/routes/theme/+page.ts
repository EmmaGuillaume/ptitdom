import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

import { images } from '$lib/images.ts';
import { categories } from '$lib/images.ts';

export const load = (() => {


  try {

    return { images, categories }
  } catch (err) {

    throw error(404, 'Not found');
  }


}) satisfies PageLoad;
