<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
	import Button from '$lib/Button.svelte';
	import Modale from '$lib/Modale.svelte';
	import { bind } from 'svelte/internal';
	const showModalHelp = () => {
		isActive = true;
		return isActive;
	};
	let isActive = false;
	// let mat = 3;
	// localStorage.setItem('matthieu', mat);
	// let matthieu = localStorage.getItem('matthieu') || 'hello';
	// 	console.log(matthieu);
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
	<link rel="canonical" href="https://ptitdom.vercel.app/" />

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

<main
	class="flex flex-col items-center lmd:justify-around xl:gap-2 w-[100vw] h-[100vh] px-10 xs:px-28 relative lmd:flex-row"
>
	<img src="/images/stain/1.png" class="absolute -z-30 top-0 left-0" alt="tâche de couleur" />
	<img src="/images/stain/2.png" class="absolute -z-30 top-0 right-0" alt="tâche de couleur" />
	<img src="/images/stain/3.png" class="absolute -z-30 bottom-0 left-0" alt="tâche de couleur" />
	<img src="/images/stain/4.png" class="absolute -z-30 bottom-0 right-0" alt="tâche de couleur" />
	<div class="flex flex-col lmd:items-start lmd:justify-start relative">
		<h1
			class=" mt-24 lmd:mt-5 decoration-black text-4xl font-mono font-bold text-center sm:mt-24 z-2"
		>
			Bienvenue sur Bild
		</h1>

		<div
			class="absolute -z-10 bg-yellow w-[6px] h-[152px] sm:top-[15%] lmd:top-[4%] top-[19%] left-[-5%]"
		/>
		<p class="text-start text-xl xs:w-[434px] mt-7 z-2">
			Basée sur l’approche ABA, le jeu des images sert à faciliter l’apprentissage du vocabulaire
			des enfants atteints de TSA.
		</p>
		<div class="justify-center flex mt-16">
			<img class="w-52 sm:w-auto" src="../../images/logo.png" alt="" />
		</div>
	</div>
	<div class="">
		<div class="justify-center items-center flex-col flex gap-7 mt-7">
			<!--<button on:click={() => showModalHelp()}>POP UP TEST</button>
			 <Button disabled={false} url="/tableau/{data.id}/explore">Explorer l'oeuvre !</Button>
			<Modale bind:isActive />-->
			<a
				href="/themes"
				class="flex w-72 xs:w-[345px] items-center bg-blue justify-center h-12 p-4 text-center rounded-2xl border-0 font-mono font-bold text-xl"
				>Commencer le jeu
			</a>

			<Button href="/modeEmploi" name="Mode d'emploi" />
			<Button href="/legacy" name="Mentions légales" />
		</div>
	</div>
</main>
