<script lang="ts">
	import ImageButton from '$lib/ImageButton.svelte';
	import type { TCategorie, TImage } from '$lib/images';
	import { selectedImages } from '../../../stores';

	export let data;
	console.log(data);
	const { categorieData } = data as { categorieData: TCategorie };

	function setSelectedImages(image: TImage) {
		const index = $selectedImages.findIndex((img: TImage) => img.src === image.src);
		console.log($selectedImages);

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
</script>

<div class=" h-[600px] overflow-y-scroll">
	<div class="grid gap-4 grid-cols-3 grid-rows-2 mx-20 mb-10">
		{#each categorieData.images as categorie}
			<ImageButton src={categorie.src} onClick={setSelectedImages} />
			<!-- <img src={categorie.src} alt="" srcset="" /> -->
			<ImageButton {image} onClick={setSelectedImages} />
			<!-- <img src={categorie.src} alt="" srcset="" /> -->
		{/each}
	</div>
</div>

<a
	href="/theme"
	class="mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl block mx-auto"
	>Revenir en arrière
</a>
