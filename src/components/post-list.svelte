<script lang="ts">
	import type { Post } from '$lib/types';

	export let data: { posts: Post[] };
</script>

<div class="artboard artboard-horizontal phone-1">
	<section>
		<ul>
			{#each data.posts as post}
				<li>
					<a href={`/posts/${post.slug}`}>{post.title}</a>
					<p>{post.date}</p>
					<p>{post.description}</p>
				</li>
			{/each}
		</ul>
	</section>
</div>
