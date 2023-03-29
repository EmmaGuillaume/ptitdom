<script>
	import { selectedImages, validation } from '../stores';
	$: images = $selectedImages.length;
	$: validated = $validation;
</script>

<div class="z-20 text-black fixed top-10 right-10">
	<a href="/my-images" class=" flex flex-row items-center gap-2"
		><img class="" src="/images/img.svg" alt="" />
		<h2 class="decoration-black text-3xl font-mono font-bold">Mes images</h2>
		{#if images != 0}
			<div
				class=" bg-green rounded-full w-6 flex items-center justify-center absolute -translate-y-3 translate-x-4"
			>
				<p>{images}</p>
			</div>
		{/if}
	</a>
	<p class={`validation text-black mt-4 mx-4 ${validated === true ? 'active' : ''}`}>
		L’image a été ajoutée !
	</p>
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
		width: fit-content;
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
