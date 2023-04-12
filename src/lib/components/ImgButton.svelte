<script lang="ts">
	import type { TImage } from '$data/images';
	import { setSelectedImages } from '$utils/selected';
	import { selectedImages, type TStoredImage } from '$src/stores';
	import { page } from '$app/stores';

	export let image: TImage;

	$: folderindex = $selectedImages.find(
		(item: TStoredImage) => item.folder === $page.params.folder
	);
	$: index = folderindex?.images.find((img) => img.src === image.src);

	function handleClick(image: TImage) {
		setSelectedImages(image, $page.params.folder);
	}
</script>

<button
	on:click={() => handleClick(image)}
	class={`w-full h-full border-8 border-gray relative rounded overflow-hidden ${
		index ? 'border-blue' : ''
	} `}
>
	<div
		class={`check rounded-full w-7 aspect-square absolute grid place-items-center border-2 right-2 top-2 ${
			index ? 'bg-blue border-blue ' : 'border-gray'
		} `}
	>
		{#if index}
			<img class="w-4 h-4" src="/images/check.svg" alt="" />
		{/if}
	</div>
	<img class="object-contain w-full h-full aspect-square" src={image.src} alt="alt" srcset="" />
</button>
