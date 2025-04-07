<script lang="ts">
	import type { ImageFieldImage } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let nav: {
		logo_state_start: ImageFieldImage;
		logo_state_scroll: ImageFieldImage;
		link: {
			text: string;
			url?: string;
			link_type: string;
			key: string;
			variant: string;
		}[];
	};

	// Extract the "Accueil" link (variant === 'Primary')
	const accueilLink = nav.link.find((item) => item.variant === 'Primary');
</script>

<nav class="flex items-center justify-between px-4 py-2">
	<!-- Logo wrapped in "Accueil" link -->
	<div class="logo-container relative w-24">
		{#if accueilLink?.url}
			<a href={accueilLink.url}>
				<PrismicImage field={nav.logo_state_start} class="logo-start block" />
				<PrismicImage field={nav.logo_state_scroll} class="logo-scroll hidden" />
			</a>
		{/if}
	</div>

	<!-- Navigation Links -->
	<ul class="flex gap-6">
		{#each nav.link as item}
			<li>
				{#if item.url}
					<a
						href={item.url}
						class={`text-lg ${item.variant === 'Primary' ? 'font-bold' : 'text-gray-600'}`}
					>
						{item.text}
					</a>
				{:else}
					<span class="text-lg text-gray-400 cursor-not-allowed">{item.text}</span>
				{/if}
			</li>
		{/each}
	</ul>
</nav>
