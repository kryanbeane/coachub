<script lang="ts">
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { logout } from '$lib/firebase/auth.client';
	import { goto } from '$app/navigation';
	import messageStore from '$lib/stores/message.store';

	let initials: string = 'ah';

	export let isLoggedIn: boolean;

	async function onLogout() {
		try {
			await logout();
			goto('/login');
		} catch (e) {
			console.log(e);
			messageStore.showError(e as string);
		}
	}
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<strong class="text-xl uppercase">Coachub</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#if isLoggedIn}
			<Avatar {initials} background="bg-primary-500 w-10" />

			<a
				on:click={onLogout}
				class="btn btn-sm variant-ghost-surface"
				href="/login"
				rel="noreferrer"
			>
				Log Out
			</a>
		{:else}
			<span class="text-sm">Uhhhhh.... you shouldn't be here</span>
		{/if}

		<LightSwitch />
	</svelte:fragment>
</AppBar>
