<script lang="ts">
	export let classes: string = '';
</script>

<h2
	class={`text-primary   decoration-black h1
      z-2 ${classes}`}
>
	<slot />
</h2>
