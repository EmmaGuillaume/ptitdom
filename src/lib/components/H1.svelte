<script lang="ts">
	export let classes: string = '';
</script>

<h1
	class={`text-primary   decoration-black text-h1
     text-center z-2 ${classes}`}
>
	<slot />
</h1>
