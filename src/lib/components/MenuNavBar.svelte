<script lang="ts">
	import ActionsBar from '$lib/components/ActionsBar.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section
	class="z-50 fixed right-0 h-screen w-32 py-8 bg-lightblue flex flex-col items-center justify-between rounded-l-3xl"
>
	<!-- <a href="/play">Commencer le jeu</a> -->
	<div class="flex flex-col items-center gap-0">
		<ActionsBar
			classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-lightblue !filter-none hover"
		>
			<Button
				classes="!py-0 !px-0 !m-0"
				icon={{ src: '/images/icons/home.svg', alt: '', classes: 'w-10' }}
				href="/categorie"
				variant={'hovernone'}
			>
				<p class="text-xl">Accueil</p>
			</Button>
		</ActionsBar>
		<ActionsBar classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-lightblue !filter-none">
			<Button
				classes="!py-0 !px-0 !m-0"
				icon={{ src: '/images/icons/search.svg', alt: '', classes: 'w-10' }}
				href="/categorie"
				variant={'hovernone'}
			>
				<p class="text-xl">Rechercher</p>
			</Button>
		</ActionsBar>
		<ActionsBar classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-lightblue !filter-none">
			<Button
				classes="!py-0 !px-0 !m-0"
				icon={{ src: '/images/icons/folder.svg', alt: '', classes: 'w-10' }}
				href="/categorie"
				variant={'hovernone'}
			>
				<p class="text-xl">Mes dossiers</p>
			</Button>
		</ActionsBar>
		<ActionsBar classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-lightblue !filter-none">
			<Button
				classes="!py-0 !px-0 !m-0"
				icon={{ src: '/images/icons/tuto.svg', alt: '', classes: 'w-10' }}
				href="/categorie"
				variant={'hovernone'}
			>
				<p class="text-xl">Mode d'emploi</p>
			</Button>
		</ActionsBar>
	</div>
	<div>
		<ActionsBar classes="flex w-fit !mb-0 !mx-0 !static !px-0 !py-2 !bg-lightblue !filter-none">
			<Button
				classes="!py-0 !px-0 !m-0"
				icon={{ src: '/images/icons/play.svg', alt: '', classes: 'w-10' }}
				href="/categorie"
				variant={'hovernone'}
			>
				<p class="text-xl">Jouer!</p>
			</Button>
		</ActionsBar>
	</div>
</section>

<style>
</style>
