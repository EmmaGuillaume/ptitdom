import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';


import { themes } from '$data/themes';

export const load = (() => {

  try {

    return { themes }
  } catch (err) {

    throw error(404, 'Not found');
  }


}) satisfies PageLoad;
