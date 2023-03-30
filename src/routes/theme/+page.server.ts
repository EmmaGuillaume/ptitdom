import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';

import { themes } from '$lib/images.ts';
import { fetchData } from '$lib/utils/fetch';

export const load = (async () => {


  try {

    const res = await fetchData({query: `query myThemes {
      Themes {
          id
          name
          Categories {
              id
              name
              cover

          }
      }
  }`})
    const themes = res.data.Themes


    return { themes }

  } catch (err) {

    throw error(404, 'Not found');
  }


}) satisfies PageLoad;
