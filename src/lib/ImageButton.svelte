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
	class={`w-full h-full border-4 ${active === true ? 'border-blue-600 rounded-md' : ''} `}
>
	<img class="object-cover h-full w-full" src={image.src} alt={image.alt} srcset="" />
</button>
