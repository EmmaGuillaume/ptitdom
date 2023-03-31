<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
	import type { TImage } from '$lib/images';
	import { questions } from '$lib/utils/questions';
	import { selectedImages } from '../../stores';

	const images = $selectedImages;
	$: question = '';

	const handleClick = (images: TImage[]) => {
		question = questions(images);
	};
</script>

<main class="p-16 h-[100vh]">
	<BackButton href="/my-images" />
	<button class="bg-blue p-4 rounded font-patrick mt-4" on:click={() => handleClick(images)}
		>Poser une question</button
	>
	<p class="text-xl w-full text-center">{question}</p>

	<div class="grid gap-4 grid-cols-2 mt-9 mb-10 md:grid-cols-3 xl:grid-cols-5">
		{#each images as image}
			<div class="w-full aspect-square">
				<img class="w-full h-full object-cover rounded-3xl" src={image.src} alt="" srcset="" />
			</div>
		{/each}
	</div>
</main>
