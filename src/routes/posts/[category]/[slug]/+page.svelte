<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>{data.meta.title} | hand of clock</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article class="flex-1 w-4/5 m-auto mt-20 prose break-keep lg:prose-lg">
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p class="w-full text-sm text-right">{data.meta.date}</p>
	</hgroup>
	<div>
		<svelte:component this={data.content} />
	</div>
</article>
