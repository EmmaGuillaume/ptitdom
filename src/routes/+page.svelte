<script lang="ts">
	import Modale from '$lib/Modale.svelte';
	import { bind } from 'svelte/internal';
	import modalText from '$lib/Modale.svelte';
	import modalTitle from '$lib/Modale.svelte';
	const showModal = () => {
		isActive = true;
		return isActive;
	};
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

<h1 class="decoration-black text-3xl font-mono font-bold text-center mt-5 sm:mt-24">
	Bienvenue sur le jeu des images
</h1>
<p class="text-center text-xl mt-3 p-8">
	Basée sur l’approche ABA, le jeu des images sert pour faciliter l’apprentissage du vocabulaire.
</p>
<div class="justify-center flex mt-4">
	<img class="w-36 sm:w-auto" src="../../images/mainimg.png" alt="" />
</div>

<div class="justify-center items-center flex-col flex gap-7 mt-7">
	<button on:click={() => showModalHelp()}>POP UP TEST</button>
	<!-- <Button disabled={false} url="/tableau/{data.id}/explore">Explorer l'oeuvre !</Button> -->
	<Modale bind:isActive />
	<a
		href="/themes"
		class="flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl"
		>Commencer le jeu
	</a>

	<a
		href="/modeEmploi"
		class=" flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl"
		>Mode d’emploi
	</a>
	<a
		href="/legacy"
		class=" mb-9 flex items-center justify-center h-12 w-72 p-4 text-center rounded-2xl border-solid border-2 font-mono font-bold text-xl"
		>Mentions légales
	</a>
</div>
