<script lang="ts">
	import { LinkType, type Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import { usePopIn } from '$lib/actions/usePopIn';
	import { page } from '$app/stores';
	import MenuPopup from '../../../components/MenuPopup.svelte';

	export let slice: Content.HomeHeaderSlice;

	let menu = $page.data.menu;

	let selectedMenu: typeof menu[0] | null = null;
	let showPopup = false;

	function openMenu(menuItem: any) {
		selectedMenu = menuItem;
		showPopup = true;
	}
</script>

<section
	class="relative mt-30 md:mt-0"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div use:usePopIn class="relative mx-auto h-[500px] w-full rounded-4xl shadow-lg z-10">
		<div class="absolute top-0 w-full h-full bg-black opacity-30 rounded-4xl"></div>

		<hgroup
			class="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center"
		>
			<h1
				class="text-2xl md:text-3xl lg:text-6xl font-bold text-white text-center px-4 uppercase tracking-wide"
			>
				{slice.primary.title}
			</h1>
			<h2 class="text-white text-xl md:text-2xl lg:text-3xl tracking-wide">
				{slice.primary.subtitle}
			</h2>
		</hgroup>

		<PrismicImage class="w-full h-full object-cover rounded-4xl" field={slice.primary.image} />
	</div>

	<div class="mt-10 flex items-center justify-center gap-4 md:px-10 lg:px-20"
	id="menu">
		{#each menu as section}
			<button
				use:usePopIn
				on:click={() => openMenu(section)}
				class="relative w-1/2 h-[175px] rounded-3xl overflow-hidden shadow-md"
			>
				<span
					class="absolute inset-0 flex items-center justify-center uppercase text-white text-lg lg:text-2xl tracking-wider font-semibold z-10 text-center bg-black/40 pointer-events-none"
				>
					{section.data.menu_title}
				</span>
				<PrismicImage
					class="w-full h-full object-cover hover:scale-105 hover:rotate-3 transition-all duration-500"
					field={section.data.menu_image}
				/>
			</button>
		{/each}
	</div>
	{#if showPopup}
		<MenuPopup {selectedMenu} on:close={() => (showPopup = false)} />
	{/if}
</section>
