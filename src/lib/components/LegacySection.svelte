<script lang="ts">
	export let title: string;
	export let order: number = 2;
</script>

{#if order === 1}
	<h1 class="mt-10 sm:mb-10 mb-5">{title}</h1>
{:else}
	<h2 class="mt-10 sm:mb-10 mb-5 text-lg font-bold">{title}</h2>
{/if}

<div class="flex">
	<div class="pl-5 relative sm:ml-40 ml-10">
		<div class="absolute left-0 top-0 bottom-0 w-[4px] min-w-[4px] bg-pink rounded-2xl" />
		<slot />
	</div>
</div>
