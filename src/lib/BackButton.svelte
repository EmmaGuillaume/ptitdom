<script lang="ts">
	import Nav from './Nav.svelte';

	export let href: string;
	export let name: string = 'Revenir en arrière ';
</script>

<a
	{href}
	class="mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl block mx-auto"
	>{name}
</a>
