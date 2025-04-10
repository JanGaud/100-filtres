<script lang="ts">
	import type { ImageFieldImage, LinkField } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';
	import { isFilled } from '@prismicio/client';
	import Icon from '@iconify/svelte';

	export let nav: {
		logo_state_start: ImageFieldImage;
		logo_state_scroll: ImageFieldImage;
		link: (LinkField & {
			text: string;
			key: string;
			variant: string;
		})[];
	};

	const accueilLink = nav.link.find((item) => item.variant === 'Primary');
	let menuOpen = false;
</script>

<nav class="fixed w-full top-0 z-50">
	<!-- Top bar -->
	<div class="flex items-center justify-between px-6 py-4 z-50">
		<!-- Logo -->
		<div class="w-28 z-50">
			{#if accueilLink}
				<PrismicLink field={accueilLink}>
					<PrismicImage
						field={nav.logo_state_start}
						class="w-full z-50 drop-shadow"
					/>
				</PrismicLink>
			{/if}
		</div>

		<!-- Burger menu button -->
		<button
			type="button"
			class="z-30"
			on:click={() => (menuOpen = true)}
			aria-label="Toggle navigation menu"
		>
			<Icon icon="mingcute:menu-line" class="text-green-sansfiltre w-9 h-9" />
		</button>
	</div>

	<!-- Slide-in menu panel -->
	<div
		class={`fixed top-0 right-0 h-screen w-2/3 bg-green-sansfiltre transform transition-transform duration-300 ease-in-out z-40 ${
			menuOpen ? 'translate-x-0' : 'translate-x-full'
		}`}
	>
		<!-- Close button positioned like open button -->
		<button
			type="button"
			class="absolute top-12 right-6 z-50 text-white hover:text-gray-300"
			on:click={() => (menuOpen = false)}
			aria-label="Close menu"
		>
			<Icon icon="mingcute:close-line" class="text-white w-10 h-10" />
		</button>

		<!-- Navigation links -->
		<ul class="flex flex-col gap-8 px-6 pt-24 text-white text-xl tracking-widest uppercase font-lazy-dog">
			{#each nav.link as link (link.key)}
				<li>
					{#if isFilled.link(link)}
						<PrismicLink field={link} on:click={() => (menuOpen = false)}>
							{link.text}
						</PrismicLink>
					{:else}
						<span class="opacity-50 cursor-not-allowed">{link.text}</span>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</nav>
