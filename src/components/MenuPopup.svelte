<script lang="ts">
	import Icon from '@iconify/svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	export let selectedMenu;
	const dispatch = createEventDispatcher();
	const close = () => dispatch('close');

	let printableRef: HTMLElement;
</script>

<!-- BACKDROP -->
<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div
	class="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
	role="dialog"
	tabindex="0"
	aria-modal="true"
	on:click={close}
	on:keydown={(e) => e.key === 'Escape' && close()}
>
	<!-- FULLSCREEN MODAL -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
	<section
		bind:this={printableRef}
		class="bg-pink-sansfiltre w-full h-full overflow-y-auto p-6 relative shadow-none rounded-none"
		on:click|stopPropagation
		role="document"
		aria-label="Fenêtre modale du menu"
		transition:fade
	>
		<!-- Close Button -->
		<button
			class="absolute top-4 right-4 text-xl close-button"
			on:click={close}
			aria-label="Fermer le menu"
		>
			<Icon
				icon="ant-design:close-circle-outlined"
				class="w-12 h-12 hover:text-red-600 active:text-red-600 transition-colors duration-500"
			/>
		</button>

		<!-- Menu Title -->
		<h2 class="text-3xl md:text-6xl uppercase mb-10 text-center">{selectedMenu.data.menu_title}</h2>

		<!-- Menu Items -->
		<ul class="space-y-6 max-w-4xl mx-auto text-center">
			{#each selectedMenu.data.menu_item as item}
				<li class="border-b pb-6">
					<h3 class="text-2xl text-green-sansfiltre font-semibold">{item.item_title}</h3>
					<p class="text-gray-600 mt-1">{item.item_description}</p>

					{#if item.price_table?.body?.rows?.length}
						<ul class="text-sm mt-3">
							{#each item.price_table.body.rows as row}
								<li class="flex flex-wrap justify-center gap-4 items-center text-center">
									{#each row.cells as cell}
										<span class="min-w-[80px] text-center">{cell.content[0]?.text}</span>
									{/each}
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</section>
</div>
