<script lang="ts">
	import { removeSelectedImage } from '$utils/selected';
	import { type TStoredImage, type TImage, activeSelectedImages } from '$src/stores';

	import H3 from './H3.svelte';
	import Section from './Section.svelte';
	import CardsGrid from './CardsGrid.svelte';

	export let activeImages: TStoredImage;

	function handleClick(image: TImage) {
		removeSelectedImage(image, $activeSelectedImages.folder);
	}
</script>

<Section classes="w-full">
	<H3>pile</H3>
	<CardsGrid classes="xl:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-2">
		{#each activeImages.images as image}
			<button on:click={() => handleClick(image)}>
				<img src={image.src} alt="" class="aspect-square object-cover rounded-sm" />
			</button>
		{/each}
	</CardsGrid>
</Section>
