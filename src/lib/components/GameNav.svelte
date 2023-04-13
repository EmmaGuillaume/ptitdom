<script lang="ts">
	import { selectedImages } from '$src/stores';
	import ActionsBar from './ActionsBar.svelte';
	import Button from './Button.svelte';
	import { page } from '$app/stores';
	let folder = $page.params.folder;
	const handleDelete = () => {
		$selectedImages = [];
	};
	export let disabled: boolean;
	$: isDisabled = disabled;

	$: countImg = $selectedImages.length;
</script>

<!-- <ActionsBar classes="right-0">
	<Button
		icon={{ src: '/images/icons/play.png', alt: '', classes: 'w-4/12 mx-auto' }}
		href="/play"
		variant={'subtle'}
	>
		<p class="text-2xl">Commencer le jeu !</p>
	</Button>
</ActionsBar> -->

<ActionsBar classes="gamenav left-1/2 -translate-x-1/2">
	<div class={`grid grid-cols-2 ${countImg == 0 ? 'disabled' : ''}`}>
		<Button
			onClick={handleDelete}
			disabled={countImg == 0}
			classes="startgame text-red p-4 text-center rounded-2xl font-comforta-regular font-bold text-xl block mx-auto"
			variant="subtle"
		>
			<div class="w-12 aspect-square bg-red rounded-full mx-auto grid place-items-center">
				<img class="w-1/2 h-1/2" src="/images/icons/deleteFolder.svg" alt="" srcset="" />
			</div>
			Tout supprimer
		</Button>

		<!-- //TODO: c'est degueu mais ça marche -->
		{#if countImg == 0}
			<Button
				href={``}
				classes="startgame text-blue p-4 text-center rounded-2xl font-comforta-regular font-bold text-xl block mx-auto"
				variant="subtle"
			>
				<div class="w-12 aspect-square bg-blue rounded-full mx-auto grid place-items-center">
					<img class="w-1/2 h-1/2" src="/images/icons/play.svg" alt="" srcset="" />
				</div>

				Commencer le jeu
			</Button>
		{:else}
			<Button
				href={`/folders/${$selectedImages[0].folder}/play`}
				classes="startgame text-blue p-4 text-center rounded-2xl font-comforta-regular font-bold text-xl block mx-auto"
				variant="subtle"
			>
				<div class="w-12 aspect-square bg-blue rounded-full mx-auto grid place-items-center">
					<img class="w-1/2 h-1/2" src="/images/icons/play.svg" alt="" srcset="" />
				</div>

				Commencer le jeu
			</Button>
		{/if}
	</div>
</ActionsBar>

<style global>
	.gamenav {
		background-color: rgba(255, 255, 255, 0.546);
	}
	.disabled button,
	.disabled a {
		opacity: 0.6;
	}
</style>
