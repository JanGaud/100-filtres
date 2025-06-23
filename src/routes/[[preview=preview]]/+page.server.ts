import { asText } from '@prismicio/client';

import { createClient } from '$lib/prismicio';

import type { RequestEvent } from '@sveltejs/kit';

export async function load({ fetch, cookies }: RequestEvent) {
	const client = createClient({ fetch, cookies });
	 let formData;

	const page = await client.getByUID('page', 'accueil');

	try {
		formData = await client.getByType('contactform');
	} catch (error) {
		formData = [];
	}

	return {
		page,
		formData,
		title: asText(page.data.title),
		meta_description: page.data.meta_description,
		meta_title: page.data.meta_title,
		meta_image: page.data.meta_image.url
	};
}

export function entries() {
	return [{}];
}
