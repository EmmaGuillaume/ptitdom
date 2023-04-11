<script lang="ts">
	import InitLink from './root/InitLink.svelte';
	import InitButton from './root/InitButton.svelte';

	import type { TIcon } from './@types';

	export let icon: TIcon | undefined = undefined;
	export let classes: string | undefined = undefined;
	export let variant: keyof typeof buttonVariants = 'filled';

	export let href: string | undefined = undefined;
	export let onClick: (e: any) => void | undefined = undefined;

	const buttonVariants = {
		filled: 'bg-darkerblue',
		outline: 'border-2 border-blue',
		subtle: 'hover:bg-darkerblue '
	};
	const iconPos = {
		left: 'flex-row',
		top: 'flex-col',
		right: 'flex-row-reverse'
	};

	let iconClasses = ``;

	if (icon) {
		if (!icon.position) {
			icon.position = 'top';
		}
		iconClasses = `flex gap-4 items-center ${iconPos[icon.position]}`;
	}

	classes = `py-4 px-9 text-center rounded-2xl border-0 font-mono text-xl ${classes} ${buttonVariants[variant]} ${iconClasses}`;

	let Type: typeof InitLink | typeof InitButton = InitLink;

	let attributes = {
		href: href,
		classes: classes
	};

	if (onClick) {
		Type = InitButton;
		attributes = {
			onClick: onClick,
			classes: classes
		};
	}
</script>

<svelte:component this={Type} {...attributes}>
	{#if icon}
		<div class="flex-ro" />
		<img src={icon.src} alt={icon.alt} class={icon.classes} />
	{/if}
	<slot />
</svelte:component>
