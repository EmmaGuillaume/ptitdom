<script lang="ts">
	import { removeSelectedImage } from '$utils/selected';
	import { type TStoredImage, activeSelectedImages } from '$src/stores';

	import H3 from './H3.svelte';
	import CardsGrid from './CardsGrid.svelte';

	import type { TImage } from '$lib/data/images';

	export let activeImages: TStoredImage;

	function handleClick(image: TImage) {
		removeSelectedImage(image, $activeSelectedImages.folder);
	}
</script>

<div>
	<H3>pile</H3>
	<CardsGrid classes="xl:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-2">
		{#each activeImages.images as image}
			<button on:click={() => handleClick(image)}>
				<img src={image.src} alt="" class="aspect-square object-cover rounded-sm" />
			</button>
		{/each}
	</CardsGrid>
</div>
