<script lang="ts">
	export let classes: string = '';
</script>

<div
	class={` fixed bottom-0 mb-12 mx-12 drop-shadow bg-white px-10 py-4 border-solid rounded-3xl ${classes}`}
>
	<!-- <Button icon={{ src: '/images/icons/folder.png', alt: '' }}>
		<p class="mt-2 text-2xl">Ajouter à un dossier</p>
	</Button> -->
	<slot />
</div>
