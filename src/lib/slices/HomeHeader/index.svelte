<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	import { usePopIn } from '$lib/actions/usePopIn';

	export let slice: Content.HomeHeaderSlice;
</script>

<section
	class="relative mt-30 md:mt-0"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<div
		use:usePopIn
		class="relative mx-auto h-[500px] w-full rounded-4xl shadow-lg z-10"
	>
		<div class="absolute top-0 w-full h-full bg-black opacity-30 rounded-4xl"></div>

		<hgroup class="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
			<h1 class="text-2xl md:text-3xl lg:text-6xl font-bold text-white opacity-90 text-center px-4 uppercase tracking-wide">
				{slice.primary.title}
			</h1>
			<h2 class="text-white text-xl md:text-2xl lg:text-3xl tracking-wide">
				{slice.primary.subtitle}
			</h2>
		</hgroup>

		<PrismicImage class="w-full h-full object-cover rounded-4xl" field={slice.primary.image} />
	</div>
</section>
