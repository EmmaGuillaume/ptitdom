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

<div class="relative md:static w-full bg-lightblue h-fit md:h-screen p-md">
	<div class="absolute left-0 top-0 p-md md:hidden">
		<a class="rounded-full mx-auto grid place-items-center" href="/play">
			<img class="w-xl mx-auto" src="/images/icons/burger.svg" alt="" srcset="" />
		</a>
	</div>
	<div class="absolute right-0 top-0 p-md md:hidden">
		<a class="rounded-full mx-auto grid place-items-center" href="/play">
			<img class="w-xl mx-auto" src="/images/icons/play-blue.svg" alt="" srcset="" />
		</a>
	</div>
	<H2 classes="!m-0 pt-sm px-2xl md:pt-lg pb-md md:pl-0">{folder}</H2>
	<p class="text-l-p mb-md">Cliquez pour enlever une image du paquet</p>
	<CardsGrid classes="gap-2 !grid-cols-5 md:!grid-cols-2">
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
