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
<a
	href="/theme"
	class="mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl block mx-auto"
	>Revenir en arrière
</a>
