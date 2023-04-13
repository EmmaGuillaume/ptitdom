<script lang="ts">
	import PlayZone from '$lib/components/PlayZone.svelte';
	import { activeSelectedImages } from '$src/stores';

	$: activeImages = $activeSelectedImages;
</script>

<section class="py-16 relative mr-0 md:mr-36 h-full">
	<PlayZone bind:activeImages />
</section>
