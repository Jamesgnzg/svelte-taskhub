<script lang="ts">
	import type { TabItem } from '../../interface/TabItems.svelte';
	import Tabs from '$lib/Tabs.svelte';
	import Message from '$lib/Message.svelte';
	import Table from '$lib/Table.svelte';

	const tabItems: TabItem[] = [
		{
			title: 'Tab1',
			value: 1,
			content: Message
		},
		{
			title: 'TabCont',
			value: 2,
			content: Table
		}
	];
</script>

<div>
	<Tabs {tabItems} />
</div>
