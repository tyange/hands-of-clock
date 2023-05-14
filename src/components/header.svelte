<script lang="ts">
	export let drawerToggle: () => void;
</script>

<div class="shadow-md navbar bg-base-100">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost" on:click={drawerToggle}>
			<i class="text-xl fa-solid fa-bars" />
		</button>
	</div>
	<div class="flex-1">
		<a class="text-xl normal-case btn btn-ghost" href="/">시곗바늘</a>
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
