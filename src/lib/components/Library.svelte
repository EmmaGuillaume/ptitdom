<script lang="ts">
	import { themes } from '$lib/data/themes';
	import H1 from './H1.svelte';
	import H2 from './H2.svelte';
	import LibraryTheme from './LibraryTheme.svelte';

	let filter = '';

	function handleClick(themeName: string) {
		filter = filter === themeName ? '' : themeName;
	}
</script>

<div class="">
	<H1>Bibliothèque d’images</H1>

	{#each themes as theme}
		<button on:click={() => handleClick(theme.name)}>{theme.name}</button>
	{/each}

	{#each themes as theme}
		{#if !filter || filter === theme.name}
			<div class="divTheme">
				<H2>{theme.name}</H2>
				{#each theme.categoriesName as categorieName}
					<LibraryTheme categorieName={categorieName.name} />
				{/each}
			</div>
		{/if}
	{/each}
</div>

<style>
	button {
		margin: 10px;
	}
</style>
