<script lang="ts">
	import { ChevronRight, ChevronLeft } from '@lucide/svelte';
	import { slide } from 'svelte/transition';
	import Accordion from './Accordion.svelte';

	const iconSize: number = 15;
	let sideBarShown: Boolean = $state(true);
	const toggleDisplay: 'hidden' | 'block' = $derived(sideBarShown ? 'hidden' : 'block');
</script>

<aside class="group relative p-3">
	<button
		class="absolute right-0 -mr-2 rounded-full bg-gray-300 p-1 group-hover:block hover:bg-gray-200 {toggleDisplay}"
		onclick={() => (sideBarShown = !sideBarShown)}
	>
		{#if sideBarShown}
			<ChevronLeft size={iconSize} />
		{:else}
			<ChevronRight size={iconSize} />
		{/if}
	</button>
	<div class="max-w-3xs">
		{#if sideBarShown}
			<div
				class="h-screen min-w-3xs rounded-l-md p-3 opacity-75"
				transition:slide={{ axis: 'x', duration: 500 }}
			>
				<Accordion>
					<p class="text-sm font-bold text-black" slot="name">Favorites</p>
				</Accordion>
			</div>
		{/if}
	</div>
</aside>
