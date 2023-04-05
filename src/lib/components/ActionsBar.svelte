<script lang="ts">
	import Button from './Button.svelte';
</script>

<div
	class="flex fixed bottom-0 right-0 mb-12 mx-12 drop-shadow bg-white px-10 py-4 border-solid border-b-orange rounded-3xl"
>
	<!-- <Button icon={{ src: '/images/icons/folder.png', alt: '' }}>
		<p class="mt-2 text-2xl">Ajouter à un dossier</p>
	</Button> -->
	<Button
		icon={{ src: '/images/icons/play.png', alt: '', classes: 'w-4/12 mx-auto' }}
		href="/play"
		variant={'subtle'}
	>
		<p class="text-2xl">Commencer le jeu !</p>
	</Button>
</div>
