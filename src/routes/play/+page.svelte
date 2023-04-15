<script lang="ts">
	import Burger from '$lib/components/Burger.svelte';
	import InGameNavBar from '$lib/components/InGameNavBar.svelte';
	import PlayZone from '$lib/components/PlayZone.svelte';
	import { activeSelectedImages } from '$src/stores';

	$: activeImages = $activeSelectedImages;
</script>

<section class="px-2xl mr-0 h-screen">
	<InGameNavBar />
	<!-- <Burger /> -->
	<PlayZone bind:activeImages />
</section>
