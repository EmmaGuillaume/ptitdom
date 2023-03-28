<script lang="ts">
	import type { TImage } from './images';

	export let image: TImage;
	export let onClick: (image: TImage) => void;

	$: active = false;

	function handleClick(image: TImage) {
		active = !active;
		onClick(image);
	}
</script>

<button
	on:click={() => handleClick(image)}
	class={`w-full h-full border-4 border-gray rounded overflow-hidden ${
		active === true ? 'border-green' : ''
	} `}
>
	<img class="object-cover w-full aspect-square" src={image.src} alt={image.alt} srcset="" />
</button>
