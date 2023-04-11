<script lang="ts">
	import Button from '$lib/components/Button.svelte';
</script>

<section
	class="container flex flex-col items-center lmd:justify-around xl:gap-2 w-[100vw] h-[100vh] lmd:flex-row"
>
	<img
		src="/images/stain/blue-form-bottom-full-width-home.png"
		class="absolute -z-30 bottom-0 w-screen"
		alt="tâche de couleur"
	/>
	<div class="flex flex-col lmd:items-start lmd:justify-start relative">
		<h1
			class=" text-primary mt-24 lmd:mt-5 decoration-black text-4xl font-mono font-bold text-center sm:mt-24 z-2"
		>
			Bienvenue sur Bild
		</h1>

		<div
			class="absolute -z-10 bg-primary w-1.5 h-36 rounded-md sm:top-[15%] lmd:top-[4%] top-[19%] left-[-5%]"
		/>
		<p class=" text-primary text-start text-xl xs:w-[434px] mt-7 z-2">
			Basée sur l’approche ABA, le jeu des images sert à faciliter l’apprentissage du vocabulaire
			des enfants atteints de TSA.
		</p>
		<div class="justify-center flex mt-16">
			<img class="w-52 sm:w-60" src="/images/mainlogo.png" alt="" />
		</div>
	</div>
	<div class="">
		<div class="justify-center items-center flex-col flex gap-7 mt-7">
			<!--<button on:click={() => showModalHelp()}>POP UP TEST</button>
			 <Button disabled={false} url="/tableau/{data.id}/explore">Explorer l'oeuvre !</Button>
			<Modale bind:isActive />-->

			<Button href="/themes" classes="w-full">Commencer le jeu</Button>
			<!-- <Button href="/modeEmploi" classes="w-full">Mode d'emploi</Button> -->
			<Button href="/legacy" classes="w-full">Mentions légales</Button>
		</div>
	</div>
</section>
