<script lang="ts">
	import { activeSelectedImages, selectedImages, type TStoredImage } from '$src/stores';
	import NavBarPile from './NavBarPile.svelte';

	import ButtonModal from './ButtonModal.svelte';
	import Modale from './Modale.svelte';

	const handleClick = (folder: TStoredImage) => {
		$activeSelectedImages = folder;
	};

	let isActive = false;
	const handleModalClick = () => {
		console.log('click');

		isActive = true;
	};
</script>

<!--  -->
<section
	class="z-50 sticky top-0 left-0 h-screen w-60 min-w-[18%] text-white bg-blue flex flex-col items-start justify-between"
>
	<div class="w-full">
		<a href="/">
			<div class="px-md mt-[5%] w-full flex items-center gap-sm pt-lg">
				<img src="images/mainlogo.png" alt="" class="w-xl" />
				<p class="text-4xl text-left">build</p>
			</div>
		</a>
		<!-- <a href="/play">Commencer le jeu</a> -->
		<div class="mt-[103px] flex flex-row justify-bottom gap-4 md:flex-col md:items-start md:gap-0">
			{#each $selectedImages as folder}
				<NavBarPile onClick={handleClick} {folder} />
			{/each}
		</div>
		<ButtonModal
			onClick={handleModalClick}
			classes="!text-start w-full px-0 my-1 px-md py-md text-p md:text-md"
			>Nouveau paquet</ButtonModal
		>
	</div>
	<div class="p-md w-full">
		<a class="rounded-full mx-auto grid place-items-center" href="/play">
			<img class="w-xl mx-auto" src="/images/icons/play.svg" alt="" srcset="" />
		</a>
	</div>
	<Modale bind:isActive />
</section>

<style>
</style>
