<script lang="ts">
	import Ariane from '$lib/Ariane.svelte';
	import BackButton from '$lib/BackButton.svelte';
	import ImgDel from '$lib/ImgDel.svelte';
	import { selectedImages } from '../../stores';

	const images = $selectedImages;
	$: countImg = $selectedImages.length;
</script>

<div class="mx-28">
	<h2 class="decoration-black text-3xl font-patrick font-bold mt-20 mb-16">Les cartes choisies</h2>
	<Ariane
		links={[
			{ name: 'Bibliothèque', src: '/themes' },
			{ name: 'Mes images', src: '/my-images' }
		]}
	/>
	<div class=" grid gap-5 grid-cols-1 xl:grid-cols-5 sm:grid-cols-3">
		{#each images as image}
			<ImgDel {image} />
		{/each}
	</div>
	{#if countImg == 0}
		<p class="text-xl font-patrick mt-12 mb-36">Vous n'avez pas encore selectionné d'images :(</p>
		<style>
			.startgame {
				display: none;
			}
		</style>
	{/if}
	<div class="flex flex-col my-16 md:flex-row">
		<a
			href="/play"
			class="startgame bg-green mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl font-patrick font-bold text-xl block mx-auto"
			>Commencer le jeu
		</a>
		<BackButton href="/themes" />
	</div>
</div>
