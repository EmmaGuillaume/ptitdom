import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';


import { themes } from '$lib/images.ts';

export const load = (() => {


  try {

    return { themes }
  } catch (err) {

    throw error(404, 'Not found');
  }


}) satisfies PageLoad;
