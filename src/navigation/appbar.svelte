<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	let initials = 'BK';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<strong class="text-xl uppercase">Coachub</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a class="btn btn-sm variant-ghost-surface" href="/login" rel="noreferrer"> Sign In </a>
		<Avatar {initials} background="bg-primary-500 w-9" />

		<LightSwitch />
	</svelte:fragment>
</AppBar>
