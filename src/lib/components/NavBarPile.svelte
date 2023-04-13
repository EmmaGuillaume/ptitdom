<script lang="ts">
	import { activeSelectedImages, type TStoredImage } from '$src/stores';

	export let onClick: (folder: TStoredImage) => void;
	export let folder: TStoredImage;
	export let active: boolean = false;
</script>

<button
	class={` text-start w-full px-8 my-1 py-4 bg-darkerblue rounded-none border-2 !m-0 ${
		active ? 'bg-lightblue' : 'border-lightblue'
	}`}
	class:border-red={folder === $activeSelectedImages}
	on:click={() => onClick(folder)}
>
	<a href={`/dashboard?pile=${folder.folder}`} class="text-start text-md md:text-xl"
		>{folder.displayName}</a
	>
</button>
