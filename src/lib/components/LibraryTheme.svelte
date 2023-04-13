<script lang="ts">
	import { categories, type TCategorie } from '$lib/data/categories';
	import type { TThemes } from '$lib/data/themes';
	import CardsGrid from './CardsGrid.svelte';

	import H3 from './H3.svelte';
	import ImgButton from './ImgButton.svelte';

	export let categorieName: string;

	let categoriesNames = categories.find((categorie) => {
		return categorie.name === categorieName;
	}) as TCategorie;

</script>

<div id="{categoriesNames.name}">
    <H3>{categoriesNames.name}</H3>
    <CardsGrid>
        {#each categoriesNames.images as image}
            <ImgButton {image} />
        {/each}
    </CardsGrid>
</div>