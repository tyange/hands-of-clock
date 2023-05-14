<script lang="ts">
	import PostList from '../../../components/post-list.svelte';

	export let data;
</script>

<svelte:head>
	<title>hands of clock</title>
</svelte:head>

<PostList {data} />
