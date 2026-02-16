<script lang="ts">
	import { onMount, tick } from 'svelte';
	import { page } from '$app/stores';
	import gsap from 'gsap';
	import AnimatedBtn from './AnimatedBtn.svelte';
	import { validateFormStep1, validateFormStep2 } from '../utils/formValidator';
	import { PrismicImage } from '@prismicio/svelte';

	let formContentData = $page.data.formData.results[0].data;

	let section1: HTMLFieldSetElement;
	let section2: HTMLFieldSetElement;
	let formTitle: HTMLHeadingElement;
	let formEl: HTMLFormElement;

	const titles = {
		section1: formContentData.title_section_1,
		section2: formContentData.title_section_2
	};

	let nameInput = '';
	let emailInput = '';
	let phoneInput = '';
	let messageInput = '';

	let nameIsValid = false;
	let emailIsValid = false;
	let phoneIsValid = true;
	let messageIsValid = false;
	let formSent = false;

	$: nameIsValid = nameInput.trim().length >= 6 && nameInput.trim().split(/\s+/).length >= 2;
	$: emailIsValid = /^\S+@\S+\.\S+$/.test(emailInput);
	$: phoneIsValid = phoneInput.trim() === '' || /^\+?[0-9\s.-]{7,15}$/.test(phoneInput);
	$: messageIsValid = messageInput.trim().split(/\s+/).filter(Boolean).length >= 5;

	onMount(() => {
		gsap.set(section2, { autoAlpha: 0, display: 'none' });
	});

	$: if (formSent) {
		tick().then(() => {
			gsap.fromTo(
				'.form-success-overlay',
				{ autoAlpha: 0, scale: 0.9 },
				{ autoAlpha: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
			);
		});
	}

	function goToSection2() {
		if (!validateFormStep1(formEl)) return;

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

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!validateFormStep2(formEl)) return;

		const formData = new FormData(formEl);
		const res = await fetch('/api/contact', {
			method: 'POST',
			body: formData
		});

		if (res.ok) {
			formSent = true;
			formEl.reset();
			goToSection1();

			setTimeout(() => {
				formSent = false;
			}, 30000); // Reset after 30 seconds
		} else {
			const err = await res.json();
			alert('❌ Erreur : ' + (err.error || 'Veuillez réessayer.'));
		}
	}
</script>

<div
	class="relative p-4 bg-[#ffffffa6] backdrop-blur-2xl rounded-2xl h-auto w-full my-5 border-2 border-green-sansfiltre shadow"
>
	<img
		class="absolute inset-0 z-0 object-contain opacity-10 pointer-events-none"
		src="./img/SF_Telephone_noir.png"
		alt="Phone with cups illustration"
	/>

	<form
		bind:this={formEl}
		on:submit|preventDefault={handleSubmit}
		class="max-w-2xl mx-auto z-20 relative"
	>
		<h2
			bind:this={formTitle}
			class="text-3xl md:text-4xl lg:text-5xl py-10 font-bold text-green-sansfiltre text-center px-4 uppercase tracking-wide"
		>
			Quels sont vos informations de contactes
		</h2>

		<!-- Section 1 -->
		<fieldset bind:this={section1} class="space-y-4">
			<input
				name="name"
				bind:value={nameInput}
				placeholder={formContentData.full_name_input[0].input_title}
				class="w-full p-3 border-2 border-green-sansfiltre rounded"
			/>
			<input
				name="email"
				bind:value={emailInput}
				placeholder={formContentData.email_input[0].input_title}
				class="w-full p-3 border-2 border-green-sansfiltre rounded"
			/>
			<input
				name="phone"
				bind:value={phoneInput}
				placeholder={formContentData.phone_input[0].input_title}
				class="w-full p-3 border-2 border-green-sansfiltre rounded"
			/>

			<ul class="text-sm mt-2 space-y-1 pl-6">
				<li class="flex items-center gap-2">
					<span class={`w-3 h-3 rounded-full ${nameIsValid ? 'bg-green-600' : 'bg-red-300'}`}
					></span>
					{formContentData.full_name_input[0].input_request}
				</li>
				<li class="flex items-center gap-2">
					<span class={`w-3 h-3 rounded-full ${emailIsValid ? 'bg-green-600' : 'bg-red-300'}`}
					></span>
					{formContentData.email_input[0].input_request}
				</li>
				<li class="flex items-center gap-2">
					<span class={`w-3 h-3 rounded-full ${phoneIsValid ? 'bg-green-600' : 'bg-red-300'}`}
					></span>
					{formContentData.phone_input[0].input_request}
				</li>
			</ul>

			<div class="flex justify-end">
				<AnimatedBtn on:click={goToSection2} text="Suivant" type="button" color="#054236" />
			</div>
		</fieldset>

		<!-- Section 2 -->
		<fieldset bind:this={section2} class="space-y-4">
			<textarea
				name="message"
				bind:value={messageInput}
				rows="6"
				placeholder={formContentData.message_input[0].input_title}
				class="w-full p-3 border-2 border-green-sansfiltre rounded resize-none"
			></textarea>

			<ul class="text-sm mt-2 space-y-1 pl-6">
				<li class="flex items-center gap-2">
					<span class={`w-3 h-3 rounded-full ${messageIsValid ? 'bg-green-600' : 'bg-red-300'}`}
					></span>
					{formContentData.message_input[0].input_request}
				</li>
			</ul>

			<div class="flex justify-between">
				<AnimatedBtn on:click={goToSection1} text="Retour" type="button" color="#ec4899" />
				<AnimatedBtn type="submit" text="Envoyer" color="#054236" />
			</div>
		</fieldset>
	</form>

	{#if formSent}
		<div
			class="form-success-overlay absolute inset-0 z-50 bg-white/60 backdrop-blur-lg flex items-center justify-center rounded-2xl transition-opacity duration-500"
		>
			<PrismicImage
				field={formContentData.logo}
				class="w-40 h-40 object-contain opacity-90"
			/>
		</div>
	{/if}
</div>
