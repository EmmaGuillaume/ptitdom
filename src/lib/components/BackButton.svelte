<script lang="ts">
	import Button from './Button.svelte';

	export let href: string;
	export let classes: string = '';
</script>

<Button
	{href}
	variant="filled"
	classes={`w-fit px-12 py-2 font-patrick ${classes}`}
	icon={{ src: '/images/icons/back-arrow.png', classes: 'w-7', position: 'left' }}
>
	<slot>Retour</slot>
</Button>
