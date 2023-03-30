<script lang="ts">
	export let href: string;
	export let name: string;
</script>

<a
	{href}
	class="flex w-72 xs:w-[345px] items-center justify-center h-12 p-4 text-center rounded-2xl border-solid border-2 font-patrick font-bold text-xl"
>
	{name}
</a>
