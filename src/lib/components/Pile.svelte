<script lang="ts">
	import { activeSelectedImages, type TStoredImage } from '$src/stores';

	export let onClick: (folder: TStoredImage) => void;
	export let folder: TStoredImage;
	import { removeSelectedImage } from '$utils/selected';

	import H2 from './H2.svelte';
	import CardsGrid from './CardsGrid.svelte';

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
	class="relative md:static w-full bg-lightblue h-fit md:h-screen p-md flex flex-col justify-between"
>
	<div class="absolute left-0 top-0 p-md md:hidden">
		<a class="rounded-full mx-auto grid place-items-center" href="/play">
			<img class="w-xl mx-auto" src="/images/icons/burger.svg" alt="" srcset="" />
		</a>
	</div>
	<div class="absolute right-0 top-0 p-md md:hidden">
		<a class="rounded-full mx-auto grid place-items-center" href="/play">
			<img class="w-xl mx-auto" src="/images/icons/play-blue.svg" alt="" srcset="" />
		</a>
	</div>
	<div class="">
		<H2 classes="!m-0 px-2xl  pb-md md:pl-0">{activeImages.displayName}</H2>
		<p class="text-l-p mb-md">Cliquez pour enlever une image du paquet</p>
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
	<ButtonModal onClick={handleModalClick} classes="flex gap-xs p-0 pt-md">
		<img src="/images/icons/deleteFolder.svg" alt="" />
		<p class="text-left">supprimer le paquet</p>
	</ButtonModal>

	<ModaleDelete bind:isActive />
</div>
