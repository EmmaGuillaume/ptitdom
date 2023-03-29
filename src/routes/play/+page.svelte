<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
	import { selectedImages } from '../../stores';

	const images = $selectedImages;
</script>

<div class="grid gap-4 grid-cols-2 mx-6 mt-9 mb-10 md:grid-cols-3 xl:grid-cols-5">
	{#each images as image}
		<div class="w-full aspect-square">
			<img class="w-full h-full object-cover rounded-3xl" src={image.src} alt="" srcset="" />
		</div>
	{/each}
</div>

<BackButton href="/my-images" />
