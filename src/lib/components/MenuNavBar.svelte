<script lang="ts">
	import ActionsBar from '$lib/components/ActionsBar.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<section class="fixed right-0 h-screen w-96 bg-lightblue flex flex-col">
	<!-- <a href="/play">Commencer le jeu</a> -->
	<ActionsBar classes="flex w-36 mt-12 !static !px-4 !py-2">
		<Button
			icon={{ src: '/images/icons/search.svg', alt: '', classes: 'w-fit mx-auto' }}
			href="/legacy"
			variant={'subtle'}
		>
			<p class="text-2xl">C !</p>
		</Button>
	</ActionsBar>

	<ActionsBar classes="flex w-36 !static !px-4 !py-2">
		<Button
			icon={{ src: '/images/icons/folder.svg', alt: '', classes: 'w-fit mx-auto' }}
			href="/categorie"
			variant={'subtle'}
		>
			<p class="text-2xl">C!</p>
		</Button>
	</ActionsBar>

	<ActionsBar classes="flex w-36 !static !px-4 !py-2">
		<Button
			icon={{ src: '/images/icons/play.svg', alt: '', classes: 'w-fit mx-auto' }}
			href="/categorie"
			variant={'subtle'}
		>
			<p class="text-2xl">Commencer</p>
		</Button>
	</ActionsBar>
</section>

<style>
</style>
