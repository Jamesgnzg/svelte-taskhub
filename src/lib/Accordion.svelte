<script>
	export let open = false;
	import { ChevronUp, ChevronDown } from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	const handleClick = () => (open = !open);
</script>

<div class="p-1">
	<button
		class="w-full rounded-md p-2 hover:cursor-pointer hover:bg-gray-200"
		on:click={handleClick}
	>
		<div class="flex w-full">
			<div class="mr-1">
				<slot name="name">
					<p>Name</p>
				</slot>
			</div>
			{#if open}
				<ChevronUp />
			{:else}
				<ChevronDown />
			{/if}
		</div>
	</button>
	{#if open}
		<div class="mt-3 p-2" transition:slide>
			<slot name="sublinks">
				<p>No available sublinks</p>
			</slot>
		</div>
	{/if}
</div>
