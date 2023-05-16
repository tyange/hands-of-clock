<script lang="ts">
	export let drawerToggle: () => void;
	export let categories: string[];

	const categoryNameConvertor = (categoryName: string) => {
		switch (categoryName) {
			case 'hard-writing':
				return '힘들여 쓰지 않기';
			case 'long-long':
				return '구구절절 프로그래밍';
			case 'typing':
				return '타이핑 소리에 박자 넣기';
			default:
				return '-';
		}
	};
</script>

<div class="drawer-side">
	<button class="cursor-default drawer-overlay" on:click={drawerToggle} />
	<ul class="p-4 menu w-80 bg-base-100 text-base-content">
		{#each categories as category}
			<li>
				<a href={`/posts/${category}`} on:click={drawerToggle}>
					{categoryNameConvertor(category)}
				</a>
			</li>
		{/each}
	</ul>
</div>
