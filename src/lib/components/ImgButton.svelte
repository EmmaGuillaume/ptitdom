<script lang="ts">
	import type { TImage } from '$data/images';
	import { setSelectedImages } from '$utils/selected';
	import { selectedImages } from '$src/stores';

	export let image: TImage;

	$: index = $selectedImages.find((img: TImage) => img.src === image.src);

	function handleClick(image: TImage) {
		setSelectedImages(image);
	}
</script>

<button
	on:click={() => handleClick(image)}
	class={`w-full h-full border-8 border-gray relative rounded overflow-hidden ${
		index ? 'border-darkerblue' : ''
	} `}
>
	<div
		class={`check rounded-full w-7 aspect-square absolute grid place-items-center border-2 right-2 top-2 ${
			index ? 'bg-blue border-darkerblue ' : 'border-secondary'
		} `}
	>
		{#if index}
			<img class="w-4 h-4" src="/images/check.svg" alt="" />
		{/if}
	</div>
	<img class="object-contain w-full h-full aspect-square" src={image.src} alt="alt" srcset="" />
</button>
