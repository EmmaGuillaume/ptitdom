<script lang="ts">
	import type { TImage } from './images';

	export let onClick: (image: TImage) => void;
	export let active: boolean;
	export let image: TImage;
</script>

<button
	on:click={() => onClick(image)}
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
