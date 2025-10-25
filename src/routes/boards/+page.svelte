<script lang="ts">
	import type { TabItem } from '../../interface/TabItems.svelte';
	import Tabs from '$lib/Tabs.svelte';
	import Message from '$lib/Message.svelte';
	import Table from '$lib/Table.svelte';

	const tabItems: TabItem[] = [
		{
			title: 'Backlog',
			value: 1,
			content: Message
		},
		{
			title: 'Table',
			value: 2,
			content: Table
		},
		{
			title: 'Kanban Board',
			value: 3,
			content: Message
		},
		{
			title: 'List',
			value: 4,
			content: Message
		}
	];
</script>

<div>
	<Tabs {tabItems} />
</div>
