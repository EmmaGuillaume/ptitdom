<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
	import { nhost } from './nhost';

	async function signout() {
		const res = await nhost.auth.signOut();
		console.log(res);
	}

	const conected = nhost.auth.isAuthenticated();
</script>

{#if conected === true}
	<button
		class="mb-2 flex items-center justify-center h-12 p-4 rounded-2xl border-solid mt-4 ml-2 border-2 font-mono font-bold text-xl block"
		on:click={signout}>sign out</button
	>
{/if}
