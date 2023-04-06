<script lang="ts">
	export let classes: string = '';
</script>

<div class={`grid gap-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 ${classes}`}>
	<slot />
</div>
