<script lang="ts">
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { logout } from '$lib/firebase/auth.client';
	import { goto } from '$app/navigation';
	import { popup } from '@skeletonlabs/skeleton';
	import messageStore from '$lib/stores/message.store';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';

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

	const userSettings: PopupSettings = {
		event: 'click',
		target: 'userSettings',
		placement: 'bottom'
	};

	let valueSingle: string = 'settings';
</script>

<AppBar>
	<svelte:fragment slot="lead">
		<strong class="text-xl uppercase">Coachub</strong>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		{#if isLoggedIn}
			<button use:popup={userSettings} class="hover:outline-orange-400">
				<Avatar {initials} background="bg-primary-500 w-9" />
				<div data-popup="userSettings">
					<ListBox>
						<ListBoxItem bind:group={valueSingle} name="medium" value="settings">Settings</ListBoxItem>
						<a
							on:click={onLogout}
							class="btn btn-sm variant-ghost-surface"
							href="/login"
							rel="noreferrer"
						>
							Log Out
						</a>
					</ListBox>
				</div>
			</button>
		{:else}
			<span class="text-sm">Uhhhhh.... you shouldn't be here</span>
		{/if}

		<LightSwitch />
	</svelte:fragment>
</AppBar>
