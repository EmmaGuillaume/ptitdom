<script lang="ts">
	import type { TImage } from '$lib/images';

	export let data: { images: TImage[] };

	const { images } = data;
	//console.log({ data });
</script>

<p>Page choose</p>

<div class="grid gap-4 grid-cols-3 grid-rows-3">
	{#each images as image}
		<img src={image.src} alt={image.alt} srcset="" />
	{/each}
</div>
