<script lang="ts">
	import type { Post } from '$lib/types';

	export let data: { posts: Post[] };
</script>

<div class="flex items-center justify-center h-full">
	<section class="w-3/5 m-auto h-4/5">
		<ul class="w-full h-full p-5">
			{#each data.posts as post, index}
				<li class="">
					<a href={`/posts/${post.slug}`}>{post.title}</a>
					<p>{post.date}</p>
					<p>{post.description}</p>
				</li>
				{#if index !== data.posts.length - 1}
					<div class="divider" />
				{/if}
			{/each}
		</ul>
	</section>
</div>
