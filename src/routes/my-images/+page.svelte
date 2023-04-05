<script lang="ts">
	import { selectedImages } from '$src/stores';
	import { setSelectedImages } from '$utils/selected';

	import BackButton from '$components/BackButton.svelte';
	import GameNav from '$components/GameNav.svelte';
	import ImageButton from '$lib/components/ImgButton.svelte';
	import CardsGrid from '$lib/components/CardsGrid.svelte';

	const images = $selectedImages;
	$: countImg = $selectedImages.length;
</script>

<section class="container min-h-screen">
	<div class="mt-11">
		<!-- <Ariane
			links={[
				{ name: 'Bibliothèque', src: '/themes' },
				{ name: 'Mes images', src: '/my-images' }
			]}
		/> -->
		<BackButton href="/themes" />
	</div>

	<h2 class="decoration-black text-3xl font-patrick font-bold mt-6 mb-8">Les images choisies</h2>
	<img src="/images/icons/light.svg" alt="" class="inline-block mr-4 mb-10" />
	<p class="decoration-black text-xl font-patrick font-bold inline-block">
		Cliquez sur une image pour la sélectionner !
	</p>
	<CardsGrid>
		{#each images as image}
			<ImageButton {image} onClick={setSelectedImages} />
		{/each}
	</CardsGrid>
	{#if countImg == 0}
		<p class="text-xl font-patrick mt-12 mb-36">Vous n'avez pas encore selectionné d'images :(</p>
	{/if}

	<GameNav disabled={countImg === 0} />
</section>
<img class="absolute bottom-0 left-0 -z-10" src="/images/stain/yellow-bottom-left.png" alt="" />
<img class="absolute bottom-0 right-0 -z-10" src="/images/stain/orange-bottom-right.png" alt="" />
