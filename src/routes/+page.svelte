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

<main
	class="flex flex-col items-center lmd:justify-around xl:gap-2 w-[100vw] h-[100vh] px-5 xs:px-28 relative lmd:flex-row"
>
	<img src="/images/stain/1.png" class="absolute -z-30 top-0 left-0" alt="tâche de couleur" />
	<img src="/images/stain/2.png" class="absolute -z-30 top-0 right-0" alt="tâche de couleur" />
	<img src="/images/stain/3.png" class="absolute -z-30 bottom-0 left-0" alt="tâche de couleur" />
	<img src="/images/stain/4.png" class="absolute -z-30 bottom-0 right-0" alt="tâche de couleur" />
	<div class="flex flex-col items-start justify-start gap relative">
		<h1 class="decoration-black text-4xl font-patrick font-bold text-center mt-5 sm:mt-24 z-2">
			Bienvenue sur Bild
		</h1>

		<div
			class="absolute -z-10 bg-yellow w-[6px] h-[152px] sm:top-[15%] lmd:top-[4%] top-[19%] left-[-5%]"
			alt=" ligne"
		/>
		<p class="text-start text-xl xs:w-[434px] mt-7 z-2">
			Basée sur l’approche ABA, le jeu des images sert à faciliter l’apprentissage du vocabulaire
			des enfants atteint de TSA.
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
				class="flex w-[345px] items-center bg-blue justify-center h-12 p-4 text-center rounded-2xl border-0 font-patrick font-bold text-xl"
				>Commencer le jeu
			</a>

			<Button href="/modeEmploi" name="Mode d'emploi" />
			<Button href="/legacy" name="Mentions légales" />
		</div>
	</div>
</main>
