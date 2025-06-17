<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';
	import { fly } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Icon from '@iconify/svelte';

	export let slice: Content.MissionSlice;

	let sectionRef: HTMLElement;
	let currentIndex = 0;
	let intervalId: ReturnType<typeof setInterval>;

	// Custom slide transition from right to left
	const slideLeft = (node: Element, { duration = 500 } = {}) => {
		return fly(node, {
			x: 300, // start 300px to the right
			duration,
			easing: quintOut
		});
	};

	function nextSlide() {
		currentIndex = (currentIndex + 1) % slice.primary.slide.length;
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + slice.primary.slide.length) % slice.primary.slide.length;
	}

	onMount(async () => {
		const { default: gsap } = await import('gsap');
		const { default: ScrollTrigger } = await import('gsap/ScrollTrigger');

		gsap.registerPlugin(ScrollTrigger);

		ScrollTrigger.create({
			trigger: sectionRef,
			start: 'top center',
			end: 'bottom center',
			onEnter: () => {
				gsap.to(sectionRef, {
					backgroundColor: '#054236',
					duration: 0.5,
					ease: 'power2.out'
				});
			},
			onLeaveBack: () => {
				gsap.to(sectionRef, {
					backgroundColor: '#ffebfd',
					duration: 0.5,
					ease: 'power2.out'
				});
			}
		});

		// Autoplay every 10 seconds
		intervalId = setInterval(nextSlide, 10000);
	});

	onDestroy(() => {
		clearInterval(intervalId);
	});
</script>

<section 
	bind:this={sectionRef}
	class="mt-20 min-h-screen -mx-4 md:-mx-6 transition-colors duration-500 rounded-4xl overflow-x-hidden"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<h2 class="text-3xl md:text-4xl lg:text-5xl pt-10 font-bold text-pink-sansfiltre text-center px-4 uppercase tracking-wide">
		{slice.primary.section_title}
	</h2>

	<!-- Navigation par grains de café -->
	<div class="flex justify-center gap-3 mt-6">
		{#each slice.primary.slide as _, index}
			<button
				on:click={() => currentIndex = index}
				aria-label={"Aller au slide " + (index + 1)}
				class="transition transform duration-300 focus:outline-none rounded-full"
			>
				<Icon
					icon="ph:coffee-bean-bold"
					width="28"
					height="28"
					class={`text-white transition-all duration-300 ${index === currentIndex ? 'opacity-100 scale-125' : 'opacity-40'}`}
				/>
			</button>
		{/each}
	</div>

	<!-- Carousel -->
	<div class="relative h-[600px] md:h-[400px] overflow-hidden bg-[#ffffff0c] backdrop-blur-2xl mx-6 my-10 border-2 border-white rounded-3xl shadow">
		{#key currentIndex}
			<div
				class="absolute inset-0 flex flex-col justify-between md:flex-row items-center md:items-stretch"
				transition:slideLeft
			>
				<!-- Text section -->
				<div class="w-full md:w-1/2 p-6 flex flex-col justify-center">
					<h3 class="text-4xl font-semibold text-pink-sansfiltre mb-4">
						{slice.primary.slide[currentIndex].title}
					</h3>
					<p class="text-gray-100 tracking-wide">
						{slice.primary.slide[currentIndex].description}
					</p>
				</div>

				<!-- Image section -->
				<div class="w-full md:w-1/2 h-[250px] md:h-full overflow-hidden">
					<PrismicImage
						class="w-full h-full object-cover rounded-b-2xl md:rounded-none md:rounded-r-2xl hover:scale-105 hover:rotate-3 transition-all duration-500"
						field={slice.primary.slide[currentIndex].image}
					/>
				</div>
			</div>
		{/key}
	</div>
</section>
