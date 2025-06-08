<script lang="ts">
	import type { ImageFieldImage, LinkField } from '@prismicio/client';
	import { PrismicImage, PrismicLink } from '@prismicio/svelte';

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
</script>

<nav
	class="hidden md:flex flex-col rounded-r-xl shadow-2xl bg-green-sansfiltre items-center justify-evenly gap-12 px-6 py-6 w-[30%] h-screen fixed left-0 top-0 z-50"
>
	<!-- Logo wrapped in "Accueil" link -->
	<div class="logo-container w-full flex justify-center">
		{#if accueilLink}
			<PrismicLink field={accueilLink}>
				<PrismicImage
					field={nav.logo_state_start}
					class="logo-start block w-48 lg:w-52 xl:w-60 drop-shadow drop-shadow-pink-sansfiltre"
				/>
			</PrismicLink>
		{/if}
	</div>

	<!-- Navigation Links -->
	<ul class="h-full flex flex-col justify-evenly items-start gap-2 uppercase">
		{#each nav.link as link (link.key)}
			<li>
				{#if link}
					<PrismicLink field={link} class="text-2xl tracking-widest text-white drop-shadow-md hover-underline font-lazy-dog">
						{link.text}
					</PrismicLink>
				{/if}
			</li>
		{/each}
	</ul>
</nav>

