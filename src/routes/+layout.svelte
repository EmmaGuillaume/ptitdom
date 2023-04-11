<script>
	import Burger from '$lib/components/Burger.svelte';
	import '../app.css';
	const lala = 0;
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
	<meta property="og:image" content="/images/og-meta.png" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content="https://ptitdom.vercel.app/" />
	<meta name="twitter:title" content="Bild, votre jeu de cartes numérique - Bild" />
	<meta
		name="twitter:description"
		content="Bild est un outil pédagogique permettant aux enfants ayant des troubles du spectre autistique d'identifier différents objets ou situations "
	/>
	<meta name="twitter:image" content="/images/og-meta.png" />

	<meta name="apple-mobile-web-app-capable" content="yes" />
	<meta name="apple-mobile-web-app-title" content="Bild, votre jeu de cartes numérique" />
	<meta name="apple-mobile-web-app-status-bar-style" content="#74DAD5" />
	<meta name="theme-color" content="#74DAD5" />
</svelte:head>

<main class="relative">
	<Burger />
	<slot />
</main>
