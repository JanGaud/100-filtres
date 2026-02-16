<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

	let year = new Date().getFullYear();

	// reactive
	$: settings = $page.data?.settings?.data;

	// helper: get plain text out of Prismic rich text cell
	function rtText(cell: any): string {
		return cell?.content?.[0]?.text ?? '';
	}

	// helper: normalize URLs (your JSON has "Facebook.com" etc.)
	function normalizeUrl(url: string): string {
		if (!url) return '#';
		return url.startsWith('http://') || url.startsWith('https://') ? url : `https://${url}`;
	}

	$: hoursRows = settings?.opening_hours?.body?.rows ?? [];

	$: socials = settings?.social_media ?? [];
</script>

<footer class="w-full md:w-[70%] md:ml-auto px-4 bg-green-sansfiltre text-white rounded-t-4xl">
	<div class="py-4 flex flex-col gap-8">

		<!-- Top row -->
		<div class="w-full flex flex-col md:flex-row gap-8">

			<!-- Schedule -->
			<div class="w-full md:w-2/3">
				<h3 class="font-semibold text-sm uppercase tracking-wide mb-4 text-pink-sansfiltre">
					Horaire
				</h3>

				{#if hoursRows.length}
					<ul class="space-y-2 text-sm">
						{#each hoursRows as row, i}
							<li class={`flex justify-between ${i < hoursRows.length - 1 ? 'border-b border-pink-sansfiltre/20 pb-1' : ''}`}>
								<span>{rtText(row.cells?.[0])}</span>
								<span>{rtText(row.cells?.[1])}</span>
							</li>
						{/each}
					</ul>
				{:else}
					<p class="text-sm text-white/80">Horaire à venir.</p>
				{/if}
			</div>

			<!-- Contact + Social -->
			<div class="w-full md:w-1/3 flex flex-col md:items-end items-start gap-6">
 				<div class="w-full md:text-right">
					<h3 class="font-semibold text-sm uppercase tracking-wide mb-3 text-pink-sansfiltre">
						Suivez-nous
					</h3>

					<div class="flex space-x-4 md:justify-end">
						{#each socials as s}
							<a
								href={normalizeUrl(s?.social_media_link?.url)}
								target={s?.social_media_link?.target ?? '_blank'}
								rel="noopener noreferrer"
								aria-label={s?.social_media_link?.text ?? 'Réseau social'}
								class="hover:text-pink-sansfiltre transition"
							>
								<Icon icon={s?.icon} class="w-8 h-8" />
							</a>
						{/each}
					</div>
				</div>
			</div>

		</div>

		<!-- Divider -->
		<hr class="border-pink-sansfiltre/20" />

		<!-- Bottom -->
		<div class="text-xs text-center text-white/90">
			© {year} {settings?.company_name ?? 'SansFiltre'}. Tous droits réservés.
		</div>

	</div>
</footer>
