<script lang="ts">
	import { createFolder, deleteFolder } from '$lib/utils/folderCrud';
	import { activeSelectedImages, selectedImages } from '$src/stores';

	export let isActive: boolean = false;

	let value = '';

	let handleClick = () => {
		deleteFolder($activeSelectedImages.folder);
		isActive = false;
	};
</script>

{#if isActive}
	<section class="" on:click={() => (isActive = false)} on:keydown />
	<div
		class={'shadow-lg shadow-primary bg-white pt-6 pb-16 p-12 flex flex-col rounded-xl text-black'}
	>
		<p class="m-0 text-lg">Êtes vous sûr de bien vouloir supprimer le paquet ?</p>

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
				<p>supprimer</p>
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
