<script lang="ts">
	import BackButton from '$lib/components/BackButton.svelte';
	import LegacySection from '$lib/components/LegacySection.svelte';
	import MenuNavBar from '$lib/components/MenuNavBar.svelte';
</script>

<section class="flex flex-row text-l-p container my-md px-md md:px-xl">
	<MenuNavBar />
	<div class="md:px-xl">
		<LegacySection title="Mentions légales" order={1}>
			<p>
				Éditeur de contenu : Le groupe d’étudiants MMI (Métiers du multimédia et de l’internet)
				comprenant :
				<br /><br />
			</p>
			<ul class="list-disc ml-10">
				<li>Louis LASSERRE</li>
				<li>Margot GOUGEON</li>
				<li>Emma GUILLAUME</li>
				<li>Héloise PINGITORE</li>
				<li>Matthieu MARCHAND</li>
				<li>Coralie ALEXANDRU</li>
				<li>Loïc LEFORESTIER</li>
				<li>Tristan REBEYROL</li>
				<li>Thomas MESNIER</li>
				<li>Florian SEZER</li>
			</ul>
			<br />
			<p>
				<!-- TODO: placer le nom u directeur de publication -->
				Directeur de publication : , responsable des études Métiers du Multimédia et de l’Internet à
				l’IUT Bordeaux Montaigne.
				<br /><br />
				Mentions légales, d'après la Loi pour la confiance dans l'économie du numérique (LCEN) de 2004.
				<br /><br />
				Adresse : 1 Rue Jacques Ellul, 33800 Bordeaux
				<br /><br />
				Adresse e-mail : webmaster-iut@u-bordeaux-montaigne.fr
				<br /><br />
				Numéro de téléphone : +33 5 57 12 20 44
				<br /><br />
				Hébergement :
			</p>
			<ul class="ml-10">
				<li>Vercel Inc.</li>
				<li>440 N Barranca Ave #4133</li>
				<li>Covina, CA 91723</li>
				<li>privacy@vercel.com</li>
			</ul>
		</LegacySection>
		<LegacySection title="Conception">
			<p>
				Création : Le groupe d'étudiant MMI, Bild
				<br /><br />
				Crédits vidéographiques : Bild, tous droits réservés aux étudiants.
			</p>
		</LegacySection>

		<LegacySection title="Conditions Générales d’Utilisation (CGU)">
			<p>
				Constituant le contrat entre la société IUT Bordeaux Montaigne, l'Utilisateur, l'accès au
				site doit être précédé de l'acceptation de ces CGU. L'accès à cette plateforme signifie
				l'acceptation des présentes CGU.
				<br />
				En utilisant notre site, l'utilisateur s'engage à respecter les Conditions Générales d'Utilisation
				du site suivantes.
			</p>
		</LegacySection>
		<LegacySection title="Propriété intellectuelle">
			<p>
				Tous les éléments présents sur le site (photographie, logo, illustration) sont protégés par
				la loi en vigueur au titre de la propriété intellectuelle. En effet toute reproduction ou
				utilisation est strictement interdite sans accord au préalable de l'éditeur.
				<br /><br />
				La reproduction et la copie des contenus par l'Utilisateur requièrent une autorisation préalable
				du site. Dans ce cas, toute utilisation à des usages commerciaux ou à des fins publicitaires
				est proscrite.
			</p>
		</LegacySection>
		<LegacySection title="Champ d’application / contenu utilisateur">
			<p>
				Description des services : Nous proposons des services non-marchands, car le site internet
				est une application web gratuite sans achats intégrés.
				<br /><br />
				L’application est accessible gratuitement depuis n'importe où par tout utilisateur disposant
				d'un accès à Internet. Tous les frais nécessaires pour l'accès aux services (matériel informatique,
				connexion Internet...) sont à la charge de l'utilisateur.
				<br /><br />
				Pour des raisons de maintenance ou autres, l'accès au site peut être interrompu ou suspendu par
				l'éditeur sans préavis ni justification.
			</p>
		</LegacySection>
		<LegacySection title="Responsabilité">
			<p>
				Bien que les informations sur le site soient réputées fiables, le site se réserve la faculté
				d'une non-garantie de la fiabilité des sources.
				<br /><br />
				Les informations diffusées sur le site Bild sont présentées à titre purement informatif et sont
				sans valeur contractuelle. En dépit des mises à jour régulières, la responsabilité du site ne
				peut être engagée en cas de modification des dispositions administratives et juridiques apparaissant
				après la publication. Il en est de même pour l'utilisation et l'interprétation des informations
				communiquées sur la plateforme.
				<br /><br />
				Le site décline toute responsabilité concernant les éventuels virus pouvant infecter le matériel
				informatique de l'Utilisateur après l'utilisation ou l'accès à ce site.
				<br /><br />
				Le site ne peut être tenu pour responsable en cas de force majeure ou du fait imprévisible et
				insurmontable d'un tiers.
				<br /><br />
				La garantie totale de la sécurité et la confidentialité des données n'est pas assurée par le
				site. Cependant, le site s'engage à mettre en œuvre toutes les méthodes requises pour le faire
				au mieux.
				<br /><br />
				Tous les liens externes et liens hypertextes mis en place dans le site Bild en direction d'autres
				ressources présentes sur le réseau Internet utilisés, se font aux risques et périls de l'utilisateur
				et sous sa responsabilité. Bild ne se tient pas responsable de la véracité des propos tenus sur
				les ressources externes.
			</p>
		</LegacySection>
		<LegacySection title="RGPD :">
			<p>
				Selon le Règlement général sur la protection des données du 25 mai 2018 et conformément à la
				loi n°78-17 du 6 janvier relative à l’informatique, aux fichiers et aux libertés, la
				collecte et le traitement d’informations personnelles s’effectuent dans le respect de la vie
				privée, lors de l’inscription sur le site, vous nous autorisez à collecter les données
				suivantes :
			</p>
			<br />
			<ul class="list-disc ml-10">
				<li>Pseudonyme (ou prénom)</li>
				<li>Mot de passe</li>
			</ul>
			<br />
			<!-- TODO: placer le nom du destinataire -->
			<p>
				Les informations recueillies sur ce formulaire sont enregistrées dans un fichier informatisé
				par IUT Bordeaux Montaigne, 1 rue Jacques Ellul 33080 Bordeaux Cedex France, +33 5 57 12 20
				44, webmaster-iut@u-bordeaux-montaigne.fr pour le bon fonctionnement de votre compte sur le
				site et seront communiquées au seul destinataire suivant :
				<br /><br />
				Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer
				votre droit à la limitation du traitement de vos données.
				<br /><br />
				Suivant la loi Informatique et Libertés en date du 6 janvier 1978, articles 39 et 40, les données
				sont conservées à compter de l’achèvement de la base et jusqu’à l’issue d’une période de 15 ans
				à partir du 1er janvier de l’année qui suit la date d’achèvement.
				<br /><br />
				D’après le droit à la portabilité des données, vous pourrez récupérer les données qu’elle a fournies
				sous une forme aisément réutilisable. Les mineurs (moins de 16 ans) devront avoir un consentement
				recueilli auprès de l’autorité parentale.
				<br /><br />
				Pour exercer ces droits ou pour toute question sur le traitement de vos données dans ce dispositif,
				vous pouvez contacter notre délégué à la protection des données ou le service chargé de l’exercice
				de ces droits :
				<br /><br />
				IUT Bordeaux Montaigne 1 rue Jacques Ellul33080 Bordeaux Cedex France +33 5 57 12 20 44 webmaster-iut@u-bordeaux-montaigne.fr
				<br /><br />
				Si vous estimez, après nous avoir contactés, que vos droits « Informatique et Libertés » ne sont
				pas respectés, vous pouvez adresser une réclamation à la CNIL.
			</p>
		</LegacySection>
	</div>
</section>

<style>
	span {
		font-weight: 400;
	}
</style>
