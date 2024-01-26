import { error, redirect } from '@sveltejs/kit';

export async function load({ params, fetch }) {
	console.log('FETCHING DATA...');
	const id = params.id;
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	const guide = await res.json();

	if (res.ok) {
		return {
			guide
		};
	}

	// redirect(301, '/guides');

	error(404, {
		message: 'Could not fetch that guide'
	});
}
