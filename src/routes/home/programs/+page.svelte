<script lang="ts">
	import { session } from '$lib/firebase/session';
	import type { User } from 'firebase/auth';
	import type { Program } from '$lib/data/program/program';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalStore } from '@skeletonlabs/skeleton';
	import { deleteProgram, fetchProgramsForUser, getProgram } from '$lib/firebase/database.client';
	import Search from '$lib/components/Table/Search/Search.svelte';
	import TableHeader from '$lib/components/Table/TableHeader/TableHeader.svelte';
	import RowCount from '$lib/components/Table/RowCount/RowCount.svelte';
	import Pagination from '$lib/components/Table/Pagination/Pagination.svelte';
	import RowsPerPage from '$lib/components/Table/RowsPerPage/RowsPerPage.svelte';
	import { DataHandler } from '@vincjo/datatables';
	import Icon from '@iconify/svelte';
	import { Toast, getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings, ToastStore } from '@skeletonlabs/skeleton';

	const toastStore = getToastStore();
	let modalStore: ModalStore = getModalStore();
	let user: User;
	let programs: Program[] = [];

	session.subscribe(async (cur: any) => {
		user = cur?.user;
		if (user) {
			programs = await fetchProgramsForUser(user);
		}
	});

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

	async function onDeleteProgram(program: Program) {
    const confirmed = await createDeleteProgramModal();
    if (confirmed) {
        let prog = getProgram(program, user);
        console.log(prog);
        (await prog).forEach(async (p) => {
            await deleteProgram(p.id, user);
            await updateProgramList();
        });

        const t: ToastSettings = {
            message: 'Workout Deleted'
        };
        toastStore.trigger(t);
    } else {
        console.log("Deletion cancelled.");
    }
}

function createDeleteProgramModal(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
        const modal: ModalSettings = {
            type: 'confirm',
            title: 'Deleting Program',
            body: 'Are you sure you wish to delete this Program?',
            response: (r: boolean) => {
                resolve(r);
            }
        };
        modalStore.trigger(modal);
    });
}


	$: handler = new DataHandler(programs, { rowsPerPage: 10 });
	$: rows = handler.getRows();
</script>

<div class="mx-4 my-4 overflow-x-auto space-y-2">
	<header class="flex justify-between">
		<div>
			<button class="btn variant-filled-surface mr-1" on:click={createProgramModal}>
				Design Program
			</button>
			<Search {handler} />
		</div>
		<RowsPerPage {handler} />
	</header>

	<table class="table table-hover table-compact w-full table-auto">
		<thead>
			<tr>
				<TableHeader {handler} orderBy="name">Name</TableHeader>
				<TableHeader {handler} orderBy="description">Description</TableHeader>
				<TableHeader {handler} orderBy="rotationCount">Rotations</TableHeader>
				<TableHeader {handler} orderBy=""></TableHeader>
			</tr>
			<!-- <tr>
				<TableHeaderFilter {handler} filterBy="name" />
				<TableHeaderFilter {handler} filterBy="description" />
				<TableHeaderFilter {handler} filterBy="rotationCount" />
			</tr> -->
		</thead>
		<tbody>
			{#each $rows as row}
				<tr>
					<td>{row.name}</td>
					<td>{row.description}</td>
					<td>{row.rotationCount}</td>
					<td>
						<button
							class="focus:outline-none"
							on:click={() => {
								onDeleteProgram(row);
							}}
						>
							<Icon icon="fluent:delete-12-filled" width="24" />
						</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>

	<footer class="flex justify-between">
		<RowCount {handler} />
		<Pagination {handler} />
	</footer>
</div>
