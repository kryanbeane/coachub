<script lang="ts">
	import Icon from '@iconify/svelte';
	import { TreeView, TreeViewItem } from '@skeletonlabs/skeleton';
</script>

<TreeView>
	<TreeViewItem>
		<svelte:fragment slot="lead">
			<Icon icon="fluent:home-12-filled" width="24" />
		</svelte:fragment>
		Home
	</TreeViewItem>
	<a href="/home/workouts">
		<TreeViewItem>
			<svelte:fragment slot="lead">
				<Icon icon="map:gym" width="24" />
			</svelte:fragment>
			Designer
		</TreeViewItem>
	</a>
</TreeView>
