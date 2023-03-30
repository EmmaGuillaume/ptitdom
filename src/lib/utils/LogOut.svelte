<script lang="ts">
	import { nhost } from './nhost';

	async function signout() {
		const res = await nhost.auth.signOut();
		console.log(res);
	}

	const conected = nhost.auth.isAuthenticated();
</script>

{#if conected === true}
	<p />
	<button on:click={signout}>sign out</button>
{/if}
