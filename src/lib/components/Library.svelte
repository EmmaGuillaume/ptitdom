<script lang="ts">
	import Section from './Section.svelte';

	import { themes } from '$lib/data/themes';
	import H1 from './H1.svelte';
	import H2 from './H2.svelte';
	import LibraryTheme from './LibraryTheme.svelte';

</script>

<Section>
	<H1>Bibliothèque d’images</H1>

	{#each themes as theme}
		<button>{theme.name}</button>
	{/each}

	{#each themes as theme}
		<div id="{theme.name}">
			<H2>{theme.name}</H2>
			{#each theme.categoriesName as categorieName}
				<LibraryTheme categorieName={categorieName.name} />
			{/each}
		</div>
	{/each}
</Section>