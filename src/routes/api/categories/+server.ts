import type { Post } from '$lib/types';
import { json } from '@sveltejs/kit';

async function getCategories() {
	const categories: string[] = [];

	const paths = import.meta.glob('/src/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];

		if (file && typeof file === 'object' && 'metadata' in file) {
			const metadata = file.metadata as Omit<Post, 'slug'>;

			categories.push(metadata.category);
		}
	}
	categories.sort((a, b) => a.localeCompare(b));

	return categories;
}

export async function GET() {
	const categories = await getCategories();
	return json(categories);
}
