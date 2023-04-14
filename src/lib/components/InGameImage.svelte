<script lang="ts">
	import type { TImage } from '$data/images';

	export let clickImg: (item: string) => void;
	export let activeList: string[];
	export let image: TImage;

	$: active = activeList.find((item) => item === image.src);
</script>

<button on:click={() => clickImg(image.src)}>
	<img
		src={image.src}
		alt=""
		class={`border-2  aspect-square object-cover rounded-lg ${
			active ? 'border-lightblue' : 'border-stroke'
		} `}
	/>
</button>
