<script>
	import BackButton from '$lib/BackButton.svelte';
	import LogOut from '$lib/utils/LogOut.svelte';
	import '../app.css';
</script>

<main>
	<div class="flex flex-row mt-2">
		<BackButton href="/sign-up" name="Inscription" />
		<BackButton href="/sign-in" name="Connexion" />
	</div>
	<LogOut />
	<slot />
</main>
