<script lang="ts">
	export let href: string;
	export let myclass: string;
</script>

<a
	{href}
	class={`${myclass} flex items-center justify-center gap-8 h-12 w-56 p-4 text-center rounded-2xl font-patrick font-bold text-xl bg-blue`}
>
	<img src="/images/icons/back-arrow.png" alt="" class="w-7" /> Retour
</a>
