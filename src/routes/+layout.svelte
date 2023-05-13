<script lang="ts">
	import '../app.css';

	let isDrawerOpen = false;

	function drawerToggle() {
		isDrawerOpen = !isDrawerOpen;
	}
</script>

<div class="navbar bg-base-100">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost" on:click={drawerToggle}>
			<i class="fa-solid fa-bars text-xl" />
		</button>
	</div>
	<div class="flex-1">
		<a class="btn btn-ghost normal-case text-xl" href="/">tynage</a>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<i class="fa-brands fa-github text-xl" />
		</button>
		<button class="btn btn-square btn-ghost">
			<i class="fa-regular fa-circle-question text-xl" />
		</button>
	</div>
</div>
<div class="drawer">
	<input type="checkbox" class="drawer-toggle" bind:checked={isDrawerOpen} />
	<div class="drawer-content">
		<slot />
	</div>
	<div class="drawer-side">
		<label for="my-drawer" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100 text-base-content">
			<li>
				<a href="/posts" on:click={drawerToggle}>Posts</a>
			</li>
		</ul>
	</div>
</div>
