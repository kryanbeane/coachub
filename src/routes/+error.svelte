<script>
	import { page } from '$app/stores';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div>
	{#if $page.status === 404}
		<h1>Not found!</h1>
	{:else}
		<div class="flex justify-center items-center h-screen">
			<ProgressRadial width=100 ... stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
		</div>
	{/if}
</div>

<style>
	h1 {
		margin: 4em 0;
		text-align: center;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>
