<script>
	import Burger from '$lib/Burger.svelte';
	import '../app.css';
</script>

<main class="relative">
	<Burger />
	<slot />
</main>
