<script lang="ts">
	import BackButton from '$lib/components/BackButton.svelte';
	import LegacySection from '$lib/components/LegacySection.svelte';
	import MenuNavBar from '$lib/components/MenuNavBar.svelte';
</script>

<section class="flex flex-row !mx-0 w-screen text-l-p container my-0">
	<MenuNavBar />
	<div class="md:px-xl">
		<LegacySection title="Mode d'emploi" order={1}>
			<p>
				Bild n’est pas un traitement des TSA, ni un remplacement de traitements proposés par un
				professionnel de santé. Si votre enfant présente des signes de TSA, n’hésitez pas à
				consulter un professionnel qualifié.
			</p>
			<br />
			<p>
				Trouver une ressource autisme ou un professionnel de santé spécialisé :
				<a href="https://annuaire.autismeinfoservice.fr/">https://annuaire.autismeinfoservice.fr/</a
				>
			</p>
		</LegacySection>
		<LegacySection
			title="Les jeux réalisés avec l’approche ABA (Analyse Comportementale Appliquée)"
			order={1}
		>
			<p>
				Bild permet de réaliser différents jeux utilisés dans l’approche ABA, développée pour
				faciliter l’apprentissage de nouveaux comportements et pour réduire les comportements
				inappropriés chez les enfants ayant des Troubles du Spectre de l’Autisme (TSA) .
			</p>
			<br />
			<p>
				Développée par des psychologues spécialisés dans les TSA, l’approche et ses jeux peuvent
				être effectués par les éducateurs, les accompagnateurs et les parents, pour une meilleure
				efficacité.
			</p>
			<br /><br />
			<p>En savoir plus sur les Troubles du Spectre de l’Autisme (TSA):</p>
			<p><a href="https://www.autismeinfoservice.fr/">https://www.autismeinfoservice.fr/</a></p>
			<br /><br />
			<p>En savoir plus sur l’approche ABA :</p>
			<p>
				<a href="https://www.autismeinfoservice.fr/accompagner/travailler-enfants-autistes/aba"
					>https://www.autismeinfoservice.fr/accompagner/travailler-enfants-autistes/aba</a
				>
			</p>
		</LegacySection>

		<LegacySection title="Comment jouer ?">
			<p>
				Avant de jouer, il faut remplir au préalable des paquets composés de 1 à 10 images à partir
				de la bibliothèque d’images. Ces paquets peuvent contenir des images d’une seule ou
				plusieurs catégories.
			</p>
			<br /><br />
			<p>
				Une fois en jeu, il est ensuite recommandé de passer d’un paquet à l’autre rapidement pour
				favoriser le dynamisme. C’est une des clés de l’apprentissage dans ce type de jeu.
			</p>
		</LegacySection>

		<LegacySection title="Quelle proportion d’images apprises/nouvelles ?">
			<p>
				Pour faciliter l’apprentissage, nous vous conseillons un taux de 80% d’images connues par
				l’enfant et de 20% d’images en cours d’acquisition.
			</p>
		</LegacySection>
		<LegacySection title="Comment considérer que l’image est apprise ?">
			<p>
				Au bout de 3 jours, si l’enfant réussit à nommer l’image, elle passe de non acquise à
				acquise.
			</p>
		</LegacySection>
		<LegacySection title="Comment considérer que l’image est apprise ?">
			<p>
				Constituant le contrat entre la société IUT Bordeaux Montaigne, l'Utilisateur, l'accès au
				site doit être précédé de l'acceptation de ces CGU. L'accès à cette plateforme signifie
				l'acceptation des présentes CGU.
				<br />
				En utilisant notre site, l'utilisateur s'engage à respecter les Conditions Générales d'Utilisation
				du site suivantes.
			</p>
		</LegacySection>
		<LegacySection title="Quelles questions poser à l’enfant pendant le jeu  ?">
			<p>
				Les questions que l’adulte pose à l’enfant en jeu peuvent être diverses. Le niveau de
				difficulté varie pour chaque enfant. Exemple : “Montre moi le chat”, “Où sont les pompiers
				?”, “Qu’est ce qu’on mange ?”, “Montre moi tous les arbres”.
			</p>
		</LegacySection>
	</div>
</section>
