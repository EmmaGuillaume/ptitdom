<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import ImageButton from '$lib/ImageButton.svelte';
	import type { TCategorie, TImage } from '$lib/images';
	import { selectedImages, validation } from '../../../stores';
	import BackButton from '$lib/BackButton.svelte';
	import Ariane from '$lib/Ariane.svelte';

	export let data;
	console.log(data);
	const { categorieData } = data as { categorieData: TCategorie };

	function setSelectedImages(image: TImage) {
		$validation = false;
		const index = $selectedImages.findIndex((img: TImage) => img.src === image.src);
		//console.log($selectedImages);

		//console.log($selectedImages, index);
		if (index === -1) {
			// Object not found, add it to the array
			$validation = true;
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

<div class="mx-16 mt-28">
	<BackButton href="/themes" />
	<Nav />
	<!-- <div class=" h-[600px] overflow-y-scroll mr-[120px] ml-[120px] justify-between"> -->
	<h1 class="decoration-black text-5xl font-patrick mt-16">Ajouter des images</h1>
	<div class="mt-4">
		<Ariane
			links={[
				{ name: 'Bibliothèque', src: '/themes' },
				{ name: categorieData.name, src: `/categories/${categorieData.name}` }
			]}
		/>
	</div>
	<h2 class="decoration-black text-3xl font-patrick font-bold mt-14 capitalize mb-7">
		{categorieData.name}
	</h2>
	<div class="grid gap-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 mb-10">
		{#each categorieData.images as image}
			<ImageButton {image} onClick={setSelectedImages} />
		{/each}
	</div>
	<!-- </div> -->
</div>
