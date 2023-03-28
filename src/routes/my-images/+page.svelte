<script lang="ts">
	import { selectedImages } from '../../stores';

	const images = $selectedImages;
</script>

<p>My images</p>

{#each images as image}
	<img src={image.src} alt="" srcset="" />
{/each}

<a href="/play">Start the game</a>
