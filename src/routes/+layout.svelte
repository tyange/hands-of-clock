<script lang="ts">
	import '../app.css';
	import Drawer from '../components/drawer.svelte';
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
	<Drawer {drawerToggle} categories={data.categories} />
</div>
