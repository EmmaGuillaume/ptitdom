<script lang="ts">
	import type { TImage } from '$data/images';
	import { setSelectedImages } from '$utils/selected';
	import { selectedImages } from '$src/stores';

	export let image: TImage;
	let active: boolean;

	const index = $selectedImages.find((img: TImage) => img.src === image.src);
	if (index) {
		active = true;
	} else {
		active = false;
	}
	function handleClick(image: TImage) {
		active = !active;
		setSelectedImages(image);
	}
</script>

<button
	on:click={() => handleClick(image)}
	class={`w-full h-full border-8 border-gray relative rounded overflow-hidden ${
		active === true ? 'border-blue' : ''
	} `}
>
	<div
		class={`check rounded-full w-7 aspect-square absolute grid place-items-center border-2 right-2 top-2 ${
			active === true ? 'bg-blue border-blue ' : 'border-gray'
		} `}
	>
		{#if active}
			<img class="w-4 h-4" src="/images/check.svg" alt="" />
		{/if}
	</div>
	<img class="object-contain w-full h-full aspect-square" src={image.src} alt="alt" srcset="" />
</button>
