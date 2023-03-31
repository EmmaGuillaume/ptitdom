<script lang="ts">
	$: hambOpen = false;

	const handleClick = () => {
		hambOpen = !hambOpen;
	};
</script>

<button on:click={handleClick} class="fixed top-10 right-10 z-[70]">
	{#if hambOpen}
		<img class="w-14 h-14" src="/images/close-burger.svg" alt="" />
	{:else}
		<img class="w-14 h-14" src="/images/open-burger.svg" alt="" />
	{/if}
</button>

<div
	class={`burger fixed p-4 px-20 text-center bg-blue top-0 bottom-0 right-0 z-50 overflow-hidden ${
		hambOpen === true ? 'active' : 'false'
	}`}
>
	<nav>
		<h3 class="text-3xl mb-4">Menu</h3>
		<ul class="text-2xl">
			<li class="mb-4"><a href="/modeEmploi"> Mode d'emploi</a></li>
			<li class="mb-4"><a href="/legacy"> Mentions légales</a></li>
		</ul>
	</nav>
</div>

<style>
	.burger {
		transform: translateX(120%);
		display: grid;
		place-items: center;
		transition: all 0.2s;
		border-top-left-radius: 40px;
		border-bottom-left-radius: 40px;
	}
	.burger.active {
		transform: translateX(0%);
	}
	.burger a:hover {
		text-decoration: underline;
	}
</style>
