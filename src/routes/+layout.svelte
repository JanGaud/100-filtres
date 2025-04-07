<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { PrismicPreview } from '@prismicio/svelte/kit';
	import { repositoryName } from '$lib/prismicio';
	import '../app.css';

	import Nav from '../components/Nav.svelte';
	import MobileNav from '../components/MobileNav.svelte';

	let nav = $page.data.nav.data;
	let isMobile = false;

	onMount(() => {
		const check = () => {
			isMobile = window.innerWidth < 768;
		};
		check();
		window.addEventListener('resize', check);
		return () => window.removeEventListener('resize', check);
	});
</script>

{#if isMobile}
	<!-- Mobile layout: Nav on top -->
	<main class="min-h-screen">
		<MobileNav {nav} />
		<div class="w-full px-4 py-6">
			<slot />
		</div>
	</main>
{:else}
	<!-- Desktop layout: Nav on the left -->
	<main class="flex min-h-screen">
		<Nav {nav} />
		<div class="w-[70%] ml-auto px-6 py-10">
			<slot />
		</div>
	</main>
{/if}

<PrismicPreview {repositoryName} />
