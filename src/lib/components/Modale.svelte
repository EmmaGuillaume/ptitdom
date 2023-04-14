<script lang="ts">
	import { createFolder } from '$lib/utils/folderCrud';

	export let isActive: boolean = false;

	let src = '/icons/close.png';
	let value = '';

	let handleClick = () => {
		createFolder(value);
		isActive = false;
	};
</script>

<svelte:head>
	<link rel="preload" href={src} as="image" />
</svelte:head>

{#if isActive}
	<section class="" on:click={() => (isActive = false)} on:keydown />
	<div
		class={'shadow-lg shadow-primary bg-white pt-6 pb-16 p-12 flex flex-col rounded-xl text-black'}
	>
		<p class="m-0 text-lg">Entrez le nom du nouveau paquet</p>
		<input
			class="m-0 text-lg my-4 border-2 border-black rounded-md"
			bind:value
			placeholder="Paquet..."
		/>

		<div class="mt-9 flex gap-12">
			<button
				on:click={() => (isActive = false)}
				class="text-lg bg-red text-black py-1 px-4 whitespace-nowrap rounded-lg"
			>
				<p>annuler</p>
			</button>
			<button
				on:click={() => handleClick()}
				class="text-lg bg-blue text-white py-1 px-4 whitespace-nowrap rounded-lg"
			>
				<p>Créer le paquet</p>
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
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		z-index: 900;
	}
</style>
