<script lang="ts">
	import { createFolder } from '$lib/utils/folderCrud';

	export let isActive: boolean = false;

	let src = '/icons/close.png';
	let value = '';

	let handleClick = () => {
		createFolder(value);
	};
</script>

<svelte:head>
	<link rel="preload" href={src} as="image" />
</svelte:head>

{#if isActive}
	<section class="" on:click={() => (isActive = false)} on:keydown />
	<div
		class={'shadow-lg shadow-primary bg-white relative pt-6 pb-16 p-12 flex flex-col rounded-xl	'}
	>
		<p class="m-0 text-lg">Entrez le nom du nouveau dossier</p>
		<input class="m-0 text-lg my-4" bind:value placeholder="Dossier..." />

		<div class="mt-9 flex gap-12">
			<button
				on:click={() => (isActive = false)}
				class="text-lg bg-red text-white py-1 px-4 whitespace-nowrap rounded-lg"
			>
				<p>annuler</p>
			</button>
			<button
				on:click={() => handleClick()}
				class="text-lg bg-primary text-white py-1 px-4 whitespace-nowrap rounded-lg"
			>
				<p>Créer le dossier</p>
			</button>
		</div>
	</div>
{/if}

<style>
	section {
		position: fixed;
		inset: 0;
		display: grid;
		place-items: center;
		z-index: 2;
	}
	div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		z-index: 20;
	}
</style>
