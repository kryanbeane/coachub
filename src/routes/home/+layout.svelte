<script lang="ts">
	import '../../app.postcss';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Sidebar from '../../navigation/sidebar.svelte';
	import Appbar from '../../navigation/appbar.svelte';
	
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
