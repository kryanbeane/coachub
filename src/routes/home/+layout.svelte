<script lang="ts">
	import '../../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import Sidebar from '../../navigation/sidebar.svelte';
	import Appbar from '../../navigation/appbar.svelte';
	import { onMount } from 'svelte';
	import { auth } from '../../lib/firebase/firebase.client';
	import { authStore } from '../../stores/authStore';

	
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	onMount(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			console.log(user);
			authStore.update((curr) => {
				return { ...curr, isLoading: false, currentUser: user };
			});

			if (
				!$authStore?.currentUser &&
				!$authStore.isLoading &&
				window.location.pathname !== '/'
			) {
				window.location.href = '/';
				console.log($authStore.currentUser, $authStore.isLoading);
			}
		});
		return unsubscribe;
	});
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<Appbar />
	</svelte:fragment>
	
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	
	<slot />
</AppShell>
