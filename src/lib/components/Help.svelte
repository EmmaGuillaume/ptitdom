<script lang="ts">
	import P from './P.svelte';

	export let classes: string = '';
</script>

<div class="flex gap-4 items-center">
	<img src="/images/icons/light.svg" alt="" class="inline-block" />
	<P>
		<slot />
	</P>
</div>
