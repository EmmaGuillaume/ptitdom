<script lang="ts">
	import type { TCategorie } from '$lib/images';
	import { categories } from '$lib/images.ts';
	export let data;
	console.log(data);
	const { categorieData } = data as { categorieData: TCategorie };
</script>

{#each categorieData.images as categorie}
	<img src={categorie.src} alt="" srcset="" />
{/each}
