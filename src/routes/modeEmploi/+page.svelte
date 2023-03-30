<script lang="ts">
	import BackButton from '$lib/BackButton.svelte';
</script>

<section class="flex flex-col justify-start items-start mx-24 my-24">
	<div class="ml-12">
		<BackButton href="../" />
	</div>
	<h1 class="my-12 decoration-black sm:text-3xl text-2xl font-patrick font-bold sm: sm:">
		Mode d’emploi :
	</h1>
	<div class="relative ml-12">
		<div class="absolute bg-pink w-2 h-full rounded-2xl" />
		<p class="ml-8 sm:text-xl text-base font-patrick sm: sm: sm:">
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
	</div>
</section>
