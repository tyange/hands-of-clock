<script lang="ts">
	export let drawerToggle: () => void;
	export let categories: string[];
</script>

<div class="drawer-side">
	<button class="cursor-default drawer-overlay" on:click={drawerToggle} />
	<ul class="p-4 menu w-80 bg-base-100 text-base-content">
		{#each categories as category}
			<li>
				<a href={`/posts/${category}`} on:click={drawerToggle}>
					{category}
				</a>
			</li>
		{/each}
	</ul>
</div>
