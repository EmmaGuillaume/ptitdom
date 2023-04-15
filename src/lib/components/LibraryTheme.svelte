<script lang="ts">
	import { categories, type TCategorie } from '$lib/data/categories';
	import type { TThemes } from '$lib/data/themes';
	import CardsGrid from './CardsGrid.svelte';
	import H2 from './H2.svelte';

	import ImgButton from './ImgButton.svelte';

	export let categorieName: string;

	let categoriesNames = categories.find((categorie) => {
		return categorie.name === categorieName;
	}) as TCategorie;
</script>

<div class="md:mr-40" id={categoriesNames.name}>
	<H2>{categoriesNames.name}</H2>
	<CardsGrid>
		{#each categoriesNames.images as image}
			<ImgButton {image} />
		{/each}
	</CardsGrid>
</div>
