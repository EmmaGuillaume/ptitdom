<script lang="ts">
	type TLink = {
		name: string;
		src: string;
	};

	export let links: TLink[];
</script>

<div class="ariane text-xl mb-8">
	{#each links as link}
		<a href={link.src}>{link.name}</a>
	{/each}
</div>

<style>
	.ariane a + a::before {
		content: ' > ';
		@apply inline-block mx-2;
	}
	.ariane a:hover {
		@apply underline;
	}
</style>
