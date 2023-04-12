<script lang="ts">
	import Nav from '$components/Nav.svelte';
	import Ariane from '$components/Ariane.svelte';
	import BackButton from '$components/BackButton.svelte';
	import ImgButton from '$lib/components/ImgButton.svelte';

	import type { TCategorie } from '$data/categories';
	import ActionsBar from '$lib/components/ActionsBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import { page } from '$app/stores';
	let folders = $page.params.folder;

	export let data;

	const { categorieData } = data as { categorieData: TCategorie };
</script>

<section class="container mt-16 px-8 md:px-16">
	<BackButton href={`/folders/${$page.params.folder}/themes`}>Thématiques</BackButton>
	<div class="mt-5">
		<Ariane
			links={[
				{ name: 'Mes dossiers', src: '/folders' },
				{ name: folders, src: '/folders/folder1' },
				{ name: 'Thématiques ', src: '/folders/folder1/themes' },
				{ name: categorieData.name, src: `/categories/${categorieData.name}` }
			]}
		/>
	</div>
	<!-- <Nav /> -->

	<h1 class="decoration-black text-5xl font-patrick mt-16">Ajouter des images</h1>
	<div class="mt-4" />
	<h2 class="decoration-black text-3xl font-patrick font-bold mt-14 capitalize mb-7">
		{categorieData.name}
	</h2>
	<CardsGrid classes="mb-10">
		{#each categorieData.images as image}
			<ImgButton {image} />
		{/each}
	</CardsGrid>
	<ActionsBar classes="right-0 flex">
		<Button
			icon={{ src: '/images/icons/play.svg', alt: '', classes: 'w-4/12 mx-auto' }}
			href="/play"
			variant={'subtle'}
		>
			<p class="text-2xl">Commencer le jeu !</p>
		</Button>
	</ActionsBar>
</section>
