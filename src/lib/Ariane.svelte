<script lang="ts">
	type TLink = {
		name: string;
		src: string;
	};

	export let links: TLink[];
</script>

<div class="">
	{#each links as link}
		<a href={link.src}>{link.name}</a>
	{/each}
</div>
