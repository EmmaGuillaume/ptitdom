<script lang="ts">
	export let classes: string = '';
</script>

<h2 class={`decoration-black text-5xl font-patrick font-bold mt-6 mb-8 ${classes}`}>
	<slot />
</h2>
