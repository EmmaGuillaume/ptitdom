<script>
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import H1 from '$lib/components/H1.svelte';
	import H2 from '$lib/components/H2.svelte';
</script>

<section class="ml-[10%] mt-20">
	<H2 title="Mes dossiers" />
	<div class="flex flex-row gap-4">
		<img src="/images/icons/light.svg" alt="" />
		<p class="decoration-black text-xl font-patrick inline-block">
			Cliquez sur un dossier pour l’ouvrir et y ajouter des images !
		</p>
	</div>
	<CardsGrid classes="mt-28 gap-28">
		<a href="/folders/folder1"
			><img src="/images/folder.svg" alt="" />
			<p class="decoration-black text-2xl font-patrick inline-block text-center mt-9">
				Mon Dossier n°1
			</p>
		</a>
		<a href=""
			><img src="/images/addfolder.svg" alt="" />
			<p class="decoration-black text-2xl font-patrick inline-block mt-9">Ajouter un dossier</p></a
		>
	</CardsGrid>
</section>
