<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
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

<div class="flex flex-row items-center justify-around gap-2 w-full px-28">
	<div class="flex flex-col items-start justify-start gap">
		<h1 class="decoration-black text-4xl font-mono font-bold text-center mt-5 sm:mt-24">
			Bienvenue sur Bild
		</h1>
		<p class="text-start text-xl w-[434px] mt-7">
			Basée sur l’approche ABA, le jeu des images sert à faciliter l’apprentissage du vocabulaire
			des enfants atteint de TSA.
		</p>
		<div class="justify-center flex mt-16">
			<img class="w-36 sm:w-auto" src="../../images/logo.png" alt="" />
		</div>
	</div>
	<div class="">
		<div class="justify-center items-center flex-col flex gap-7 mt-7">
			<!--<button on:click={() => showModalHelp()}>POP UP TEST</button>
			 <Button disabled={false} url="/tableau/{data.id}/explore">Explorer l'oeuvre !</Button>
			<Modale bind:isActive />
		
		
		
		<div class="">
		<img src="/images/stain/line1.png" alt="" />
	</div>-->
			<a
				href="/themes"
				class="flex w-[345px] items-center bg-blue justify-center h-12 p-4 text-center rounded-2xl border-0 font-mono font-bold text-xl"
				>Commencer le jeu
			</a>

			<BackButton href="/modeEmploi" name="Mode d'emploi" />
			<BackButton href="/legacy" name="Mentions légales" />
		</div>
	</div>
</div>
