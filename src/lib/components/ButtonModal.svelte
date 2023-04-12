<script lang="ts">
	export let disabled: boolean = false;
	export let classes: string = '';
	export let onClick: () => void;

	let buttonStyle = 'text-background text-center font-button p-2 rounded-md bg-button';
	let disabledStyle = ' opacity-50 cursor-not-allowed text-textLightDisabled';
</script>

<button class={`${buttonStyle} ${classes}`} on:click={() => onClick()}><slot /></button>
