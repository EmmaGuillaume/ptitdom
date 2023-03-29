<script lang="ts">
	import { onMount } from 'svelte';
	import { selectedImages } from '../stores';
	import type { TImage } from './images';

	export let image: TImage;
	export let onClick: (image: TImage) => void;

	let active: boolean;
	const index = $selectedImages.find((img: TImage) => img.src === image.src);
	if (index) {
		active = true;
	} else {
		active = false;
	}

	const handleClick = (img: TImage) => {
		active = !active;
		onClick(img);
	};
</script>

<button
	on:click={() => handleClick(image)}
	class={`w-full h-full border-4 border-gray rounded overflow-hidden ${
		active === true ? 'border-green' : ''
	} `}
>
	<img class="object-cover w-full h-full aspect-square" src={image.src} alt="alt" srcset="" />
</button>
