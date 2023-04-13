<script lang="ts">
	import Library from '$lib/components/Library.svelte';
	import Pile from '$lib/components/Pile.svelte';
	import { activeSelectedImages } from '$src/stores';

	$: activeImages = $activeSelectedImages;
</script>

<div class="flex">
	<div class="sticky top-0 h-full">
		<Pile bind:activeImages />
	</div>
	<Library />
</div>

<style>
	.dashboardGrid {
		grid-template-columns: 45% auto;
	}
</style>
