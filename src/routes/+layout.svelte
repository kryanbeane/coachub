<script>
	import 'firebase/auth';
	import { onMount } from 'svelte';
	import { get, writable } from 'svelte/store';
	import { authStore } from '../lib/stores/authStore';
	import { auth } from '$lib/firebase/firebase.client';
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	
	const isLoading = writable(true);

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			authStore.update((curr) => {
				return { ...curr, isLoading: false, currentUser: user };
			});

			const { currentUser } = get(authStore);

			if (!currentUser && window.location.pathname !== '/home') {
				window.location.href = '/home';
			}

			isLoading.set(false);
		});
		return unsubscribe;
	});
</script>

{#if $isLoading}
	<div class="fixed inset-0 flex justify-center items-center z-10">
		<ProgressRadial class="w-9" />
	</div>
{:else}
	<slot />
{/if}
