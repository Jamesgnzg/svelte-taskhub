<script lang="ts">
	import type { TabItem } from '../interface/TabItems.svelte';
	import type { Component } from 'svelte';

	const { tabItems }: { tabItems: TabItem[] } = $props();
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

<div class="p-5">
	<ul class="flex list-none flex-wrap rounded-md border-b border-[#dee2e6] pl-0">
		{#each tabItems as items}
			<li
				class={activeTab === items.value
					? `-mb-px rounded-md border border-[#dee2e6] border-b-white bg-white text-[#495057]`
					: ''}
			>
				<!-- svelte-ignore a11y_click_events_have_key_events -->
				<span
					class={`block cursor-pointer rounded-md border border-transparent p-4 ${activeTab == items.value && `hover:border-[#dee2e6] hover:border-b-white`}`}
					onclick={setActiveTab(items.value)}
					role="button"
					tabindex={items.value}
					aria-label={items.title}
				>
					{items.title}
				</span>
			</li>
		{/each}
	</ul>
	<div class="min-h-screen p-5">
		<ActiveContent />
	</div>
</div>
