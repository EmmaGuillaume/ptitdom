<script lang="ts">
	import Section from './Section.svelte';

	import { themes } from '$lib/data/themes';
	import H1 from './H1.svelte';
	import H2 from './H2.svelte';
	import LibraryTheme from './LibraryTheme.svelte';

	$: filter = '';
	function handleClick(themeName: string) {
		filter = themeName;
	}
</script>

<Section>
	<H1>Bibliothèque d’images</H1>

	{#each themes as theme}
		<button on:click={() => handleClick(theme.name)}>{theme.name}</button>
	{/each}

	{#each themes as theme}
		{#if filter != ''}
			{#if filter === theme.name}
				<div id={theme.name} class="divTheme">
					<!-- ? Peut être changer le nom de la classe -->
					<H2>{theme.name}</H2>
					{#each theme.categoriesName as categorieName}
						<LibraryTheme categorieName={categorieName.name} />
					{/each}
				</div>
			{/if}
		{:else}
			<div id={theme.name} class="divTheme">
				<!-- ? Peut être changer le nom de la classe -->
				<H2>{theme.name}</H2>
				{#each theme.categoriesName as categorieName}
					<LibraryTheme categorieName={categorieName.name} />
				{/each}
			</div>
		{/if}
	{/each}
</Section>
