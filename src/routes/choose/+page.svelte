<script lang="ts">
	import ImageButton from '$lib/ImageButton.svelte';
	import type { TImage } from '$lib/images';
	import { selectedImages } from '../../stores';
	import type { TCategorie } from '$lib/images';

	$selectedImages = [];
	export let data: { images: TImage[]; categories: TCategorie[] };

	const { images, categories } = data;

	function setSelectedImages(image: TImage) {
		const index = $selectedImages.findIndex((img) => img.src === image.src);

		console.log($selectedImages, index);
		if (index === -1) {
			// Object not found, add it to the array
			return ($selectedImages = [...$selectedImages, image]);
		} else {
			// Object found, remove it from the array
			return ($selectedImages = [
				...$selectedImages.slice(0, index),
				...$selectedImages.slice(index + 1)
			]);
		}
	}
	//console.log({ data });
</script>

<p>Page choose</p>

<div class="grid gap-4 grid-cols-3 grid-rows-3 mx-6">
	{#each images as image}
		{#if images.categorie == 'voiture'}
			<section>
				<h3>voiture</h3>
				<ImageButton {image} onClick={setSelectedImages} />
			</section>
		{/if}
		{#if images.categorie == 'chat'}
			<section>
				<h3>Chat</h3>
				<ImageButton {image} onClick={setSelectedImages} />
			</section>
		{/if}
		{#if images.categorie == 'vache'}
			<section>
				<h3>Chien</h3>
				<ImageButton {image} onClick={setSelectedImages} />
			</section>
		{/if}
	{/each}

	<a href="/play" class="p-4 bg-gray-200 rounded-md">Start a game !</a>
</div>
