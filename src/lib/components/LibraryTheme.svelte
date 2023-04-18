<script lang="ts">
	import type { TImage } from '$lib/data/images';
	import CardsGrid from './CardsGrid.svelte';
	import H2 from './H2.svelte';

	import ImgButton from './ImgButton.svelte';

	export let categorie: { name: string; images: TImage[] };
</script>

<div class="md:mr-40" id={categorie.name}>
	<H2>{categorie.name}</H2>
	<CardsGrid>
		{#each categorie.images as image}
			<ImgButton {image} />
		{/each}
	</CardsGrid>
</div>
