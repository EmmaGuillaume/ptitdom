<script lang="ts">
	export let title: string = '';
	export let classes: string = '';
</script>

<h1
	class={`text-primary mt-24 lmd:mt-5 decoration-black text-4xl 
    font-mono font-bold text-center sm:mt-24 z-2 ${classes}`}
>
	{title}
</h1>
