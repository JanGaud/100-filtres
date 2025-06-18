<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import AnimatedBtn from './AnimatedBtn.svelte';
	import { validateFormStep1, validateFormStep2 } from '../utils/formValidator';

	let section1: HTMLFieldSetElement;
	let section2: HTMLFieldSetElement;
	let formTitle: HTMLHeadingElement;
	let formEl: HTMLFormElement;

	const titles = {
		section1: 'Quels sont vos informations de contactes',
		section2: 'Que voulez-vous nous dire?'
	};

	let nameInput = '';
	let emailInput = '';
	let phoneInput = '';
	let messageInput = '';

	let nameIsValid = false;
	let emailIsValid = false;
	let phoneIsValid = true;
	let messageIsValid = false;

	$: nameIsValid = nameInput.trim().length >= 6 && nameInput.trim().split(/\s+/).length >= 2;
	$: emailIsValid = /^\S+@\S+\.\S+$/.test(emailInput);
	$: phoneIsValid = phoneInput.trim() === '' || /^\+?[0-9\s.-]{7,15}$/.test(phoneInput);
	$: messageIsValid = messageInput.trim().split(/\s+/).filter(Boolean).length >= 5;

	onMount(() => {
		gsap.set(section2, { autoAlpha: 0, display: 'none' });
	});

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

	function handleSubmit(e: Event) {
		if (!validateFormStep2(formEl)) {
			e.preventDefault();
		}
	}
</script>

<div class="relative p-4 bg-[#ffffffa6] backdrop-blur-2xl rounded-2xl h-auto w-full my-10 border-2 border-green-sansfiltre shadow">
	<img class="absolute inset-0 z-0 object-contain opacity-10 pointer-events-none" src="./img/SF_Telephone_noir.png" alt="Phone with cups illustration" />

	<form bind:this={formEl} on:submit|preventDefault={handleSubmit} class="max-w-2xl mx-auto z-20">
		<h2 bind:this={formTitle} class="text-3xl md:text-4xl lg:text-5xl py-10 font-bold text-green-sansfiltre text-center px-4 uppercase tracking-wide">
			Quels sont vos informations de contactes
		</h2>

		<!-- Section 1 -->
		<fieldset bind:this={section1} class="space-y-4">
			<input name="name" bind:value={nameInput} placeholder="Nom complet" class="w-full p-3 border-2 border-green-sansfiltre rounded" />
			<input name="email" bind:value={emailInput} placeholder="Adresse e-mail" class="w-full p-3 border-2 border-green-sansfiltre rounded" />
			<input name="phone" bind:value={phoneInput} placeholder="Numéro de téléphone" class="w-full p-3 border-2 border-green-sansfiltre rounded" />

			<ul class="text-sm mt-2 space-y-1 pl-6">
				<li class="flex items-center gap-2">
					<span class={`w-3 h-3 rounded-full ${nameIsValid ? 'bg-green-600' : 'bg-red-300'}`}></span>
					Nom complet (2 mots, min. 6 lettres)
				</li>
				<li class="flex items-center gap-2">
					<span class={`w-3 h-3 rounded-full ${emailIsValid ? 'bg-green-600' : 'bg-red-300'}`}></span>
					Adresse e-mail valide
				</li>
				<li class="flex items-center gap-2">
					<span class={`w-3 h-3 rounded-full ${phoneIsValid ? 'bg-green-600' : 'bg-red-300'}`}></span>
					Numéro de téléphone (optionnel)
				</li>
			</ul>

			<div class="flex justify-end">
				<AnimatedBtn on:click={goToSection2} text="Suivant" type="button" color="#054236" />
			</div>
		</fieldset>

		<!-- Section 2 -->
		<fieldset bind:this={section2} class="space-y-4">
			<textarea name="message" bind:value={messageInput} rows="6" placeholder="Votre message" class="w-full p-3 border-2 border-green-sansfiltre rounded resize-none"></textarea>

			<ul class="text-sm mt-2 space-y-1 pl-6">
				<li class="flex items-center gap-2">
					<span class={`w-3 h-3 rounded-full ${messageIsValid ? 'bg-green-600' : 'bg-red-300'}`}></span>
					Message d’au moins 5 mots
				</li>
			</ul>

			<div class="flex justify-between">
				<AnimatedBtn on:click={goToSection1} text="Retour" type="button" color="#ec4899" />
				<AnimatedBtn type="submit" text="Envoyer" color="#054236" />
			</div>
		</fieldset>
	</form>
</div>
