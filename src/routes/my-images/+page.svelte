<script lang="ts">
	import { selectedImages } from '../../stores';

	const images = $selectedImages;
	$: countImg = $selectedImages.length;

	function del(img) {
		alert('delete');
	}
</script>

<h2 class="decoration-black text-3xl font-mono font-bold mt-28 mx-16">Les cartes choisies</h2>
<div class="grid gap-5 grid-cols-3 grid-rows-2 mx-20 mb-10 xl:grid-cols-3 xl:grid-rows-3">
	{#each images as image}
		<img
			on:click={del}
			class="object-cover w-full aspect-square rounded-3xl"
			src={image.src}
			alt={image.name}
			srcset=""
		/>
	{/each}
</div>
{#if countImg == 0}
	<p class="text-xl font-mono mx-28 mt-12 mb-36">Vous n'avez pas encore selectionné d'images :(</p>
	<style>
		.startgame {
			display: none;
		}
	</style>
{/if}
<div class="flex flex-row">
	<a
		href="/theme"
		class="mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl block mx-auto"
		>Revenir à l’accueil</a
	>
	<a
		href="/play"
		class="startgame bg-green mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl font-mono font-bold text-xl block mx-auto"
		>Commencer le jeu
	</a>
</div>
