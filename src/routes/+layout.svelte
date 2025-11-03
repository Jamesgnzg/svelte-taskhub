<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/Header.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="grid h-screen grid-rows-[auto_1fr_auto] bg-emerald-50">
	<Header />
	<div
		class="mt-1 ml-3 grid w-full grid-cols-2 gap-0.5 rounded-lg bg-white md:grid-cols-[auto_1fr]"
	>
		<Sidebar />
		<main class="space-y-4 rounded-lg bg-white shadow-[-5px_-5px_20px_0px_rgba(226,240,231,1)]">
			{@render children?.()}
		</main>
	</div>
</div>
