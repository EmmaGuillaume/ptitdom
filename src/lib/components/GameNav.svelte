<script lang="ts">
	import { selectedImages } from '$src/stores';

	const handleDelete = () => {
		$selectedImages = [];
	};
	export let disabled: boolean;
</script>

<div class="gamenav fixed p-4 shadow-md shadow-primary left-1/2 -translate-x-1/2 bottom-6 rounded">
	<div class={`grid grid-cols-2 ${disabled === true ? 'disabled' : ''}`}>
		<button
			on:click={handleDelete}
			{disabled}
			class="startgame text-red p-4 text-center rounded-2xl font-patrick font-bold text-xl block mx-auto"
		>
			<div class="w-12 aspect-square bg-red rounded-full mx-auto grid place-items-center">
				<img class="w-1/2 h-1/2" src="/images/icons/deleteFolder.svg" alt="" srcset="" />
			</div>
			Tout supprimer
		</button>
		<a
			href={`${disabled === true ? '' : '/play'}`}
			class="startgame text-blue p-4 text-center rounded-2xl font-patrick font-bold text-xl block mx-auto"
		>
			<div class="w-12 aspect-square bg-blue rounded-full mx-auto grid place-items-center">
				<img class="w-1/2 h-1/2" src="/images/icons/play.svg" alt="" srcset="" />
			</div>

			Commencer le jeu
		</a>
	</div>
</div>

<style>
	.gamenav {
		background-color: rgba(255, 255, 255, 0.546);
	}
	.disabled button,
	.disabled a {
		opacity: 0.6;
	}
</style>
