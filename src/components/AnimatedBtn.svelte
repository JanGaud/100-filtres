<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import gsap from 'gsap';

	export let text: string = 'Bouton';
	export let color: string = '#ffffff';
	export let type: 'button' | 'submit' | 'reset' = 'button';

	const dispatch = createEventDispatcher();

	let buttonEl: HTMLButtonElement;
	let flairEl: HTMLSpanElement;
	let xSet: (val: number) => void;
	let ySet: (val: number) => void;

	function getXY(e: MouseEvent) {
		const { left, top, width, height } = buttonEl.getBoundingClientRect();

		const xTransformer = gsap.utils.pipe(
			gsap.utils.mapRange(0, width, 0, 100),
			gsap.utils.clamp(0, 100)
		);
		const yTransformer = gsap.utils.pipe(
			gsap.utils.mapRange(0, height, 0, 100),
			gsap.utils.clamp(0, 100)
		);

		return {
			x: xTransformer(e.clientX - left),
			y: yTransformer(e.clientY - top)
		};
	}

	onMount(() => {
		xSet = gsap.quickSetter(flairEl, 'xPercent');
		ySet = gsap.quickSetter(flairEl, 'yPercent');

		buttonEl.addEventListener('mouseenter', (e) => {
			const { x, y } = getXY(e);
			xSet(x);
			ySet(y);
			gsap.to(flairEl, { scale: 1, duration: 0.4, ease: 'power2.out' });
		});

		buttonEl.addEventListener('mouseleave', (e) => {
			const { x, y } = getXY(e);
			gsap.killTweensOf(flairEl);
			gsap.to(flairEl, {
				xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
				yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
				scale: 0,
				duration: 0.3,
				ease: 'power2.out'
			});
		});

		buttonEl.addEventListener('mousemove', (e) => {
			const { x, y } = getXY(e);
			gsap.to(flairEl, { xPercent: x, yPercent: y, duration: 0.4, ease: 'power2' });
		});
	});
</script>

<button
	type={type}
	on:click={(e) => dispatch('click', e)}
	class="button button--stroke relative inline-block px-6 py-3 font-semibold overflow-hidden rounded-md"
	bind:this={buttonEl}
>
	<span class="button__flair absolute inset-0 z-0" bind:this={flairEl}>
		<span class="button__flair-inner block w-[170%]" style="background-color: {color};"></span>
	</span>
	<span class="button__label relative z-10 text-current uppercase tracking-wide font-lazy-dog">{text}</span>
</button>

<style>
	.button__flair-inner {
		aspect-ratio: 1/1;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		position: absolute;
		left: 0;
		top: 0;
		will-change: transform;
	}

	.button__flair {
		transform: scale(0);
		transform-origin: 0 0;
		pointer-events: none;
	}

	.button--stroke {
		border: 2px solid currentColor;
		color: currentColor;
	}
</style>
