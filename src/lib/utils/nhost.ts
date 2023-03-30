import {NhostClient} from '@nhost/nhost-js'
//import { SECRET_SUBDOMAIN, SECRET_REGION } from '$env/static/private'


export const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_SECRET_SUBDOMAIN,
  region: import.meta.env.VITE_SECRET_REGION
})
