<script lang="ts">
	import '../app.css';

	let isDrawerOpen = false;

	function drawerToggle() {
		isDrawerOpen = !isDrawerOpen;
	}
</script>

<div class="flex-1 drawer">
	<input type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} />
	<div class="drawer-content">
		<div class="flex flex-col w-full h-screen">
			<div class="shadow-md navbar bg-base-100">
				<div class="flex-none">
					<button class="btn btn-square btn-ghost" on:click={drawerToggle}>
						<i class="text-xl fa-solid fa-bars" />
					</button>
				</div>
				<div class="flex-1">
					<a class="text-xl normal-case btn btn-ghost" href="/">tynage</a>
				</div>
				<div class="flex-none">
					<button class="btn btn-square btn-ghost">
						<i class="text-xl fa-brands fa-github" />
					</button>
					<button class="btn btn-square btn-ghost">
						<i class="text-xl fa-regular fa-circle-question" />
					</button>
				</div>
			</div>
			<slot />
		</div>
	</div>
	<div class="drawer-side">
		<button class="cursor-default drawer-overlay" on:click={drawerToggle} />
		<ul class="p-4 menu w-80 bg-base-100 text-base-content">
			<li>
				<a href="/posts" on:click={drawerToggle}>Posts</a>
			</li>
		</ul>
	</div>
</div>
