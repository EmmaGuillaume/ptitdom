<script lang="ts">
	import Section from './Section.svelte';
	import { themes } from '$lib/data/themes';
	import H1 from './H1.svelte';
	import H2 from './H2.svelte';
	import LibraryTheme from './LibraryTheme.svelte';

	let filter = '';
	let showButtons = false;

	function handleClick(themeName: string) {
		filter = filter === themeName ? '' : themeName;
	}

	function functionShowButtons() {
		showButtons = !showButtons;
	}
</script>

<Section>
	<H1>Bibliothèque d’images</H1>

	<button class="btnShowButtons" on:click={() => functionShowButtons()}>+ Ajouter un filtre</button>

	{#if showButtons}
		<div class="divThemes">
			{#each themes as theme}
				<button on:click={() => handleClick(theme.name)}>{theme.name}</button>
			{/each}
		</div>
	{/if}

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
</Section>

<style>

.btnShowButtons {
	padding-left: 5px;
	padding-right: 5px;
	background: #F8F8F8;
	border-radius: 5px;
}

.divThemes {
	position: absolute;
	transform: translateY(15px);
	display: flex;
	flex-direction: column;
	align-items: start;
	padding-left: 5px;
	padding-right: 5px;
	background: #F8F8F8;
	border-radius: 5px;
	z-index: 100;
	box-shadow: 0px 0px 10px -5px;
}

</style>
