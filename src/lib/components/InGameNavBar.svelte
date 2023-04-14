<script lang="ts">
	import { activeSelectedImages, selectedImages, type TStoredImage } from '$src/stores';
	import Button from './Button.svelte';
	import NavBarPile from './NavBarPile.svelte';

	$: open = false;

	const handleClick = (folder: TStoredImage) => {
		$activeSelectedImages = folder;
		open = false;
	};

	const handleMenuToggle = () => {
		open = !open;
	};
</script>

<!--  -->
{#if open === true}
	<section on:click={handleMenuToggle} class="z-40 fixed w-screen h-screen bg-blue opacity-[0.7]" />
{/if}
<section
	class={`transition duration-150 z-50 fixed top-0 left-0 h-screen w-60 min-w-[18%] text-white bg-blue  ${
		open === false ? '-translate-x-full' : ''
	}`}
>
	<div class="flex flex-col items-start justify-between h-full relative">
		<div class="w-full">
			<a href="/">
				<div class="px-md mt-md w-full flex items-center gap-sm">
					<img src="images/mainlogo.png" alt="" class="w-xl" />
					<p class="text-4xl text-left">build</p>
				</div>
			</a>
			<!-- <a href="/play">Commencer le jeu</a> -->
			<div class="mt-28 flex justify-bottom flex-col items-start gap-0">
				{#each $selectedImages as folder}
					<NavBarPile onClick={handleClick} {folder} />
				{/each}
			</div>
		</div>
		<div class="p-md w-full">
			<a class="rounded-full mx-auto grid place-items-center" href="/dashboard">
				<img class="w-xl mx-auto" src="/images/icons/pause.svg" alt="" srcset="" />
			</a>
		</div>
		<Button
			onClick={handleMenuToggle}
			classes="bg-[transparent] underline text-black text-l-p bg-white absolute right-0 bottom-0 px-md p-md translate-x-full"
		>
			{#if open === false}
				Changer de paquet
			{:else}
				<img class="" src="/images/icons/croce.svg" alt="" />
			{/if}
		</Button>
	</div>
</section>

<style>
</style>
