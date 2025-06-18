<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import AnimatedBtn from './AnimatedBtn.svelte';

	let section1: HTMLFieldSetElement;
	let section2: HTMLFieldSetElement;
	let formTitle: HTMLHeadingElement;

	const titles = {
		section1: 'Quels sont vos informations de contactes',
		section2: 'Que voulez-vous nous dire?'
	};

	onMount(() => {
		gsap.set(section2, { autoAlpha: 0, display: 'none' });
	});

	function goToSection2() {
		gsap.to(formTitle, {
			x: -50,
			autoAlpha: 0,
			duration: 0.3,
			onComplete: () => {
				formTitle.textContent = titles.section2;
				gsap.fromTo(formTitle, { x: 50 }, { x: 0, autoAlpha: 1, duration: 0.4 });
			}
		});

		gsap.to(section1, {
			y: -20,
			autoAlpha: 0,
			duration: 0.3,
			onComplete: () => {
				gsap.set(section1, { display: 'none' });
				gsap.set(section2, { display: 'block' });
				gsap.fromTo(section2, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4 });
			}
		});
	}

	function goToSection1() {
		gsap.to(formTitle, {
			x: 50,
			autoAlpha: 0,
			duration: 0.3,
			onComplete: () => {
				formTitle.textContent = titles.section1;
				gsap.fromTo(formTitle, { x: -50 }, { x: 0, autoAlpha: 1, duration: 0.4 });
			}
		});

		gsap.to(section2, {
			y: -20,
			autoAlpha: 0,
			duration: 0.3,
			onComplete: () => {
				gsap.set(section2, { display: 'none' });
				gsap.set(section1, { display: 'block' });
				gsap.fromTo(section1, { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.4 });
			}
		});
	}
</script>

<div
	class="relative p-4 bg-[#ffffffa6] backdrop-blur-2xl rounded-2xl h-auto w-full my-10 border-2 border-green-sansfiltre shadow"
>
	<img
		class="absolute inset-0 z-0 object-contain opacity-10 pointer-events-none"
		src="./img/SF_Telephone_noir.png"
		alt="Phone with cups illustration"
	/>

	<form class="max-w-2xl mx-auto z-20">
		<h2
			bind:this={formTitle}
			class="text-3xl md:text-4xl lg:text-5xl py-10 font-bold text-green-sansfiltre text-center px-4 uppercase tracking-wide"
		>
			Quels sont vos informations de contactes
		</h2>

		<!-- Section 1 -->
		<fieldset bind:this={section1} class="space-y-4">
			<input
				type="text"
				name="name"
				placeholder="Nom complet"
				required
				class="w-full p-3 border-2 border-green-sansfiltre rounded"
			/>
			<input
				type="email"
				name="email"
				placeholder="Adresse e-mail"
				required
				class="w-full p-3 border-2 border-green-sansfiltre rounded"
			/>
			<input
				type="tel"
				name="phone"
				placeholder="Numéro de téléphone"
				class="w-full p-3 border-2 border-green-sansfiltre rounded"
			/>
			<div class="flex justify-end">
				<AnimatedBtn on:click={goToSection2} text="Suivant" type="button" color="#054236" />
			</div>
		</fieldset>

		<!-- Section 2 -->
		<fieldset bind:this={section2} class="space-y-4">
			<textarea
				name="message"
				rows="6"
				placeholder="Votre message"
				required
				class="w-full p-3 border-2 border-green-sansfiltre rounded"
			></textarea>
			<div class="flex justify-between">
				<AnimatedBtn on:click={goToSection1} text="Retour" type="button" color="#ec4899" />
				<AnimatedBtn type="submit" text="Envoyer" color="#054236" />
			</div>
		</fieldset>
	</form>
</div>
