<script lang="ts">
	import { selectedImages, type TStoredImage } from '$src/stores';

	import BackButton from '$components/BackButton.svelte';
	import ImageButton from '$lib/components/ImgButton.svelte';
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import GameNav from '$components/GameNav.svelte';
	import Ariane from '$lib/components/Ariane.svelte';
	import { page } from '$app/stores';
	import Help from '$lib/components/Help.svelte';
	let folders = $page.params.folder;

	export let data;
	const { folder } = data;

	const folderItem = $selectedImages.find((item) => item.folder == folder) as TStoredImage;

	let images = [];
	if (folderItem) {
		images = folderItem.images;
	}
	$: countImg = images.length;
</script>

<section class="container min-h-screen">
	<div class="mt-11">
		<!-- <Ariane
			links={[
				{ name: 'Bibliothèque', src: '/themes' },
				{ name: 'Mes images', src: '/my-images' }
			]}
		/> -->
		<BackButton href="${folders}/themes" />
	</div>
	<div class="mt-11">
		<Ariane
			links={[
				{ name: 'Mes dossiers', src: '/folders' },
				{ name: folders, src: '/folders/folder1' }
			]}
		/>
	</div>
	<div class="mt-5" />
	<h2 class="decoration-black text-3xl font-patrick font-bold mt-6 mb-8">Les images choisies</h2>
	<Help>Cliquez sur le bouton ‘+’ pour ajouter une/des image(s) !</Help>
	<CardsGrid>
		<a href={`/folders/${folder}/themes`}
			><div
				class="cross border-black border-8 border-inset rounded-xl w-full h-full aspect-square relative"
			/>
		</a>
		{#each images as image}
			<ImageButton {image} />
		{/each}
	</CardsGrid>
	{#if countImg == 0}
		<p class="text-xl font-patrick mt-12 mb-36">Vous n'avez pas encore selectionné d'images :(</p>
	{/if}

	<GameNav disabled={countImg == 0} />
</section>

<style>
	.cross::before,
	.cross::after {
		content: '';
		width: 30%;
		height: 4%;
		border-radius: 30px;
		position: absolute;
		top: 50%;
		left: 50%;
		background-color: black;
		transform: translate(-50%, -50%);
	}
	.cross::after {
		transform: translate(-50%, -50%) rotate(90deg);
	}
</style>
