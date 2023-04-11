<script lang="ts">
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import ImgButton from '$lib/components/ImgButton.svelte';
	import { categories } from '$lib/data/categories';
	import { createSearchStore, searchHandler } from '$lib/stores/search';
	import { onDestroy } from 'svelte';

	const searchProducts = categories.map((categorie) => ({
		...categorie,
		searchTerms: `${categorie.name}`
	}));

	const searchStore = createSearchStore(searchProducts);

	const unsubscribe = searchStore.subscribe((model) => searchHandler(model));

	onDestroy(() => {
		unsubscribe();
	});
</script>

<input type="search" placeholder="Search..." bind:value={$searchStore.search} />

{#if $searchStore.search === ''}
	<p>start by typing something in the search bar</p>
{:else if $searchStore.filtered.length === 0}
	<p>No images found</p>
{:else}
	{#each $searchStore.filtered as searchResult}
		<h2>{searchResult.name}</h2>
		<CardsGrid>
			{#each searchResult.images as image}
				<ImgButton {image} />
			{/each}
		</CardsGrid>
	{/each}
{/if}
