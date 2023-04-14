<script lang="ts">
	import ActionsBar from '$lib/components/ActionsBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { activeSelectedImages, selectedImages, type TStoredImage } from '$src/stores';
	import NavBarPile from './NavBarPile.svelte';
	import { page } from '$app/stores';
	import { fix_position } from 'svelte/internal';
	import ButtonModal from './ButtonModal.svelte';
	const folder = $page.params.folder;

	const handleClick = (folder: TStoredImage) => {
		$activeSelectedImages = folder;
	};

	import InitButton from './root/InitButton.svelte';

	$: hambOpen = false;

	const handleClickBurger = () => {
		hambOpen = !hambOpen;
	};
</script>

<section>
	<InitButton onClick={handleClickBurger} classes="fixed top-10 left-10 z-[70]">
		{#if hambOpen}
			<img class="w-14 h-14" src="/images/close-burger.svg" alt="" />
		{:else}
			<img class="w-14 h-14" src="/images/open-burger.svg" alt="" />
		{/if}
	</InitButton>

	<div
		class={`w-full burger fixed p-4 px-20 text-center bg-darkerblue top-0 bottom-0 right-0 z-50 overflow-hidden ${
			hambOpen === true ? 'active' : 'false'
		}`}
	>
		<nav class="w-full">
			<section
				class=" z-50 fixed top-0 left-0 h-screen w-full bg-white flex flex-col items-center justify-between"
			>
				<div class="w-full">
					<div class=" w-full flex justify-around">
						<img src="images/mainlogo.png" alt="" class="mt-8 w-3/12 top-5" />
					</div>
					<div class="w-full mt-6">
						<h2 class="text-2xl px-9 mb-2 text-left">Paquets</h2>
						{#each $selectedImages as folder}
							<NavBarPile onClick={handleClick} {folder} />
							<ButtonModal
								classes="!text-start w-full px-0 my-1 px-8 py-4 bg-white text-md md:text-md"
								>+ Ajouter un paquet</ButtonModal
							>
						{/each}
					</div>
				</div>
				<div class="px-8 mb-8 flex justify-center">
					<ActionsBar classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-white !filter-none">
						<Button
							classes="!w-fit !py-0 px-0 bg-white"
							icon={{
								src: '/images/icons/play.svg',
								alt: '',
								classes: 'w-6/12 mx-auto',
								position: 'bottom'
							}}
							href="/folders/{folder}/play"
						>
							Jouer</Button
						></ActionsBar
					>
				</div>
			</section>
		</nav>
	</div>
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
