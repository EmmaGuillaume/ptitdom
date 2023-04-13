<script lang="ts">
	export let href: string | undefined;

	export let classes: string | undefined = undefined;
</script>

<a {href} class={classes}>
	<slot />
</a>

<!-- //flex w-72 xs:w-[345px] items-center justify-center h-12 p-4 text-center rounded-2xl border-solid
border-2 font-comforta-regular font-bold text-xl -->
