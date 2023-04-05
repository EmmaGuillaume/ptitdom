<script lang="ts">
	import { selectedImages } from '$src/stores';
	import { questions } from '$utils/questions';

	import type { TImage } from '$lib/data/images';
	import CardsGrid from '$lib/components/CardsGrid.svelte';

	const images = $selectedImages;
	$: question = '';

	const handleClick = (images: TImage[]) => {
		question = questions(images);
	};
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

	<a href="/my-images" class="text-grey font-patrick underline">Fin de partie</a>
</section>
