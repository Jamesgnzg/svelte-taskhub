<script>
	export let open = false;
	import { ChevronUp, ChevronDown } from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	const handleClick = () => (open = !open);
</script>

<div class="hover:cursor-pointer">
	<div class="flex w-full rounded-md p-2 hover:bg-green-100">
		<div class="mr-1">
			<slot name="name">
				<p>Name</p>
			</slot>
		</div>
		<button class="cursor-pointer" on:click={handleClick}>
			{#if open}
				<ChevronUp />
			{:else}
				<ChevronDown />
			{/if}
		</button>
	</div>
	{#if open}
		<div class="mt-3 p-2" transition:slide>
			<slot name="sublinks">
				<p>No available sublinks</p>
			</slot>
		</div>
	{/if}
</div>
