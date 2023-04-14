<script lang="ts">
	import { activeSelectedImages, type TStoredImage } from '$src/stores';

	export let onClick: (folder: TStoredImage) => void;
	export let folder: TStoredImage;
	//export let active: boolean = false;

	$: active = $activeSelectedImages.folder === folder.folder;
</script>

<button
	class={`text-start w-full px-md my-sm py-sm rounded-none !m-0 break-words ${
		active ? 'bg-lightblue border-r-lightblue text-black' : 'bg-transparent'
	}`}
	class:border-red={folder === $activeSelectedImages}
	on:click={() => onClick(folder)}
>
	<p class="text-sm md:text-p">{folder.displayName}</p>
</button>
