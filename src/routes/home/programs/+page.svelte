<script lang="ts">
	import { session } from '$lib/firebase/session';
	import type { User } from 'firebase/auth';
	import type { Program } from '$lib/data/program/program';
	import { getModalStore, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalStore } from '@skeletonlabs/skeleton';
	import { fetchProgramsForUser } from '$lib/firebase/database.client';
	import { Table } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';

	let modalStore: ModalStore = getModalStore();
	let user: User;
	let programs: Program[] = [];
	let tableSimple: TableSource = {
		head: ['Name', 'Description', 'Rotation Count'],
		body: []
	};

	session.subscribe(async (cur: any) => {
		user = cur?.user;
		if (user) {
			programs = await fetchProgramsForUser(user);
		}
	});

	$: if (programs && programs.length > 0) {
		tableSimple = {
			head: ['Name', 'Description', 'Rotation Count'],
			body: tableMapperValues(programs, ['name', 'description', 'rotationCount']),
		};
	} else {
		tableSimple = {
			head: ['Name', 'Description', 'Rotation Count'],
			body: [],
		};
	}

	async function updateProgramList() {
		if (user) {
			programs = await fetchProgramsForUser(user);
		}
	}

	function createProgramModal(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'createProgram',
			title: 'Program Designer',
			body: '',
			response: async (r) => {
				await updateProgramList(); // Refresh the list of programs
			}
		};
		modalStore.trigger(modal);
	}

	
</script>
<div class="m-4">
	<button class="btn variant-ringed-surface" on:click={createProgramModal}> Design Program </button>
</div>
<hr class="border-t-2" />

<div class="m-4">
	<Table source={tableSimple} interactive={true} />
</div>
