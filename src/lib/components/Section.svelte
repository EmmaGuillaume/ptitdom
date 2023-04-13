<script lang="ts">
	export let classes: string = '';
</script>

<section
	class={` grid gap-5 grid-cols-2 xs:grid-cols-12 sm:grid-cols-12 xl:grid-cols-12 px-5 w-screen h-screen ${classes}`}
>
	<slot />
</section>
