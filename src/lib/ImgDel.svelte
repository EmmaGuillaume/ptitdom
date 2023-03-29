<script lang="ts">
	import type { TImage } from './images';
	import { setSelectedImages } from './selected';
	export let image: TImage;
</script>

<img
	on:click={() => setSelectedImages(image)}
	class="object-cover w-full aspect-square rounded-3xl"
	src={image.src}
	alt={image.alt}
	srcset=""
/>
