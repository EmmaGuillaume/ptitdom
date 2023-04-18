<script lang="ts">
	import type { TImage } from '$data/images';
	import { setSelectedImages } from '$utils/selected';
	import { activeSelectedImages, selectedImages, type TStoredImage } from '$src/stores';

	export let image: TImage;

	$: folderindex = $selectedImages.find(
		(item: TStoredImage) => item.folder === $activeSelectedImages.folder
	);
	$: index = folderindex?.images.find((img) => img.src === image.src);

	function handleClick(image: TImage) {
		setSelectedImages(image, $activeSelectedImages.folder);
	}
</script>

<button
	on:click={() => handleClick(image)}
	class={`w-full h-full ${index ? 'border-darkerblue' : ''} `}
>
	{#if !index}
		<img
			class="border-2 border-stroke aspect-square object-cover rounded-lg"
			src={image.src}
			alt="alt"
			srcset=""
		/>
	{/if}
</button>
