<script lang="ts">
	import { questions } from '$utils/questions';

	import type { TImage } from '$lib/data/images';
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import { selectedImages, type TStoredImage } from '$src/stores';
	import H1 from './H1.svelte';
	import Button from './Button.svelte';
	import ImgButton from './ImgButton.svelte';
	import InGameImage from './InGameImage.svelte';
	// export let data;
	// const { folder } = data;
	export let activeImages: TStoredImage;
	export let image: TImage;
	// $: folderItemIndex = $selectedImages.findIndex((item) => item.folder === activeImages);

	// const folderItem = $selectedImages[folderItemIndex];

	// let images;
	// if (folderItemIndex == -1) {
	// 	images = [];
	// } else {
	// 	images = folderItem.images;
	// }

	export let onClick: (image: TImage) => void;
	$: active = '';

	$: question = '';

	const handleClick = (images: TImage[]) => {
		question = questions(images);
	};
</script>

<section class="mr-0 h-screen flex justify-between flex-col">
	<p class="text-xl w-full text-center">{question}</p>
	<CardsGrid classes="sm:!grid-cols-5 my-4">
		{#each activeImages.images as image}
			<div class="w-full aspect-square">
				<InGameImage />
			</div>
		{/each}
	</CardsGrid>
	<div>
		<!-- TODO : Btn doit ouvrir nav bar -->

		<!-- <button
			class="bg-blue p-4 rounded font-comforta-regular mt-4"
			on:click={() => handleClick(activeImages.images)}>Poser une question</button
		> -->
	</div>

	<!-- {#if $selectedImages.length === folderItemIndex + 1}
		<a href="/folders" class="text-grey font-comforta-regular underline">Fin de partie</a>
	{:else}
		<a
			href={`/folders/${$selectedImages[folderItemIndex + 1]}/play`}
			class="text-grey font-comforta-regular underline">Suivant</a
		>
	{/if} -->
</section>
