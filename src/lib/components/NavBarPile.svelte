<script lang="ts">
	import { activeSelectedImages, type TStoredImage } from '$src/stores';

	export let onClick: (folder: TStoredImage) => void;
	export let folder: TStoredImage;
	export let active: boolean = false;
</script>

<button
	class={`w-full px-0 rounded-md border-2 !m-0 ${active ? 'border-red' : 'border-primary'}`}
	class:border-red={folder === $activeSelectedImages}
	on:click={() => onClick(folder)}
>
	<p class="text-sm md:text-xl">{folder.displayName}</p>
</button>
