<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	export let data;

	const { folder } = data as { folder: string };
</script>

<p>welcome to the folder {folder}</p>

<Button href={`/folders/${folder}/themes`} classes="mt-4 block w-fit">see my images</Button>
