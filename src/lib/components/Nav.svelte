<script>
	import { selectedImages, validation } from '$src/stores';
	import { page } from '$app/stores';

	const index = $selectedImages.findIndex((item) => item.folder === $page.params.folder);
	console.log({ index }, $selectedImages[0]);

	$: images = $selectedImages[index]?.images.length;

	$: validated = $validation;
</script>

<div class="z-20 text-black fixed top-10 right-28">
	<div class="relative">
		<a href="/my-images" class=" flex flex-row items-center gap-2">
			<img class="w-14 h-14" src="/images/mes-images.svg" alt="" />

			{#if images != 0}
				<div
					class=" bg-white shadow-xl rounded-full w-6 flex items-center justify-center absolute -top-2 -right-2"
				>
					<p>{images}</p>
				</div>
			{/if}
		</a>
		<p
			class={`absolute w-max -left-1/2 validation text-black mt-4 mx-4 ${
				validated === true ? 'active' : ''
			}`}
		>
			L’image a été ajoutée !
		</p>
	</div>
</div>

<style>
	.validation {
		opacity: 0;
	}
	.validation.active {
		animation: activated 2s;
		transform-origin: center;
		opacity: 0;
		display: block;

		/* animation-fill-mode: forwards; */
	}

	@keyframes activated {
		from {
			transform: scale(1);
			opacity: 1;
		}
		10% {
			transform: scale(1.2);
		}
		95% {
			opacity: 1;
		}
		to {
			transform: scale(1.2);
			opacity: 0;
		}
	}
</style>
