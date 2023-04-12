<script lang="ts">
	export let classes: string = '';
</script>

<h3 class={`decoration-black text-3xl font-patrick font-bold mt-6 mb-8 ${classes}`}>
	<slot />
</h3>
