<script lang="ts">
	import type { TStoredImage } from '$src/stores';
	import CardsGrid from './CardsGrid.svelte';
	import H3 from './H3.svelte';
	import Section from './Section.svelte';

	export let activeImages: TStoredImage;
</script>

<Section classes="w-full">
	<H3>pile</H3>
	<CardsGrid classes="xl:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-2">
		{#each activeImages.images as image}
			<img src={image.src} alt="" class="aspect-square object-cover rounded-sm" />
		{/each}
	</CardsGrid>
</Section>
