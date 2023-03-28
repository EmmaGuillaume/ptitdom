<script lang="ts">
	import ImageButton from '$lib/ImageButton.svelte';
	import type { TCategorie } from '$lib/images';
	import { categories } from '$lib/images.ts';
	export let data;
	console.log(data);
	const { categorieData } = data as { categorieData: TCategorie };

	const setSelectedImages = () => {};
</script>

<div class=" h-[600px] overflow-y-scroll">
	<div class="grid gap-4 grid-cols-3 grid-rows-2 mx-20 mb-10">
		{#each categorieData.images as categorie}
			<ImageButton src={categorie.src} onClick={setSelectedImages} />
			<!-- <img src={categorie.src} alt="" srcset="" /> -->
		{/each}
	</div>
</div>

<a
	href="/theme"
	class="mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl block mx-auto"
	>Revenir en arrière
</a>
