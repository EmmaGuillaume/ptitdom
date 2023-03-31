<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
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
	<link rel="canonical" href="https://ptitdom.vercel.app/modeEmploi" />

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
<section
	class=" mb-16 w-screen h-screen relative flex flex-col justify-start items-start px-20 py-8 md:py-16"
>
	<img src="/images/stain/up-left-yellow-form.png" alt="" class="-z-10 absolute left-0 top-0" />
	<img src="/images/stain/2.png" alt="" class="-z-10 absolute right-0 top-0" />
	<img
		src="/images/stain/down-right-green-form.png"
		alt=""
		class="-z-10 absolute right-0 bottom-0"
	/>
	<div class="md:ml-12">
		<BackButton href="../" />
	</div>
	<h1 class="mt-8 md:mt-12 decoration-black sm:text-3xl text-2xl font-patrick font-bold sm: sm:">
		Mode d’emploi :
	</h1>
	<p class="my-8 text-xl">
		Bild a pour but d’aider les enfants ayant des troubles du spectre autistique à identifier
		différents objets.
	</p>
	<h2 class="text-2xl mb-4">Étapes du jeu</h2>
	<div class="relative">
		<div class="w-full mb-4 h-2 md:absolute bg-pink md:w-2 md:mb-0 md:h-full rounded-2xl" />
		<div class="ml-16 mb-16">
			<h3 class="my-4 text-xl">
				1) Sélection des thèmes, catégories et images par les parents ou le psychologue
			</h3>
			<img src="/tuto/selection-category1.png" alt="" class="w-6/12" />
			<img src="/tuto/selection-images1.png" alt="" class="w-6/12" />
			<h3 class="my-4 text-xl">2) Peaufinage de la sélection dans la galerie</h3>
			<img src="/tuto/images-choisies1.png" alt="" class="w-6/12" />
			<h3 class="my-4 text-xl">3) Début de la phase de jeu</h3>
			<img src="/tuto/jeu.png" alt="" class="w-6/12" />
			<h3 class="my-4 text-xl">
				4) Interrogation simple à l’enfant sur les images sélectionnées, Ex : “Montre moi le chat
				endormi”/ “Où sont les pompiers ?”
			</h3>
		</div>
	</div>

	<!-- <div class="relative md:ml-12">
		<div class="w-full mb-4 h-2 md:absolute bg-pink md:w-2 md:h-full rounded-2xl" />
		<p class="md:ml-8 text-base font-patrick sm: sm: sm:">
			Voici le mode d’emploi du site. <br />

			Premièrement, sélectionnez les images que vous voulez pour pouvoir faire le jeu des images.
			Vous pouvez aussi en ajouter avec le bouton ajouter une image. Vous pouvez en sélectionner
			jusqu’à 100.
			<br /> <br />

			Une fois vos images sélectionnées, vous pourrez ensuite sauvegarder votre dossier d’images en
			cliquant sur le bouton de sauvegarde afin de pouvoir réutiliser votre configuration pour les
			prochaines fois. <br />
			(Vous pouvez aussi cliquer dans votre panier et supprimer des images sélectionnées pour en ajouter
			d’autres si ces dernières ne vous plaisent pas.) <br /> <br />

			Une fois que vous avez vos images, cliquez sur commencer l’exercice pour démarrer le jeu.
			<br />
			<br />

			<strong class="">Avertissement</strong> : Nous vous conseillons de garder votre code
			confidentiel en privé afin de pouvoir retrouver vos images sélectionnés quand vous vous
			reconnecterez sur le site. <br /> <br />
		</p>
	</div> -->
</section>
