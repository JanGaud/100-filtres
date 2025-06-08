<script lang="ts">
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.HomeHeaderSlice;
</script>

<section class="relative mt-30 lg:mt-0 h-[650px] lg:h-screen overflow-x-hidden" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="absolute lg:left-30 bottom-0 flex items-center justify-center w-[250px] z-0">
		<img class="w-full h-full object-cover" src="static/img/hand-painted-neutral-coloured-watercolour-splatter-design.png" alt="coffee stain" />
	</div>

	<div class="mx-auto overflow-hidden h-[500px] w-full rounded-4xl shadow-lg relative z-10">
		<PrismicImage class="w-full h-full object-cover" field={slice.primary.image} />
	</div>
</section>
