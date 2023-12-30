<script lang="ts">
	import '../app.postcss';
	import { onMount } from 'svelte';
	import { session } from '$lib/firebase/session';
	import { goto } from '$app/navigation';
	import type { LayoutData } from './$types';
	import { AppShell, Modal, Toast, type ModalComponent } from '@skeletonlabs/skeleton';
	import Create from '$lib/components/modals/Program/Create.svelte';

	export let data: LayoutData;

	let loading: boolean = true;
	let loggedIn: boolean = false;

	session.subscribe((cur: any) => {
		loading = cur?.loading;
		loggedIn = cur?.loggedIn;
	});

    onMount(async () => {
        const user: any = await data.getAuthUser();

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

        // Check if the user is not already on a page they should stay on
        if (loggedIn && $page.url.pathname !== '/home/programs') {
            goto('/home');
        }
    });
	
	/**
	 * Initialise stuff for modals to work app-wide
	*/
	import { initializeStores } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import Delete from '$lib/components/modals/Program/Delete.svelte';
	initializeStores();
	const modalRegistry: Record<string, ModalComponent> = {
		createProgram: { ref: Create },
		deleteProgram: { ref: Delete}
	};
</script>

<Modal components={modalRegistry} />
<Toast />

{#if loading}
	<AppShell>
		<section class="card w-full">
			<div class="p-4 space-y-4">
				<div class="placeholder" />
				<div class="grid grid-cols-3 gap-8">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
				<div class="grid grid-cols-4 gap-4">
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
					<div class="placeholder" />
				</div>
			</div>
		</section>
	</AppShell>
{:else}
	<slot />
{/if}
