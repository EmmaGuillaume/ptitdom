<script>
	import { selectedImages } from '../stores';
	$: images = $selectedImages.length;
	//let countImg = images.length;
</script>

<a href="/my-images" class="text-black fixed top-10 right-10 flex flex-row items-center gap-2"
	><img class="relative" src="/images/img.svg" alt="" />
	<h2 class="decoration-black text-3xl font-mono font-bold">Mes images</h2>
	{#if images != 0}
		<div
			class=" bg-green rounded-full w-6 flex items-center justify-center absolute -translate-y-3 translate-x-4"
		>
			<p>{images}</p>
		</div>
	{/if}
</a>
