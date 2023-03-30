<script lang="ts">
	import { selectedImages } from '../stores';
	import type { TImage } from './images';
	import { setSelectedImages } from './selected';
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
	class={`w-full h-full border-8 border-gray rounded overflow-hidden ${
		active === true ? 'border-green' : ''
	} `}
	on:click={() => handleClick(image)}
>
	<img class=" object-cover w-full aspect-square" src={image.src} alt="alt" srcset="" />
</button>
