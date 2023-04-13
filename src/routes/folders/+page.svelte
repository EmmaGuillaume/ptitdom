<script lang="ts">
	import ButtonModal from '$lib/components/ButtonModal.svelte';
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import Modale from '$lib/components/Modale.svelte';
	import { selectedImages } from '$src/stores';
	import H1 from '$lib/components/H1.svelte';
	import H2 from '$lib/components/H2.svelte';

	let isActive: boolean = false;
	const showModalHelp = () => {
		isActive = true;
		return isActive;
	};
</script>

<section class="ml-[10%] mt-20">
	<H2>Mes dossiers</H2>
	<div class="flex flex-row gap-4">
		<img src="/images/icons/light.svg" alt="" />
		<p class="decoration-black text-xl font-comforta-regular inline-block">
			Cliquez sur un dossier pour l’ouvrir et y ajouter des images !
		</p>
	</div>
	<CardsGrid classes="mt-28 gap-28">
		{#each $selectedImages as folder}
			<a href={`/folders/${folder.folder}`}>
				<img src="/images/folder.svg" alt="" />
				<p class="decoration-black text-2xl font-comforta-regular inline-block text-center mt-9">
					Mon {folder.displayName}
				</p>
			</a>
		{/each}

		<ButtonModal classes="w-fit" onClick={() => showModalHelp()}>
			<img src="/images/addfolder.svg" alt="" />
			<p class="decoration-black text-2xl font-comforta-regular inline-block mt-9">
				Ajouter un dossier
			</p>
		</ButtonModal>
	</CardsGrid>

	<Modale bind:isActive />
</section>
