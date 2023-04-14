<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import H1 from '$lib/components/H1.svelte';
</script>

<section
	class="flex flex-col mx-xl md:flex-row justify-start gap-8 md:gap-16 mt-20 md:my-32 align-top"
>
	<div id="imgLogo" class="object-cover h-fit flex justify-start md:justify-end w-fit md:w-4/12">
		<img class="w-3/12" src="/images/mainlogo.png" alt="" />
	</div>

	<div id="textLogo" class="flex flex-col gap-8 md:gap-16 w-full md:w-6/12">
		<img src="/images/icons/bild-logo.svg" alt="" class="w-4/12" />
		<p class=" text-primary text-start text-md z-2">
			Bild est une application interactive destinée aux enfants ayant un Trouble du Spectre
			Autistique (TSA). Elle propose de simplifier et numériser les jeux d’images utilisés dans
			l’approche A.B.A. (Analyse Comportementale Appliquée) et ainsi permettre de faciliter
			l’apprentissage du vocabulaire et de la communication aux enfants.
		</p>
		<Button href="/dashboard" classes="w-fit text-white font-comfortaa-regular"
			>Commencer la sélection</Button
		>
		<div class="flex gap-8">
			<Button
				href="/modeEmploi"
				classes="!px-0 underline w-fit bg-white text-primary font-comfortaa-regular"
				>Mode d'emploi</Button
			>
			<Button
				href="/legacy"
				classes="!px-0 underline w-fit text-primary bg-white font-comfortaa-regular"
				>Mentions légales</Button
			>
		</div>
	</div>
</section>

<style>
#imgLogo {
	animation: imglogo 1s ease-out;
}
#textLogo {
	animation: textlogo 1s ease-out;
}

@keyframes imglogo {
	from {
		transform: translateX(-50px);
		opacity: 0;
	}
	80% {
		opacity: 1;
	}
	to {
		transform: translateX(0);
	}
}
@keyframes textlogo {
	from {
		transform: translateX(50px);
		opacity: 0;
	}
	80% {
		opacity: 1;
	}
	to {
		transform: translateX(0);
	}
}
</style>