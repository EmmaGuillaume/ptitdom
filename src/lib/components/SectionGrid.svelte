<script lang="ts">
	export let columns: number = 12;
	export let classes: string = '';
</script>

<section class={`grid gap-md grid-cols-${columns} xs:grid-cols-12 w-full h-screen ${classes}`}>
	<slot />
</section>
