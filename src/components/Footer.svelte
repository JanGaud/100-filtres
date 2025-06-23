<script lang="ts">
	import Icon from '@iconify/svelte';
	let year = new Date().getFullYear();
</script>

<!-- Footer.svelte -->
<footer class="py-4 w-full md:w-[70%] md:ml-auto px-4">
	<div class="flex flex-col gap-14 justify-between items-center">
		<!-- Social Icons -->
		<div class="flex space-x-4 border-2 px-4 py-2 rounded-2xl">
			<a href="/" class="hover:text-blue-600" aria-label="Facebook">
				<Icon icon="et:facebook" class="w-10 h-10" />
			</a>
			<a href="/" class="hover:text-pink-600" aria-label="Instagram">
				<Icon icon="streamline-logos:instagram-logo-2" class="w-10 h-10" />
			</a>
		</div>

		<!-- Copyright -->
		<div class="text-sm text-green-sansfiltre mb-4 sm:mb-0">
			© {year} SansFiltre. Tout droits réservés.
		</div>
	</div>
</footer>
