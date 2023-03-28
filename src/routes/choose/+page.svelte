<script lang="ts">
	import type { images, TImage } from '$lib/images';
	import type { PageData } from './$types';

	export let data: { images: TImage[] };

	const { images } = data;
	console.log({ data });
</script>

<p>Page choose</p>

<div class="">
	{#each images as image}
		<img src={image.src} alt={image.alt} srcset="" />
	{/each}
</div>
