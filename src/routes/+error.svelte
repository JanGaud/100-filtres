<script lang="ts">
	import { page } from '$app/stores';

	$: status = $page.status;
	$: err = $page.error as { message?: string } | null;
	$: message = err?.message ?? 'Une erreur est survenue';

	const errorMap: Record<number, { title: string; subtitle: string }> = {
		404: {
			title: 'Page introuvable',
			subtitle: "Oups… cette page n'existe pas."
		},
		403: {
			title: 'Accès refusé',
			subtitle: "Vous n’avez pas la permission d’accéder à cette page."
		},
		401: {
			title: 'Non autorisé',
			subtitle: "Veuillez vous connecter pour continuer."
		},
		500: {
			title: 'Erreur serveur',
			subtitle: "Quelque chose s’est mal passé de notre côté."
		}
	};

	$: current = errorMap[status] ?? {
		title: 'Erreur',
		subtitle: message
	};

	// ⚠️ static files are served WITHOUT /static in the URL
	const videoSrc = '/video/IMG_9278.mp4';
</script>

<section class="min-h-screen flex items-center justify-center bg-pink-sansfiltre px-6 py-12">
	<div class="w-full max-w-3xl text-center space-y-8">

		<!-- VIDEO CARD -->
		<div
			class="
				relative mx-auto
				w-full max-w-2xl
				aspect-[9/16]
				sm:aspect-[4/5] 
				md:aspect-[16/9] 
				max-h-[80vh]
				rounded-3xl
				overflow-hidden
				shadow-2xl
				ring-1 ring-green-sansfiltre/20
			"
		>
			<!-- Video -->
			<video
				class="absolute inset-0 w-full h-full object-cover"
				src={videoSrc}
				autoplay
				loop
				muted
				playsinline
				preload="metadata"
			/>

			<!-- Overlay -->
			<div class="absolute inset-0 bg-black/35 backdrop-blur-[1px]" />

			<!-- Text -->
			<div class="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center">
				<p class="text-xs uppercase tracking-widest text-pink-sansfiltre/90">
					Erreur {status}
				</p>

				<h1 class="mt-3 text-3xl sm:text-4xl md:text-5xl font-lazy-dog text-pink-sansfiltre drop-shadow">
					{current.title}
				</h1>

				<p class="mt-3 text-pink-sansfiltre/90 text-base md:text-lg max-w-md">
					{current.subtitle}
				</p>
			</div>
		</div>

		<!-- ACTION -->
		<a
			href="/"
			class="inline-block px-6 py-3 rounded-full bg-green-sansfiltre text-pink-sansfiltre hover:opacity-90 transition"
		>
			Retour à l’accueil
		</a>

	</div>
</section>
