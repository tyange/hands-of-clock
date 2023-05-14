<script lang="ts">
	import '../app.css';
	import Footer from '../components/footer.svelte';
	import Header from '../components/header.svelte';

	let isDrawerOpen = false;

	function drawerToggle() {
		isDrawerOpen = !isDrawerOpen;
	}

	export let data;
</script>

<div class="flex-1 drawer">
	<input type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} />
	<div class="drawer-content">
		<div class="relative flex flex-col w-full h-screen">
			<Header {drawerToggle} />
			<slot />
			<Footer />
		</div>
	</div>
	<div class="drawer-side">
		<button class="cursor-default drawer-overlay" on:click={drawerToggle} />
		<ul class="p-4 menu w-80 bg-base-100 text-base-content">
			{#each data.categories as category}
				<li>
					<a href={`/posts/${category}`} on:click={drawerToggle}>
						{category}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
