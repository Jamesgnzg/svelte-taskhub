<script lang="ts">
	import { BOARDS } from '../routes/paths';
	import {
		ChevronRight,
		ChevronLeft,
		ChevronUp,
		ChevronDown,
		CircleArrowUp,
		CircleArrowDown
	} from '@lucide/svelte';
	import { fade, slide } from 'svelte/transition';
	import Accordion from './Accordion.svelte';

	const iconSize: number = 15;
	let sideBarShown: Boolean = $state(true);
	const toggleDisplay: 'hidden' | 'block' = $derived(sideBarShown ? 'hidden' : 'block');
	const sideBarNavigation = [
		{
			title: 'Favorites',
			navigations: [{ navigationLabel: 'Tasks', route: BOARDS, icon: ChevronUp }],
			listDesign: favoritesHeader
		},
		{
			title: "Scout's team",
			navigations: [{ navigationLabel: 'Tasks', route: BOARDS, icon: ChevronUp }],
			listDesign: teamsHeader
		}
	];
</script>

{#snippet favoritesHeader(title: string, open: boolean)}
	<div class="flex w-full gap-1" transition:fade={{ duration: 100 }}>
		<p class="text-sm font-bold text-black">{title}</p>
		{#if open}
			<ChevronUp class="mt-1" size={iconSize} />
		{:else}
			<ChevronDown class="mt-1" size={iconSize} />
		{/if}
	</div>
{/snippet}

{#snippet teamsHeader(team: string, open: boolean)}
	<div class="flex w-full gap-1" transition:fade={{ duration: 100 }}>
		{#if open}
			<CircleArrowUp class="mt-1" size={iconSize} />
		{:else}
			<CircleArrowDown class="mt-1" size={iconSize} />
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
				{#each sideBarNavigation as nav}
					<Accordion header={nav.listDesign} title={nav.title}>
						<div class="ml-5 flex flex-col">
							{#each nav.navigations as navigation}
								<div class="flex gap-1">
									<navigation.icon class="mt-1.5" size={iconSize} />
									<a href={navigation.route}>{navigation.navigationLabel}</a>
								</div>
							{/each}
						</div>
					</Accordion>
				{/each}
			</div>
		{/if}
	</div>
</aside>
