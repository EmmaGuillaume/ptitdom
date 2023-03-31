<script lang="ts">
	import Nav from '$lib/Nav.svelte';
	import type { TThemes } from '$lib/images';

	export let data: { themes: TThemes[] };

	const { themes } = data;
	/*onMount(() => {
		let sliderContainer = document.querySelector('.slider-container');
		let innerSlider = document.querySelector('.inner-slider');

		let pressed = false;
		let startX;
		let x;

		sliderContainer.addEventListener('mousedown', (e) => {
			pressed = true;
			startX = e.offsetX - innerSlider.offsetLeft;
			sliderContainer.style.cursor = 'grabbing';
		});

		sliderContainer.addEventListener('mouseenter', () => {
			sliderContainer.style.cursor = 'grab';
		});
		sliderContainer.addEventListener('mouseup', () => {
			sliderContainer.style.cursor = 'grab';
			pressed = false;
		});
		sliderContainer.addEventListener('mousemove', (e) => {
			if (!pressed) return;
			e.preventDefault();

			x = e.offsetX;

			innerSlider.style.left = `${x - startX}px`;
			checkBoundary();
		});

		const checkBoundary = () => {
			let outer = sliderContainer.getBoundingClientRect();
			let inner = innerSlider.getBoundingClientRect();

			if (parseInt(innerSlider.style.left) > 0) {
				innerSlider.style.left = '0px';
			}

			if (inner.right < outer.right) {
				innerSlider.style.left = `-${inner.width - outer.width}px`;
			}
		};
	}); */
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
	<link rel="canonical" href="https://ptitdom.vercel.app/themes" />

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

<main class=" px-8 py-28 md:px-24 relative">
	<img src="/images/stain/up-left-yellow-form-v2.png" alt="" class="absolute top-0 left-0 -z-10" />
	<img
		src="/images/stain/down-right-orange-form.png"
		alt=""
		class="absolute bottom-0 right-0 -z-10"
	/>
	<Nav />
	<h1 class="decoration-black text-4xl font-patrick font-bold">Les thématiques</h1>
	<div class="flex flex-col xl:flex-row xl:items-center xl:justify-between xl:mt-0">
		<div class="flex gap-4 items-center mt-4">
			<img src="/images/icons/icon-light.png" class="w-5 h-8" alt="" />
			<p class="decoration-black text-2xl font-patrick">
				Cliquez sur un thème pour sélectionner une/des image(s) !
			</p>
		</div>
		<div class="flex gap-4 items-center mt-4 xl:mt-0">
			<p class="text-4xl">Défile !</p>
			<img src="/images/icons/swipe-arrow.png" alt="" class="w-12 xl:w-20" />
		</div>
	</div>

	{#each themes as theme}
		<h2 class="decoration-black text-2xl font-patrick font-bold mt-12 mb-6">{theme.name}</h2>
		<div class="slider-container overflow-hidden">
			<div
				class=" inner-slider z-0 grid gap-6 grid-cols-2 mx-2 mb-10 md:grid-cols-3 xl:grid-cols-8 xl:mx-0 xl:gap-8"
			>
				{#each theme.categoriesName as categorie}
					<a href={`/categories/${categorie.name}`} class="w-full relative md:w-10/12 xl:w-full"
						><img
							src={categorie.cover}
							alt={categorie.name}
							class="aspect-square object-cover rounded-3xl drop-shadow-card brightness-50 w-full mb-2"
						/>
						<p class="text-3xl font-bold z-12 capitalize">
							{categorie.name}
						</p>
					</a>
				{/each}
			</div>
		</div>
	{/each}

	<div
		class="hidden fixed bottom-0 right-0 mb-12 mx-12 gap-16 drop-shadow bg-white px-20 py-5 border-solid border-b-orange rounded-3xl"
	>
		<div class="flex flex-col items-center">
			<img src="/images/icons/folder.png" alt="" />
			<p class="mt-2 text-2xl">Ajouter à un dossier</p>
		</div>
		<div class="flex flex-col items-center">
			<img src="/images/icons/play.png" alt="" />
			<p class="mt-2 text-2xl">Commencer le jeu !</p>
		</div>
	</div>
</main>
