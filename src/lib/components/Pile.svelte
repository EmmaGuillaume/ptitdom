<script lang="ts">
	import { activeSelectedImages, selectedImages, type TStoredImage } from '$src/stores';

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
		isActive = true;
	};

	$: index = $selectedImages.findIndex((item) => item.folder == $activeSelectedImages.folder);
</script>

<div
	class="h-[20%] pb-md md:pb-0 z-100 top-0 md:static w-full bg-lightblue md:h-screen px-md flex flex-col justify-between"
>
	<div class="pt-lg mt-[15px] flex flex-col">
		<article>
			<H2 classes="px-2xl text-h1 h-fit  pb-md md:pl-0 font-bold break-words"
				>{activeImages.displayName}</H2
			>
			{#if activeImages.images.length > 0}
				<p class="text-l-p mb-md">Cliquez pour enlever une image du paquet</p>
			{:else}
				<p class="text-l-p mb-md">Le paquet est vide</p>
			{/if}
		</article>
		<div class="overflow-y-scroll max-h-[70vh]">
			<CardsGrid classes="gap-2 !grid-cols-5 md:!grid-cols-2 md:mb-0 ">
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

	{#if index > 0}
		<ButtonModal onClick={handleModalClick} classes="flex gap-xs p-0 pt-md">
			<img src="/images/icons/deleteFolder.svg" alt="" />
			<p class="text-left">supprimer le paquet</p>
		</ButtonModal>
	{/if}

	<ModaleDelete bind:isActive />
</div>

<style>
	.overflow-y-scroll::-webkit-scrollbar {
		display: none;
	}
</style>
