<script lang="ts">
	import ImageButton from '$lib/ImageButton.svelte';
	import type { TImage } from '$lib/images';
	import { selectedImages } from '../../stores';

	$selectedImages = [];

	export let data: { images: TImage[] };
	const { images } = data;

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

<p class="decoration-black text-3xl font-mono font-bold mt-28 mx-16 mb-12">Choisir des images</p>

<div class="grid gap-4 grid-cols-3 grid-rows-2 mx-20 mb-10">
	{#each images as image}
		<ImageButton {image} onClick={setSelectedImages} />
	{/each}
</div>
<div class="flex flex-row">
	<a
		href="../"
		class="mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl block mx-auto"
		>Revenir à l’accueil</a
	>
	<a
		href="/play"
		class="mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl block mx-auto"
		>Start a game !
	</a>
</div>
