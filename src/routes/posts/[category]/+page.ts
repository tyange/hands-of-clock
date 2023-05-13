import type { Post } from '$lib/types';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	try {
		const response = await fetch('../../api/posts');
		const gettingPost: Post[] = await response.json();

		const posts = gettingPost.filter((post) => post.category === params.category);

		return { posts };
	} catch (err) {
		throw error(404, `Could not find ${params.category}`);
	}
}
