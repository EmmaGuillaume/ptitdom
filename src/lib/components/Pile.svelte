<script lang="ts">
	import type { TStoredImage } from '$src/stores';
	import Section from './Section.svelte';

	export let activeImages: TStoredImage;
</script>

<Section classes="w-2/6">
	<p>pile</p>
	{#each activeImages.images as image}
		<p>{image.src}</p>
	{/each}
</Section>
