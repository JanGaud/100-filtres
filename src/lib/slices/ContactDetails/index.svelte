<script lang="ts">
	import { usePopIn } from '$lib/actions/usePopIn';
	import type { Content } from '@prismicio/client';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import Icon from '@iconify/svelte';
	import ContactForm from '../../../components/ContactForm.svelte';

	export let slice: Content.ContactDetailsSlice;

	const settings = get(page).data.settings.data;
	const { latitude, longitude } = settings.company_location;
	const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;
</script>

<section
	class="my-20 min-h-screen flex flex-col gap-10"
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
>
	<h2
		class="text-3xl md:text-4xl lg:text-5xl font-bold text-green-sansfiltre text-center px-4 uppercase tracking-wide"
	>
		{slice.primary.title}
	</h2>
	<p class="text-center text-lg text-gray-700 mb-10 px-6 max-w-3xl mx-auto">
		{slice.primary.desciption}
	</p>

	<!-- GRID: INFO + MAP -->
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 relative">
		<!-- LEFT: Info + Socials -->
		<div class="flex flex-col gap-4">
			<div
				use:usePopIn
				class="rounded-xl flex flex-col gap-4 justify-between p-4 bg-[#ffffffa6] backdrop-blur-2xl shadow"
			>
				{#if settings.company_adress}
					<p class="flex items-center gap-2">
						<Icon icon="iconamoon:location-thin" class="w-10 h-10" />
						{settings.company_adress}
					</p>
				{/if}

				{#if settings.company_phone}
					<a href="tel:{settings.company_phone}" class="flex items-center gap-2">
						<Icon icon="fluent:phone-32-light" class="w-10 h-10" />
						{settings.company_phone}
					</a>
				{/if}

				{#if settings.company_email}
					<a href="mailto:{settings.company_email}" class="flex items-center gap-2">
						<Icon icon="material-symbols-light:alternate-email-rounded" class="w-10 h-10" />
						{settings.company_email}
					</a>
				{/if}
			</div>

			<div
				use:usePopIn
				class="bg-green-sansfiltre rounded-xl p-4 shadow"
			>
				<h3 class="text-center text-pink-sansfiltre text-2xl uppercase tracking-wider mb-4">
					Suivez-nous
				</h3>
				<div class="flex items-center justify-center gap-6">
					{#each settings.social_media as social}
						<a
							href={social.social_media_link.url}
							target={social.social_media_link.target}
							rel="noopener noreferrer"
							class="text-white text-3xl hover:scale-110 transition-transform"
							aria-label={social.social_media_link.text}
						>
							<Icon icon={social.icon} class="w-12 h-12" />
						</a>
					{/each}
				</div>
			</div>
		</div>

		<!-- RIGHT: MAP -->
		<div
			use:usePopIn
			class="rounded-2xl overflow-hidden shadow min-h-[400px] w-full h-full"
		>
			<!-- svelte-ignore a11y-missing-attribute -->
			<iframe
				class="w-full h-full"
				loading="lazy"
				allowfullscreen
				referrerpolicy="no-referrer-when-downgrade"
				src={mapUrl}
			></iframe>
		</div>
	</div>

	<!-- CONTACT FORM BELOW -->
	<div class="z-10 relative">
		<ContactForm />
	</div>
</section>
