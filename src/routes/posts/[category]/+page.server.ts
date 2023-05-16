import type { Post } from '$lib/types';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, params }) => {
	try {
		const response = await fetch(`/api/posts?category=${params.category}`);
		const posts: Post[][] = await response.json();

		return { posts };
	} catch (err) {
		throw error(404, `Could not find ${params.category}`);
	}
}) satisfies PageServerLoad;
