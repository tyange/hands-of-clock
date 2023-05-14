<script lang="ts">
	import type { Post } from '$lib/types';

	export let data: { posts: Post[] };
</script>

<div class="flex items-center justify-center h-full">
	<section class="w-full m-auto sm:w-4/6 h-4/5">
		<ul class="w-full h-full p-5">
			{#each data.posts as post, index}
				<li class="flex flex-col transition-all rounded-md hover:bg-gray-100">
					<a
						href={`/posts/${post.category}/${post.slug}`}
						class="flex flex-col w-full h-full gap-5 p-3"
					>
						<div class="flex items-center justify-between w-full">
							<span class="text-2xl">{post.title}</span>
							<p class="text-xs">{post.date}</p>
						</div>
						<p>{post.description}</p>
					</a>
				</li>
				{#if index !== data.posts.length - 1}
					<div class="divider" />
				{/if}
			{/each}
		</ul>
	</section>
</div>
