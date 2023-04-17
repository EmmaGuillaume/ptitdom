<script lang="ts">
	export let classes: string = '';
</script>

<div class={`grid gap-5 grid-cols-3 xs:grid-cols-3 sm:grid-cols-4 xl:grid-cols-6 ${classes}`}>
	<slot />
</div>
