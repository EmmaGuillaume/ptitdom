<script lang="ts">
	import Library from '$lib/components/Library.svelte';
	import MenuNavBar from '$lib/components/MenuNavBar.svelte';
	import Pile from '$lib/components/Pile.svelte';
	import { activeSelectedImages } from '$src/stores';

	$: activeImages = $activeSelectedImages;
</script>

<div class="flex flex-col md:flex-row">
	<MenuNavBar />
	<div class="sticky z-1 top-0 h-fit pile md:h-full">
		<Pile bind:activeImages />
	</div>
	<Library />
</div>

<style>
	.pile {
		min-width: 24%;
	}
	@media screen and (max-width: 500px) {
		.pile {
			min-width: 100%;
			max-width: 100%;
		}
	}
</style>
