<script lang="ts">
	import { questions } from '$utils/questions';

	import type { TImage } from '$lib/data/images';
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import { page } from '$app/stores';
	import { selectedImages } from '$src/stores';
	// export let data;
	// const { folder } = data;

	const folder = $page.params.folder;

	const folderItemIndex = $selectedImages.findIndex((item) => item.folder === folder);

	const folderItem = $selectedImages[folderItemIndex];

	let images;
	if (folderItemIndex == -1) {
		images = [];
	} else {
		images = folderItem.images;
	}
	$: question = '';

	const handleClick = (images: TImage[]) => {
		question = questions(images);
	};

	console.log();
</script>

<section class="py-16 relative h-full">
	<img
		src="/images/stain/bottom-right-yellow-form-v2.png"
		alt=""
		class="-z-10 absolute bottom-0 right-0"
	/>
	<img src="/images/stain/red-top-left.png" alt="" class="-z-10 absolute top-0 left-0" />
	<h1 class="text-6xl mt-8">À toi de jouer !</h1>
	<button class="bg-blue p-4 rounded font-patrick mt-4" on:click={() => handleClick(images)}
		>Poser une question</button
	>
	<p class="text-xl w-full text-center">{question}</p>
	<CardsGrid classes="my-4">
		{#each images as image}
			<div class="w-full aspect-square">
				<img class="w-full h-full object-cover rounded-3xl" src={image.src} alt="" srcset="" />
			</div>
		{/each}
	</CardsGrid>

	{#if $selectedImages.length === folderItemIndex + 1}
		<a href="/folders" class="text-grey font-patrick underline">Fin de partie</a>
	{:else}
		<a
			href={`/folders/${$selectedImages[folderItemIndex + 1]}/play`}
			class="text-grey font-patrick underline">Suivant</a
		>
	{/if}
</section>
