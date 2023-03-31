<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
	import GameNav from '$lib/GameNav.svelte';
	import ImageButton from '$lib/ImageButton.svelte';
	import { setSelectedImages } from '$lib/selected';
	import { selectedImages } from '../../stores';

	const images = $selectedImages;
	$: countImg = $selectedImages.length;
</script>

<svelte:head>
	<title>Bild, votre jeu de cartes numérique - Bild</title>

	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />

	<meta name="robots" content="all" />
	<meta name="target" content="all" />

	<meta name="author" content="Bild" />
	<meta name="owner" content="Bild" />
	<meta name="language" content="fr" />
	<meta http-equiv="content-language" content="fr" />

	<meta name="url" content="https://ptitdom.vercel.app/" />
	<meta name="identifier-URL" content="https://ptitdom.vercel.app/" />
	<link rel="canonical" href="https://ptitdom.vercel.app/my-images" />

	<meta name="subject" content="Identification d'images" />
	<meta
		name="description"
		content="Bild est un outil pédagogique permettant aux enfants ayant des troubles du spectre autistique d'identifier différents objets ou situations "
	/>

	<meta property="og:title" content="Bild, votre jeu de cartes numérique" />
	<meta property="og:type" content="website" />
	<meta
		property="og:description"
		content="Bild est un outil pédagogique permettant aux enfants ayant des troubles du spectre autistique d'identifier différents objets ou situations "
	/>
	<meta property="og:site_name" content="Bild" />
	<meta property="og:url" content="https://ptitdom.vercel.app/" />
	<meta property="og:locale" content="fr" />
	<meta property="og:image" content="https://metatags.arthaud.dev/sprites/hero-min.jpg" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ptitdom.vercel.app/" />
	<meta name="twitter:title" content="Bild, votre jeu de cartes numérique - Bild" />
	<meta
		name="twitter:description"
		content="Bild est un outil pédagogique permettant aux enfants ayant des troubles du spectre autistique d'identifier différents objets ou situations "
	/>
	<meta name="twitter:image" content="https://metatags.arthaud.dev/sprites/hero-min.jpg" />

	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content="Bild, votre jeu de cartes numérique" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#74DAD5" />
	<meta name="theme-color" content="#74DAD5" />
</svelte:head>
<div class="mx-12 sm:mx-28 min-h-screen">
	<div class="mt-11">
		<!-- <Ariane
			links={[
				{ name: 'Bibliothèque', src: '/themes' },
				{ name: 'Mes images', src: '/my-images' }
			]}
		/> -->
		<BackButton href="/themes" />
	</div>

	<h2 class="decoration-black text-3xl font-patrick font-bold mt-6 mb-8">Les images choisies</h2>
	<img src="/images/icons/light.svg" alt="" class="inline-block mr-4 mb-10" />
	<p class="decoration-black text-xl font-patrick font-bold inline-block">
		Cliquez sur une image pour la sélectionner !
	</p>
	<div class=" grid gap-5 grid-cols-1 xs:grid-cols-2 xl:grid-cols-5 sm:grid-cols-3">
		{#each images as image}
			<ImageButton {image} onClick={setSelectedImages} />
		{/each}
	</div>
	{#if countImg == 0}
		<p class="text-xl font-patrick mt-12 mb-36">Vous n'avez pas encore selectionné d'images :(</p>
	{/if}

	<GameNav disabled={countImg === 0} />
</div>
<img class="absolute bottom-0 left-0 -z-10" src="/images/stain/yellow-bottom-left.png" alt="" />
<img class="absolute bottom-0 right-0 -z-10" src="/images/stain/orange-bottom-right.png" alt="" />
