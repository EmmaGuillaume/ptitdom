<script lang="ts">
	import { activeSelectedImages, type TStoredImage } from '$src/stores';

	export let onClick: (folder: TStoredImage) => void;
	export let folder: TStoredImage;
	import { removeSelectedImage } from '$utils/selected';

	import H2 from './H2.svelte';
	import CardsGrid from './CardsGrid.svelte';

	import type { TImage } from '$lib/data/images';

	export let activeImages: TStoredImage;

	function handleClick(image: TImage) {
		removeSelectedImage(image, $activeSelectedImages.folder);
	}
</script>

<div class="bg-lightblue w-6/12 h-screen px-md">
	<H2 classes="!m-0 pt-lg pb-md ">{folder}</H2>
	<CardsGrid classes="sm:!grid-cols-2 xl:!grid-cols-2 gap-2">
		{#each activeImages.images as image}
			<button on:click={() => handleClick(image)}>
				<img
					src={image.src}
					alt=""
					class="border-2 border-stroke aspect-square object-cover rounded-lg"
				/>
			</button>
		{/each}
	</CardsGrid>
</div>
