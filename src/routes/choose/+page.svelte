<script lang="ts">
	import ImageButton from '$lib/ImageButton.svelte';
	import type { TImage } from '$lib/images';
	import { selectedImages } from '../../stores';

	export let data: { images: TImage[] };

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
	const { images } = data;
	//console.log({ data });
</script>

<p>Page choose</p>

<div class="grid gap-4 grid-cols-3 grid-rows-3 mx-6">
	{#each images as image}
		<ImageButton {image} onClick={setSelectedImages} />
	{/each}

	<a href="/play" class="p-4 bg-gray-200 rounded-md">Start a game !</a>
</div>
