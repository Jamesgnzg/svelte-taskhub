<script lang="ts">
	import {
		ChevronUp,
		ChevronDown,
		ChevronRight,
		ChevronLeft,
		CircleArrowUp,
		CircleArrowDown
	} from '@lucide/svelte';
	import { fade, slide } from 'svelte/transition';
	import Accordion from './Accordion.svelte';

	const iconSize: number = 15;
	let sideBarShown: Boolean = $state(true);
	const toggleDisplay: 'hidden' | 'block' = $derived(sideBarShown ? 'hidden' : 'block');
</script>

{#snippet favoritesHeader(title: string, open: boolean)}
	<div class="flex w-full gap-3" transition:fade={{ duration: 100 }}>
		<p class="text-sm font-bold text-black">{title}</p>
		{#if open}
			<ChevronUp />
		{:else}
			<ChevronDown />
		{/if}
	</div>
{/snippet}

{#snippet teamsHeader(team: string, open: boolean)}
	<div class="flex w-full gap-3" transition:fade={{ duration: 100 }}>
		{#if open}
			<CircleArrowUp />
		{:else}
			<CircleArrowDown />
		{/if}
		<p class="text-sm font-bold text-black">{team}</p>
	</div>
{/snippet}
<aside class="group relative p-2">
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
				<Accordion header={favoritesHeader} title="Favorites">
					<div>Test</div>
				</Accordion>
				<Accordion header={teamsHeader} title="Scout's Team">
					<div>Test</div>
				</Accordion>
			</div>
		{/if}
	</div>
</aside>
