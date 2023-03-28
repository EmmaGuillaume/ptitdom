<script lang="ts">
	import { selectedImages } from '../../stores';

	const images = $selectedImages;
</script>

<div class="grid gap-4 grid-cols-3 mx-6 mt-9 mb-10">
	{#each images as image}
		<div class="w-full aspect-square">
			<img class="w-full h-full object-cover" src={image.src} alt="" srcset="" />
		</div>
	{/each}
</div>

<a
	href="/choose"
	class="mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl block mx-auto"
	>Revenir en arrière
</a>
