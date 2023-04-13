<script lang="ts">
	import Section from './Section.svelte';

	import { categories } from '$lib/data/categories';
	import CardsGrid from './CardsGrid.svelte';
	import ImgButton from './ImgButton.svelte';
</script>

<Section>
	<p>library</p>
	{#each categories as categorie}
		<p>{categorie.name}</p>
		<CardsGrid>
			{#each categorie.images as image}
				<ImgButton {image} />
			{/each}
		</CardsGrid>
	{/each}
</Section>
