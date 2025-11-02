<script lang="ts">
	import type { TabItem } from '../interface/TabItems.svelte';
	import type { Component } from 'svelte';

	const { tabItems }: { tabItems: TabItem[] } = $props();
	const activeTabStyle = 'border-b-2 border-orange-500 text-orange-500';
	const inactiveTabStyle = 'text-gray-500 hover:border-b-2 hover:border-gray-400 hover:bg-gray-200';
	let activeTab: Number = $state(1);
	let ActiveContent: Component = $state(tabItems[0].content);

	const setActiveTab = (tabValue: number) => () => {
		const selectedTab: TabItem | undefined = tabItems.find((item: TabItem) => {
			return item.value === tabValue;
		});

		activeTab = selectedTab?.value ?? 0;
		ActiveContent = selectedTab?.content ?? tabItems[0].content;
	};
</script>

<div class="p-1">
	<ul class="flex list-none flex-wrap gap-2 border-b-2 border-[#dee2e6]">
		{#each tabItems as items}
			<li
				class={`-mb-px rounded-t-md text-sm ${activeTab === items.value ? activeTabStyle : inactiveTabStyle}`}
			>
				<button
					class="block cursor-pointer p-3"
					onclick={setActiveTab(items.value)}
					tabindex={items.value}
					aria-label={items.title}
				>
					{items.title}
				</button>
			</li>
		{/each}
	</ul>
	<div class="min-h-screen p-5">
		<ActiveContent />
	</div>
</div>
