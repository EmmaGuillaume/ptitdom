<script lang="ts">
	export let onClick: (e: any) => void;
	export let classes: string | undefined = undefined;
</script>

<button on:click={onClick} class={classes}><slot /></button>
