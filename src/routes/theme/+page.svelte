<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import { categories, type TImage, type TThemes } from '$lib/images';
	import type { TCategorie } from '$lib/images';

	export let data: { themes: TThemes[] };

	const { themes } = data;
</script>

<main class="ml-24 mt-20">
	<Nav />
	<a href="../" class="decoration-black text-3xl font-mono font-bold">Accueil</a>
	<h2 class="decoration-black text-2xl font-mono font-bold mt-[31px]">Visiter les thèmes</h2>
	{#each themes as theme}
		<h3 class="decoration-black text-xl font-mono font-bold my-[31px]">{theme.name}</h3>
		<div class="flex flex-row gap-8">
			{#each theme.categoriesName as categorie}
				<a href={`/categories/${categorie.name}`} class="w-1/4 relative"
					><img
						src={categorie.cover}
						alt={categorie.name}
						class="aspect-square object-cover rounded-3xl drop-shadow-card brightness-50"
					/>
					<p
						class="text-3xl font-bold z-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white capitalize"
					>
						{categorie.name}
					</p>
				</a>
			{/each}
		</div>
	{/each}
</main>
