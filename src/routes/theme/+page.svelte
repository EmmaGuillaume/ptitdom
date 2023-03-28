<script lang="ts">
	import type { categories, TImage, TThemes } from '$lib/images';
	import type { TCategorie } from '$lib/images';

	export let data: { themes: TThemes[] };

	const { themes } = data;
</script>

{#each themes as theme}
	<h3>{theme.name}</h3>
	{#each theme.categoriesName as categorie}
		<a href={`/categories/${categorie.name}`}><img src={categorie.cover} alt="" /></a>
	{/each}
{/each}
