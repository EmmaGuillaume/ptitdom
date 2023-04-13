<script lang="ts">
	import Button from './Button.svelte';

	export let href: string;
	export let classes: string = '';
</script>

<Button
	{href}
	variant="filled"
	classes={`w-fit px-12 py-2 font-comforta-regular ${classes}`}
	icon={{ src: '/images/icons/back-arrow-white.svg', classes: 'w-7', position: 'left' }}
>
	<slot>Retour</slot>
</Button>
