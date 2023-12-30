<script lang="ts">
	import { AppShell } from '@skeletonlabs/skeleton';
	import Appbar from '../../navigation/appbar.svelte';
	import Sidebar from '../../navigation/sidebar.svelte';
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
