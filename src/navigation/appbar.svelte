<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { authStore } from '../stores/authStore';
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';

	let initials = '?';

	let unsubscribe: () => void;

	onMount(() => {
		unsubscribe = authStore.subscribe(($authStore) => {
			initials = $authStore.currentUser?.email
				? $authStore.currentUser.email.substring(0, 2).toUpperCase()
				: '?';
		});
	});

	// Cleanup the subscription when the component is destroyed
	onDestroy(() => {
		if (unsubscribe) unsubscribe();
	});
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<strong class="text-xl uppercase">Coachub</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<a class="btn btn-sm variant-ghost-surface" href="/login" rel="noreferrer"> Sign In </a>
		<Avatar {initials} background="bg-primary-500 w-10" />

		<LightSwitch />
	</svelte:fragment>
</AppBar>
