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

<div class="grid h-screen grid-rows-[auto_1fr_auto] bg-green-50">
	<Header />
	<div class="grid w-full grid-cols-2 pl-3 md:grid-cols-[auto_1fr]">
		<Sidebar />
		<main class="-ml-1 space-y-4 rounded-lg bg-white shadow-2xl">
			{@render children?.()}
		</main>
	</div>
</div>
