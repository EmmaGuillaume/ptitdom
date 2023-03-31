<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
	import ImageButton from '$lib/ImageButton.svelte';
	import type { TImage } from '$lib/images';
	import { questions } from '$lib/utils/questions';
	import { selectedImages } from '../../stores';

	const images = $selectedImages;
	$: question = '';

	const handleClick = (images: TImage[]) => {
		question = questions(images);
	};

	const handleCardClick = () => {};
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
	<link rel="canonical" href="https://ptitdom.vercel.app/play" />

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
<main class="p-16 relative h-full">
	<img
		src="/images/stain/bottom-right-yellow-form-v2.png"
		alt=""
		class="-z-10 absolute bottom-0 right-0"
	/>
	<img src="/images/stain/red-top-left.png" alt="" class="-z-10 absolute top-0 left-0" />
	<h1 class="text-4xl mt-8">À toi de jouer !</h1>
	<button class="bg-blue p-4 rounded font-patrick mt-4" on:click={() => handleClick(images)}
		>Poser une question</button
	>
	<p class="text-xl w-full text-center">{question}</p>
	<div class="grid gap-4 grid-cols-2 mt-9 mb-10 md:grid-cols-3 xl:grid-cols-5">
		{#each images as image}
			<div class="w-full aspect-square">
				<img class="w-full h-full object-cover rounded-3xl" src={image.src} alt="" srcset="" />
			</div>
		{/each}
	</div>
	<a href="/my-images" class="text-grey font-patrick underline">Fin de partie</a>
</main>
