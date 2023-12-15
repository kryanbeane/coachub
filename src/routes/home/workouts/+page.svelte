<script lang="ts">
	import { db } from '$lib/firebase/firebase.client';
	import { session } from '$lib/firebase/session';
	import type { User } from 'firebase/auth';
	import { collection, getDocs, doc, query, where } from 'firebase/firestore';
	import { Program, programConverter } from '$lib/data/program/program';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';

	let modalStore: ModalStore = getModalStore();
	let user: User;
	let programs: (Program | undefined)[] = [];

	session.subscribe(async (cur: any) => {
		user = cur?.user;
		if (user) {
			try {
				const usersWorkoutsQuery = query(collection(db, 'users', user.uid, 'workouts'));
				const querySnapshot = await getDocs(usersWorkoutsQuery);
				programs = querySnapshot.docs
					.map((docSnapshot) => programConverter.fromFirestore(docSnapshot))
					.filter((p) => p !== undefined);
				console.log('User Workouts:', programs);
			} catch (err) {
				console.error(err);
			}
		}
	});

	function createProgramModal(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'createProgram',
			title: 'Program Designer', body: '',
			response: (r) => console.log('response:', r)
		};
		modalStore.trigger(modal);
	}

</script>

<div class="m-4">
	<button class="btn variant-ringed-surface" on:click={createProgramModal}> Design Program </button>
</div>
<hr class="!border-t-2" />
<dl class="list-dl">
	{#each programs as program}
		<div>
			<span class="badge bg-primary-500">1</span>
			<span class="flex-auto">
				{#if program != undefined}
					<dt class="h2 font-bold text-xl">{program.name}</dt>
					<!-- Add more program details here as needed -->
				{:else}
					<dt class="h2 uppercase font-bold text-xl">Oh sheyat</dt>
					<!-- Add more program details here as needed -->
				{/if}
			</span>
		</div>
	{/each}
</dl>
