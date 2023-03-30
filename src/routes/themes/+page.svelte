<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import { categories, type TImage, type TThemes } from '$lib/images';
	import type { TCategorie } from '$lib/images';

	export let data: { themes: TThemes[] };

	const { themes } = data;
</script>

<main class="mx-8 mt-24 md:ml-24 md:mt-20">
	<Nav />
	<a href="../" class="decoration-black text-3xl font-patrick font-bold">Accueil</a>
	<h2 class="decoration-black text-2xl font-patrick font-bold mt-4">Bibliothèque d'images</h2>
	{#each themes as theme}
		<h3 class="decoration-black text-xl font-patrick font-bold mt-12 mb-6">{theme.name}</h3>
		<div
			class="z-0 grid gap-4 grid-cols-2 mx-2 mb-10 md:grid-cols-3 xl:grid-cols-8 xl:mx-0 xl:gap-4"
		>
			{#each theme.categoriesName as categorie}
				<a href={`/categories/${categorie.name}`} class="w-full relative md:w-10/12 xl:w-full"
					><img
						src={categorie.cover}
						alt={categorie.name}
						class="aspect-square object-cover rounded-3xl drop-shadow-card brightness-50 w-full"
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
