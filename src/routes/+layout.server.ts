import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('/api/categories');
	const categories: string[] = await response.json();

	return { categories };
}) satisfies PageServerLoad;
