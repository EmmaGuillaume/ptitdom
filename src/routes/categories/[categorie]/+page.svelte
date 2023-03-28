<script lang="ts">
	import ImageButton from '$lib/ImageButton.svelte';
	import type { TCategorie } from '$lib/images';
	import { categories } from '$lib/images.ts';
	export let data;
	console.log(data);
	const { categorieData } = data as { categorieData: TCategorie };

	const setSelectedImages = () => {};
</script>

<div class="grid gap-4 grid-cols-3 grid-rows-2 mx-20 mb-10">
	{#each categorieData.images as categorie}
		<ImageButton src={categorie.src} onClick={setSelectedImages} />
		<!-- <img src={categorie.src} alt="" srcset="" /> -->
	{/each}
</div>
