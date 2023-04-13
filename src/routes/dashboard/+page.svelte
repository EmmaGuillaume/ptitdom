<script lang="ts">
	import Library from '$lib/components/Library.svelte';
	import Pile from '$lib/components/Pile.svelte';
	import { activeSelectedImages } from '$src/stores';

	$: activeImages = $activeSelectedImages;
</script>

<div class="flex">
	<div class="sticky top-0 h-full w-2/5 pile">
		<Pile bind:activeImages />
	</div>
	<Library />
</div>

<style>
	.pile {
		min-width: 40%;
	}
</style>
