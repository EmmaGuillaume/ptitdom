<script lang="ts">
	import type { TImage } from '$lib/images';
	import type { TCategorie } from '$lib/images';

	export let data: { images: TImage[] };
	export let cate: { categories: TCategorie[] };

	const { categories } = cate;
	const { images } = data;
</script>

<main class="my-12 mx-12">
	<h2 class="text-4xl">Choisir le thème</h2>
</main>
