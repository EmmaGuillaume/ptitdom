<script lang="ts">
	import Nav from '$components/Nav.svelte';
	import Ariane from '$components/Ariane.svelte';
	import BackButton from '$components/BackButton.svelte';
	import ImgButton from '$lib/components/ImgButton.svelte';

	import { setSelectedImages } from '$utils/selected';

	import type { TCategorie } from '$data/categories';
	import ActionsBar from '$lib/components/ActionsBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import CardsGrid from '$lib/components/CardsGrid.svelte';

	export let data;

	const { categorieData } = data as { categorieData: TCategorie };
</script>

<section class="container mt-28">
	<BackButton href="/themes" />

	<Nav />

	<h1 class="decoration-black text-5xl font-patrick mt-16">Ajouter des images</h1>
	<div class="mt-4">
		<Ariane
			links={[
				{ name: 'Bibliothèque', src: '/themes' },
				{ name: categorieData.name, src: `/categories/${categorieData.name}` }
			]}
		/>
	</div>
	<h2 class="decoration-black text-3xl font-patrick font-bold mt-14 capitalize mb-7">
		{categorieData.name}
	</h2>
	<CardsGrid classes="mb-10">
		{#each categorieData.images as image}
			<ImgButton {image} />
		{/each}
	</CardsGrid>
	<ActionsBar />
</section>
