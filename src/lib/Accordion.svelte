<script lang="ts">
	import type { Snippet } from 'svelte';
	import { slide } from 'svelte/transition';

	const {
		header,
		children,
		title
	}: {
		header: Snippet<[string, boolean]>;
		children: Function;
		title: string;
	} = $props();
	let open = $state(false);

	const handleToggle = () => (open = !open);
</script>

<div class="p-1">
	<button
		class="w-full rounded-md p-2 hover:cursor-pointer hover:bg-gray-200"
		onclick={handleToggle}
	>
		{@render header(title, open)}
	</button>
	{#if open}
		<div class="mt-3 p-2" transition:slide>
			{@render children()}
		</div>
	{/if}
</div>
