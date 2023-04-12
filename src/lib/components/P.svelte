<script lang="ts">
	export let classes: string = '';
</script>

<p class={`decoration-black text-xl font-patrick inline-block ${classes}`}>
	<slot />
</p>
