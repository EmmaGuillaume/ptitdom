<script lang="ts">
	import { themes } from '$lib/data/themes';
	import H1 from './H1.svelte';
	import H2 from './H2.svelte';
	import LibraryTheme from './LibraryTheme.svelte';
	import P from './P.svelte';

	let filter = '';

	function handleClick(themeName: string) {
		filter = filter === themeName ? '' : themeName;
	}
</script>

<div class="px-md md:pl-[7%]">
	<div class=" bg-white py-0 md:py-lg">
		<H1 classes="w-fit h-fit">Bibliothèque d’images</H1>

		<P>Cliquez pour ajouter une image au paquet</P><br />
		<div class="grid grid-cols-3 mb-md md:mt-lg md:mb-0">
			{#each themes as theme}
				<a href="/dashboard#{theme.name}"><P classes=" underline">{theme.name}</P></a>
				<!-- <button on:click={() => handleClick(theme.name)}
					>{theme.name}</button
				> -->
			{/each}
		</div>
	</div>

	{#each themes as theme}
		{#if !filter || filter === theme.name}
			<div class="divTheme" id={theme.name}>
				<H2 classes="w-[99%] border-b-[1px] mb-md  mt-lg first:mt-0">{theme.name}</H2>
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
