<script lang="ts">
	import '../../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '../../navigation/sidebar.svelte';
	import Appbar from '../../navigation/appbar.svelte';
	import authStore from '$lib/stores/auth.store';
	
	export let data;

	let isLoggedIn: boolean = data.isLoggedIn;

	$: isLoggedIn = $authStore.isActive ? $authStore.isLoggedIn : data.isLoggedIn;
</script>

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<Appbar {isLoggedIn}/>
	</svelte:fragment>
	
	<svelte:fragment slot="sidebarLeft">
		<Sidebar />
	</svelte:fragment>
	
	<slot {isLoggedIn}/>
</AppShell>
