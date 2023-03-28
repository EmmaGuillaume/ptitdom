<script lang="ts">
	import type { TImage } from '$lib/images';
	import { each } from 'svelte/internal';
	import { selectedImages } from '../../stores';

	const images = $selectedImages;
</script>

<div class="grid gap-4 grid-cols-3 grid-rows-3 mx-6">
	{#each images as image}
		<img src={image.src} alt="" srcset="" />
	{/each}
</div>
