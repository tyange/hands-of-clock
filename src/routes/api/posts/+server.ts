import type { Post } from '../../../lib/types';

import { json } from '@sveltejs/kit';

async function getPosts(category?: string) {
	let posts: Post[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Post, 'slug'>;
			const post = { ...metadata, slug } satisfies Post;

			post.published && posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	if (category) {
		posts = posts.filter((post) => post.category === category);
	}

	const splicedPosts = [];
	const chunkSize = 4;

	for (let i = 0; i < posts.length; i += chunkSize) {
		splicedPosts.push(posts.slice(i, i + chunkSize));
	}

	return splicedPosts;
}

export async function GET(event) {
	const posts = await getPosts(event.url.search.split('=')[1]);
	return json(posts);
}
