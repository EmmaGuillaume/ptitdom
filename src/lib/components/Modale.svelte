<script lang="ts">
	export let isActive: boolean = false;

	let src = '/icons/close.png';
</script>

<svelte:head>
	<link rel="preload" href={src} as="image" />
</svelte:head>

{#if isActive}
	<section on:click={() => (isActive = false)} on:keydown />
	<div class={' bg-white relative pt-6 pb-16 px-6 flex flex-col rounded-xl	w-[500px]'}>
		<p class="m-0 text-lg">Êtes vous sûr.e de vouloir supprimer cette image du dossier 2 ?</p>
		<p class="m-0 text-lg">Cette action est irréversible !</p>

		<div class="mt-9 flex gap-24">
			<button
				on:click={() => (isActive = false)}
				class="text-lg bg-red text-white py-1 px-4 rounded-lg"
			>
				<p>Oui</p>
			</button>
			<button
				on:click={() => (isActive = false)}
				class="text-lg bg-primary text-white py-1 px-4 rounded-lg"
			>
				<p>Non</p>
			</button>
		</div>
	</div>
{/if}

<style>
	section {
		position: fixed;
		inset: 0;
		display: grid;
		place-items: center;
		z-index: 2;
	}
	div {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		z-index: 20;
	}
</style>
