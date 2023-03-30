<script lang="ts">
	export let isActive: boolean = false;
	export let text =
		'Êtes vous sûr.e de vouloir supprimer les images ?Cette action est irréversible.';

	let src = '/icons/close.png';
</script>

<svelte:head>
	<link rel="preload" href={src} as="image" />
</svelte:head>

{#if isActive}
	<section on:click={() => (isActive = false)} on:keydown />
	<div class={' bg-white relative pt-6 pb-16 px-6 gap-2 flex flex-col rounded-xl	w-[400px]'}>
		<button on:click={() => (isActive = false)} class="absolute h-14 w-14 -right-7 -top-5">
			<img src="/images/close-pop-up.png" alt="" class="w-8/12" />
		</button>
		{#if text}
			<p class="font-button">{@html text}</p>
			<div class="mt-9 flex gap-24">
				<!-- TODO : pour oui : Action del IMG dans my-image -->
				<button on:click={() => (isActive = false)} class="bg-red text-white py-1 px-6 rounded-xl"
					>Oui</button
				>
				<button on:click={() => (isActive = false)} class="bg-grey text-white py-1 px-6 rounded-xl"
					>Non</button
				>
			</div>
		{/if}
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
