<script lang="ts">
	import PlayZone from '$lib/components/PlayZone.svelte';
	import { activeSelectedImages } from '$src/stores';

	$: activeImages = $activeSelectedImages;
</script>

<section class="px-2xl mr-0 h-screen">
	<PlayZone bind:activeImages />
</section>
