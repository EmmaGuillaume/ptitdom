<script lang="ts">
	export let columns: number = 12;
	export let classes: string = '';
</script>

<section class={`grid gap-md grid-cols-2 xs:grid-cols-${columns} w-full h-screen ${classes}`}>
	<slot />
</section>
