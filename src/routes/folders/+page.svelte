<script lang="ts">
	import ButtonModal from '$lib/components/ButtonModal.svelte';
	import CardsGrid from '$lib/components/CardsGrid.svelte';
	import Modale from '$lib/components/Modale.svelte';
	import { selectedImages } from '$src/stores';

	let isActive: boolean = false;
	const showModalHelp = () => {
		isActive = true;
		return isActive;
	};
</script>

<section class="ml-[10%] mt-20">
	<h2 class="decoration-black text-5xl font-patrick font-bold mt-6 mb-8">Mes dossiers</h2>
	<div class="flex flex-row gap-4">
		<img src="/images/icons/light.svg" alt="" />
		<p class="decoration-black text-xl font-patrick inline-block">
			Cliquez sur un dossier pour l’ouvrir et y ajouter des images !
		</p>
	</div>
	<CardsGrid classes="mt-28 gap-28">
		{#each $selectedImages as folder}
			<a href={`/folders/${folder.folder}`}>
				<img src="/images/folder.svg" alt="" />
				<p class="decoration-black text-2xl font-patrick inline-block text-center mt-9">
					Mon {folder.displayName}
				</p>
			</a>
		{/each}

		<ButtonModal classes="w-fit" onClick={() => showModalHelp()}>
			<img src="/images/addfolder.svg" alt="" />
			<p class="decoration-black text-2xl font-patrick inline-block mt-9">Ajouter un dossier</p>
		</ButtonModal>
	</CardsGrid>

	<Modale bind:isActive />
</section>
