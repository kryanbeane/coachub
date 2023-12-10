<script lang="ts">
	import { AppBar, Avatar } from '@skeletonlabs/skeleton';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
	import { popup } from '@skeletonlabs/skeleton';
	import type { PopupSettings } from '@skeletonlabs/skeleton';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { session } from '$lib/firebase/session';
	import { auth } from '$lib/firebase/firebase.client';
	import { signOut, type User } from 'firebase/auth';
	import { onMount } from 'svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	let loading: boolean = true;
	let loggedIn: boolean = false;
	let user: User;
	let initials: string | undefined;

	session.subscribe((cur: any) => {
		loading = cur?.loading;
		loggedIn = cur?.loggedIn;
		user = cur?.user;
		if (user) {
			initials = user.email?.charAt(0).toUpperCase();
		}
	});

	onMount(async () => {
		const loggedIn = !!user && user?.emailVerified;
		session.update((cur: any) => {
			loading = false;
			return {
				...cur,
				user,
				loggedIn,
				loading: false
			};
		});

		if (loggedIn) {
			goto('/home');
		}
	});

	export async function logout() {
		await signOut(auth)
			.then(() => {
				goto('/login');
				loggedIn = false;
			})
			.catch((error: string) => {
				throw new Error(error);
			});
	}

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	const userSettings: PopupSettings = {
		event: 'click',
		target: 'userSettings',
		placement: 'bottom'
	};

	let valueSingle: string = 'settings';
</script>

{#if loading}
	<ProgressRadial />
{:else}
	<AppBar>
		<svelte:fragment slot="lead">
			<strong class="text-xl uppercase">Coachub</strong>
		</svelte:fragment>
		<svelte:fragment slot="trail">
			{#if loggedIn}
				<button use:popup={userSettings} class="hover:outline-orange-400">
					<Avatar {initials} background="bg-primary-500 w-9" />
					<div data-popup="userSettings">
						<ListBox>
							<ListBoxItem bind:group={valueSingle} name="medium" value="settings"
								>Settings</ListBoxItem
							>
							<a
								on:click={logout}
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
				<div class="placeholder-circle w-9" />
			{/if}

			<LightSwitch />
		</svelte:fragment>
	</AppBar>
{/if}
