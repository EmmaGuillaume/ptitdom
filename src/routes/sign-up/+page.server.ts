
import { nhost } from '$lib/utils/nhost';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async (event) => {
    const data = await event.request.formData();
    console.log('data', data);

    const name = data.get('name')
    const email = `${name}@me.co`
    const password = data.get('password')

    if (!name && !password) {
      console.error('missing values');

      return "missing values"
    }

      
    const res = await nhost.auth
      .signUp({
        email,
        password,
        options: {
          displayName: name
        }
      })

      console.log('res', res);




  }
};
