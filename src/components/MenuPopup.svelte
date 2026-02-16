<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	import { fly } from 'svelte/transition';

	export let selectedMenu: any;

	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let dialogEl: HTMLElement;

	const handleKeydown = (e: KeyboardEvent) => {
		if (e.key === 'Escape') close();
	};

	onMount(() => {
		dialogEl?.focus();
		window.addEventListener('keydown', handleKeydown);
		document.documentElement.classList.add('overflow-hidden');
	});

	onDestroy(() => {
		window.removeEventListener('keydown', handleKeydown);
		document.documentElement.classList.remove('overflow-hidden');
	});
</script>

<div class="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Menu">
	<!-- Backdrop sits BEHIND the dialog -->
	<button
		type="button"
		class="absolute inset-0 bg-green-sansfiltre/40 backdrop-blur-md"
		aria-label="Fermer le menu"
		on:click={close}
	/>

	<!-- Layout wrapper (no click handlers needed) -->
	<div class="relative h-full w-full flex items-end md:items-center justify-center p-0 md:p-6">
		<!-- Dialog sheet (above backdrop) -->
		<section
			bind:this={dialogEl}
			tabindex="-1"
			role="document"
			aria-label="Fenêtre modale du menu"
			transition:fly={{ y: 24, duration: 220 }}
			class="
				relative z-10
				w-full md:max-w-5xl
				h-[92vh] md:h-[86vh]
				rounded-t-3xl md:rounded-3xl
				bg-pink-sansfiltre/90 backdrop-blur-2xl
				ring-1 ring-white/25
				shadow-2xl
				overflow-hidden
				flex flex-col
				outline-none
			"
		>
			<header class="shrink-0 border-b border-white/20 bg-pink-sansfiltre/70 backdrop-blur-2xl">
				<div class="px-5 md:px-8 py-4 flex items-center justify-center gap-4">
					<div class="flex-1 min-w-0">
						<h2 class="text-2xl md:text-4xl font-lazy-dog uppercase leading-tight truncate text-green-sansfiltre">
							{selectedMenu?.data?.menu_title}
						</h2>
					</div>

					<button
						type="button"
						class="shrink-0 rounded-full p-2 hover:bg-white/10 active:bg-white/15 transition"
						on:click={close}
						aria-label="Fermer le menu"
					>
						<Icon icon="ant-design:close-circle-outlined" class="w-10 h-10 text-green-sansfiltre" />
					</button>
				</div>
			</header>

			<div class="flex-1 overflow-y-auto px-5 md:px-8 py-6">
				<ul class="space-y-4 md:space-y-5 max-w-4xl mx-auto">
					{#each selectedMenu?.data?.menu_item ?? [] as item}
						<li class="rounded-2xl bg-white/75 ring-1 ring-white/25 p-5 md:p-6">
							<h3 class="text-xl md:text-2xl text-green-sansfiltre font-semibold leading-snug">
								{item.item_title}
							</h3>

							{#if item.item_description}
								<p class="text-sm md:text-base text-green-sansfiltre/80 mt-2 leading-relaxed">
									{item.item_description}
								</p>
							{/if}

							{#if item.price_table?.body?.rows?.length}
								<div class="mt-4 pt-4 border-t border-green-sansfiltre/20">
									<ul class="space-y-2 text-sm md:text-base text-green-sansfiltre">
										{#each item.price_table.body.rows as row}
											<li class="flex flex-wrap gap-x-6 gap-y-1 items-baseline">
												{#each row.cells as cell}
													<span>{cell.content[0]?.text}</span>
												{/each}
											</li>
										{/each}
									</ul>
								</div>
							{/if}
						</li>
					{/each}
				</ul>

				<div class="h-10"></div>
			</div>
		</section>
	</div>
</div>
