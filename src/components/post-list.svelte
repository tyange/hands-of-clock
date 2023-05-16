<script lang="ts">
	import type { Post } from '$lib/types';

	export let data: { posts: Post[][] };

	let pageNum = 0;

	const pageNums = data.posts.length % 4;

	const setPage = (num: number) => {
		pageNum = num;
	};
</script>

<div class="relative flex flex-col items-center justify-center flex-1 min-h-full gap-10 mb-10">
	<section class="w-full sm:w-4/6">
		<ul class="p-5">
			{#each data.posts[pageNum] as post, index}
				<li class="flex flex-col transition-all rounded-md hover:bg-gray-100">
					<a
						href={`/posts/${post.category}/${post.slug}`}
						class="flex flex-col w-full h-full gap-10 p-3"
					>
						<div class="flex items-center justify-between w-full">
							<span class="text-xl font-semibold sm:text-2xl">{post.title}</span>
							<p class="text-xs min-w-fit">{post.date}</p>
						</div>
						<p class="text-sm sm:text-md">{post.description}</p>
					</a>
				</li>
				{#if index !== data.posts[pageNum].length - 1}
					<div class="divider" />
				{/if}
			{/each}
		</ul>
	</section>
	<div class="absolute bottom-0">
		<div class="btn-group">
			{#each [...Array(pageNums).keys()] as pageNum}
				<button class="btn btn-sm" on:click={() => setPage(pageNum)}>{pageNum + 1}</button>
			{/each}
		</div>
	</div>
</div>
