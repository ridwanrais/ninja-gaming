<script>
	import { page } from '$app/stores';

	let message = $page?.error?.message || 'Are you lost?';
</script>

<div class="error">
	<h2>Oops</h2>
	<p>{message}</p>
	<a href="/guides">View all guides</a>
</div>

<style>
	.error {
		text-align: center;
		margin-bottom: 60px;
	}
</style>
