<script lang="ts">
	export let data;
</script>

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
