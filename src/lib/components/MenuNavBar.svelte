<script lang="ts">
	import ActionsBar from '$lib/components/ActionsBar.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section
	class="px-4 flex bottom-0 h-18 flex-row w-screen z-50 justify-center gap-4 fixed md:right-0 md:h-screen md:w-32 md:py-8 bg-lightblue md:flex-col md:items-center md:justify-between md:rounded-l-3xl"
>
	<!-- <a href="/play">Commencer le jeu</a> -->
	<div class="flex flex-row justify-bottom gap-4 md:flex-col md:items-center md:gap-0">
		<ActionsBar
			classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-lightblue !filter-none hover"
		>
			<Button
				classes="!py-0 !px-0 !m-0"
				icon={{ src: '/images/icons/home.svg', alt: '', classes: 'w-7 md:w-7 md:w-10' }}
				href="/"
				variant={'hovernone'}
			>
				<p class="text-sm md:text-xl">Accueil</p>
			</Button>
		</ActionsBar>
		<ActionsBar classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-lightblue !filter-none">
			<Button
				classes="!py-0 !px-0 !m-0"
				icon={{ src: '/images/icons/search.svg', alt: '', classes: 'w-7 md:w-10' }}
				href="/themes"
				variant={'hovernone'}
			>
				<p class="text-sm md:text-xl">Rechercher</p>
			</Button>
		</ActionsBar>
		<ActionsBar classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-lightblue !filter-none">
			<Button
				classes="!py-0 !px-0 !m-0"
				icon={{ src: '/images/icons/picture.svg', alt: '', classes: 'w-7 md:w-10' }}
				href="/my-images"
				variant={'hovernone'}
			>
				<p class="text-sm md:text-xl">Mes images</p>
			</Button>
		</ActionsBar>
		<ActionsBar classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-lightblue !filter-none">
			<Button
				classes="!py-0 !px-0 !m-0"
				icon={{ src: '/images/icons/tuto.svg', alt: '', classes: 'w-7 md:w-10' }}
				href="/modeEmploi"
				variant={'hovernone'}
			>
				<p class="text-sm md:text-xl">Manuel</p>
			</Button>
		</ActionsBar>
	</div>
	<div class="flex flex-row justify-bottom">
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
	</div>
</section>

<style>
</style>
