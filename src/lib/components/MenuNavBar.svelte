<script lang="ts">
	import ActionsBar from '$lib/components/ActionsBar.svelte';
	import Button from '$lib/components/Button.svelte';
	import { activeSelectedImages, selectedImages, type TStoredImage } from '$src/stores';
	import NavBarPile from './NavBarPile.svelte';
	import { page } from '$app/stores';
	import { fix_position } from 'svelte/internal';
	import ButtonModal from './ButtonModal.svelte';
	const folder = $page.params.folder;

	const handleClick = (folder: TStoredImage) => {
		$activeSelectedImages = folder;
	};
</script>

<!--  -->
<section
	class="z-50 fixed top-0 left-0 h-screen w-52 bg-white flex flex-col items-start justify-between"
>
	<div class="w-full">
		<div class="px-8 mt-8 md:items-start w-full">
			<h2 class="text-2xl mb-2 text-left">Accueil</h2>
			<img src="images/mainlogo.png" alt="" class="w-6/12" />
		</div>
		<!-- <a href="/play">Commencer le jeu</a> -->
		<div class="mt-4 flex flex-row justify-bottom gap-4 md:flex-col md:items-start md:gap-0">
			<h2 class="text-2xl mb-2 text-left px-8">Paquets</h2>
			{#each $selectedImages as folder}
				{console.log(folder === $activeSelectedImages)}

				<NavBarPile onClick={handleClick} {folder} />
				<ButtonModal classes="!text-start w-full px-0 my-1 px-8 py-4 bg-white text-sm md:text-md"
					>+ Ajouter un paquet</ButtonModal
				>
			{/each}
		</div>
	</div>
	<div class="px-8 mb-8">
		<ActionsBar classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-white !filter-none">
			<Button
				classes="!w-fit !py-0 px-0 bg-white"
				icon={{
					src: '/images/icons/play.svg',
					alt: '',
					classes: 'w-6/12 mx-auto',
					position: 'bottom'
				}}
				href="/folders/{folder}/play"
			>
				Jouer</Button
			></ActionsBar
		>
	</div>

	<!-- <div class="flex flex-row justify-bottom">
        <ActionsBar classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-lightblue !filter-none">
            <Button
                classes="!py-0 !px-0 !m-0"
                icon={{ src: '/images/icons/play.svg', alt: '', classes: 'w-7 md:w-10' }}
                href="/play"
                variant={'hovernone'}
            >
                <p class="text-sm md:text-xl">Jouer!</p>
            </Button>
        </ActionsBar>
    </div> -->
</section>

<!--  -->

<!-- <section
    class="z-50 fixed top-0 left-0 h-screen w-48 bg-lightblue flex flex-col items-start justify-between"
>
     <a href="/play">Commencer le jeu</a>
    <div class="w-full">
        <div class="px-8 mt-8">
            <img src="images/mainlogo.png" alt="" class="px-9" />
        </div>
        <div>
            <div>
                <Button
                    classes="!w-full !rounded-none border-2 border-darkerblue text-start active:border-r-blueopacity "
                    href=""
                    icon={{
                        src: '/images/icons/plus.svg',
                        alt: '',
                        classes: 'w-2/12 mx-auto',
                        position: 'left'
                    }}
                    variant={'subtle'}
                >
                    <p class="m-0 p-0 text-sm">Ajouter un paquet</p>
                </Button>
            </div>
        </div>
    </div>
</section> -->

<style>
	@media screen and (max-width: 900px) {
		section {
			display: none;
		}
	}
</style>
