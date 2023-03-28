<script lang="ts">
	import type { TImage } from '$lib/images';
	import type { TCategorie } from '$lib/images';

	export let data: { images: TImage[]; categories: TCategorie[] };

	const { images, categories } = data;
</script>

{#each images as images}
	<div class="flex justify-between">
		{#if images.categorie == 'voiture'}
			<section class="flex justify-center">
				<h3>voiture</h3>
				<img src={images.src} alt="" class="w-64" />
			</section>
		{/if}
		{#if images.categorie == 'chat'}
			<section>
				<h3>Chat</h3>
				<img src={images.src} alt="" />
			</section>
		{/if}
		{#if images.categorie == 'vache'}
			<section>
				<h3>Chien</h3>
				<img src={images.src} alt="" />
			</section>
		{/if}
	</div>
{/each}
