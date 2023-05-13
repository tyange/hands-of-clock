<script lang="ts">
	import type { Post } from '$lib/types';

	export let data: { posts: Post[] };
</script>

<div class="flex items-center justify-center h-full">
	<section class="w-full m-auto sm:w-4/6 h-4/5">
		<ul class="w-full h-full p-5">
			{#each data.posts as post, index}
				<li class="flex flex-col">
					<a
						href={`/posts/${post.category}/${post.slug}`}
						class="block w-full h-full p-3 transition-all hover:bg-gray-100"
					>
						<span class="text-2xl">{post.title}</span>
						<p>{post.date}</p>
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
