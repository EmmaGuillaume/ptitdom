<script lang="ts">
	import ActionsBar from '$lib/components/ActionsBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { activeSelectedImages, selectedImages, type TStoredImage } from '$src/stores';
	import NavBarPile from './NavBarPile.svelte';

	import ButtonModal from './ButtonModal.svelte';
	import InitButton from './root/InitButton.svelte';
	import Modale from './Modale.svelte';

	const handleClick = (folder: TStoredImage) => {
		$activeSelectedImages = folder;
	};

	$: hambOpen = false;
	let isActive = false;
	const handleClickBurger = () => {
		hambOpen = !hambOpen;
	};
	const handleModalClick = () => {
		isActive = true;
	};
</script>

<section>
	<InitButton onClick={handleClickBurger} classes="fixed top-5 left-5 z-[70]">
		{#if hambOpen}
			<img class="w-md h-md" src="/images/icons/back-arrow-white.svg" alt="" />
		{:else}
			<img class="w-lg h-lg" src="/images/icons/burger.png" alt="" />
		{/if}
	</InitButton>

	<div
		class={`w-full burger fixed p-4 px-20 text-center bg-darkerblue top-0 bottom-0 right-0 z-50 overflow-hidden ${
			hambOpen === true ? 'active' : 'false'
		}`}
	>
		<nav class="w-full">
			<section
				class=" z-40 fixed top-0 left-0 h-[100dvh] w-full text-white bg-blue flex flex-col items-center justify-between"
			>
				<div class="w-full">
					<div class=" w-full flex justify-around">
						<img src="images/mainlogo.png" alt="" class="mt-8 w-3/12 top-5" />
					</div>
					<div class="w-full mt-6">
						<h2 class="text-2xl px-9 mb-2 text-left">Paquets</h2>
						{#each $selectedImages as folder}
							<NavBarPile onClick={handleClick} {folder} />
						{/each}
						<ButtonModal
							onClick={handleModalClick}
							classes="!text-start w-full px-0 my-1 px-md py-md text-p md:text-md"
							>Nouveau paquet</ButtonModal
						>
					</div>
				</div>
				<div class="px-8 mb-8 flex justify-center">
					<a class="rounded-full mx-auto grid place-items-center" href="/play">
						<img class="w-xl mx-auto" src="/images/icons/play.svg" alt="" srcset="" />
					</a>
				</div>
			</section>
		</nav>
	</div>
	<Modale bind:isActive />
</section>

<style>
	.burger {
		transform: translateX(-260%);
		display: grid;
		place-items: center;
		transition: all 0.2s;
		border-top-right-radius: 40px;
		border-bottom-right-radius: 40px;
	}
	.burger.active {
		transform: translateX(0%);
	}
	.burger a:hover {
		text-decoration: underline;
	}
	@media screen and (min-width: 900px) {
		section {
			display: none;
		}
	}
</style>
