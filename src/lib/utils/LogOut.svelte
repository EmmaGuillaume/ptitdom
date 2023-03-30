<script lang="ts">
	import { nhost } from './nhost';

	async function signout() {
		const res = await nhost.auth.signOut();
		console.log(res);
	}
</script>

<button on:click={signout}>sign out</button>
