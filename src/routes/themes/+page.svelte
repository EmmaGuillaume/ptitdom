<script lang="ts">
	import Nav from '$components/Nav.svelte';
	import MenuNavBar from '$lib/components/MenuNavBar.svelte';
	import type { TThemes } from '$data/themes';
	import ActionsBar from '$lib/components/ActionsBar.svelte';
	import Button from '$lib/components/Button.svelte';

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

<MenuNavBar />
<section class="container py-28 px-8 md:pl-16 md:pr-24 xl:pr-48">
	<img src="/images/stain/up-left-yellow-form-v2.png" alt="" class="absolute top-0 left-0 -z-10" />
	<img
		src="/images/stain/down-right-orange-form.png"
		alt=""
		class="absolute bottom-0 right-0 -z-10"
	/>
	<!-- <Nav /> -->
	<h1 class="decoration-black text-4xl font-patrick font-bold">Les thématiques</h1>
	<div class="flex flex-col xl:flex-row xl:items-center xl:justify-between xl:mt-0">
		<div class="flex gap-4 items-center mt-4">
			<img src="/images/icons/icon-light.png" class="w-5 h-8" alt="" />
			<p class="decoration-black text-2xl font-patrick">
				Cliquez sur un thème pour sélectionner une/des image(s) !
			</p>
		</div>
		<!-- <div class="flex gap-4 items-center mt-4 xl:mt-0">
			<p class="text-4xl">Défile !</p>
			<img src="/images/icons/swipe-arrow.png" alt="" class="w-12 xl:w-20" />
		</div> -->
	</div>

	{#each themes as theme}
		<h2 class="decoration-black text-3xl font-patrick font-bold mt-12 mb-6">
			{theme.name}
		</h2>
		<div class="slider-container overflow-hidden">
			<div
				class=" inner-slider z-0 grid gap-6 grid-cols-2 mx-2 mb-10 md:grid-cols-3 xl:grid-cols-8 xl:mx-0 xl:gap-8"
			>
				{#each theme.categoriesName as categorie}
					<a href={`/categories/${categorie.name}`} class="w-full relative md:w-10/12 xl:w-full"
						><img
							src={categorie.cover}
							alt={categorie.name}
							class="aspect-square object-cover rounded-3xl drop-shadow-card brightness-90 w-full mb-2"
						/>
						<p class="text-2xl font-normal z-12 capitalize">
							{categorie.name}
						</p>
					</a>
				{/each}
			</div>
		</div>
	{/each}

	<!-- <ActionsBar classes="right-0 flex">
		<Button
			icon={{ src: '/images/icons/play.png', alt: '', classes: 'w-4/12 mx-auto' }}
			href="/play"
			variant={'subtle'}
		>
			<p class="text-2xl">Commencer le jeu !</p>
		</Button>
	</ActionsBar> -->
</section>
