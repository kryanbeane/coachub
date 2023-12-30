<script>
	import { page } from '$app/stores';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import '../app.postcss';
</script>

<svelte:head>
	<title>{$page.status}</title>
</svelte:head>

<div>
	<div class="flex justify-center items-center h-screen">
		<ProgressRadial width=100 ... stroke={100} meter="stroke-primary-500" track="stroke-primary-500/30" />
	</div>
</div>
