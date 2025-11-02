<script>
	export let open = false;
	import { ChevronUp, ChevronDown } from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	const handleClick = () => (open = !open);
</script>

<div class="hover:cursor-pointer">
	<button class="w-full cursor-pointer rounded-md p-2 hover:bg-emerald-100" on:click={handleClick}>
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
