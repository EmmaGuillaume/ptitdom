<script lang="ts">
	import { activeSelectedImages, type TStoredImage } from '$src/stores';

	export let onClick: (folder: TStoredImage) => void;
	export let folder: TStoredImage;
	import { removeSelectedImage } from '$utils/selected';
	import CardsGrid from './CardsGrid.svelte';
	import H2 from './H2.svelte';
	import type { TImage } from '$lib/data/images';

	import ButtonModal from './ButtonModal.svelte';
	import ModaleDelete from './ModaleDelete.svelte';

	export let activeImages: TStoredImage;

	function handleClick(image: TImage) {
		removeSelectedImage(image, $activeSelectedImages.folder);
	}

	let isActive = false;
	const handleModalClick = () => {
		console.log('click');

		isActive = true;
	};
</script>

<div
	class="relative md:static w-full bg-lightblue h-fit md:h-screen px-md flex flex-col justify-between"
>
	<div class="absolute left-0 top-0 px-md md:hidden">
		<a class="rounded-full mx-auto grid place-items-center" href="/play">
			<img class="w-xl mx-auto" src="/images/icons/burger.svg" alt="" srcset="" />
		</a>
	</div>
	<div class="absolute right-0 top-0 px-md md:hidden">
		<a class="rounded-full mx-auto grid place-items-center pt-lgs" href="/play">
			<img class="w-xl mx-auto" src="/images/icons/play-blue.svg" alt="" srcset="" />
		</a>
	</div>
	<div class="pt-lg mt-[15px]">
		<H2 classes="px-2xl text-h1 h-fit  pb-md md:pl-0 font-bold">{activeImages.displayName}</H2>
		{#if activeImages.images.length > 0}
			<p class="text-l-p mb-md">Cliquez pour enlever une image du paquet</p>
		{:else}
			<p class="text-l-p mb-md">Le paquet est vide</p>
		{/if}
		<div class="overflow-y-scroll max-h-[550px]">
			<CardsGrid classes="gap-2 !grid-cols-5 md:!grid-cols-2">
				{#each activeImages.images as image}
					<button on:click={() => handleClick(image)}>
						<img
							src={image.src}
							alt=""
							class="border-2 border-stroke aspect-square object-cover rounded-lg"
						/>
					</button>
				{/each}
			</CardsGrid>
		</div>
	</div>
	<ButtonModal onClick={handleModalClick} classes="flex gap-xs p-0 pt-md">
		<img src="/images/icons/deleteFolder.svg" alt="" />
		<p class="text-left">supprimer le paquet</p>
	</ButtonModal>

	<ModaleDelete bind:isActive />
</div>

<style>
	.overflow-y-scroll::-webkit-scrollbar {
		display: none;
	}
</style>
