import { error } from '@sveltejs/kit';
import type { PageLoad } from '../$types';
import { fetchData } from '$lib/utils/fetch';
import { nhost } from '$lib/utils/nhost';



export const load = (async ({ params }) => {
    const { id } = params;


    try {
      // const data = await nhost.auth.signUp({
      //   email: 'louisfrcom@me.co',
      //   password: 'heydez34ijsiO.',
      //   options: {
      //     displayName: "dezd",

      //   }

      // })

      console.log('dz', nhost.auth.getUser());


        const res = await fetchData({query: `query Categories($id: Int!) {
          Categories_by_pk(id: $id) {
            name
            Images {
              src
              alt
            }
          }
        }`,
        variables: {id: id}
      })

        const categorieData = res.data.Categories_by_pk
        return { categorieData }
    } catch (err) {

        throw error(404, 'Not found');
    }


}) satisfies PageLoad;
