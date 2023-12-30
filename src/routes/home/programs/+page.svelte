<script lang="ts">
	import { session } from '$lib/firebase/session';
	import type { User } from 'firebase/auth';
	import type { Program } from '$lib/data/program/program';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalStore } from '@skeletonlabs/skeleton';
	import { deleteProgram, listPrograms } from '$lib/firebase/database.client';
	import Search from '$lib/components/Table/Search/Search.svelte';
	import TableHeader from '$lib/components/Table/TableHeader/TableHeader.svelte';
	import RowCount from '$lib/components/Table/RowCount/RowCount.svelte';
	import Pagination from '$lib/components/Table/Pagination/Pagination.svelte';
	import RowsPerPage from '$lib/components/Table/RowsPerPage/RowsPerPage.svelte';
	import { DataHandler } from '@vincjo/datatables';
	import Icon from '@iconify/svelte';
	import { getToastStore } from '@skeletonlabs/skeleton';
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	const toastStore = getToastStore();
	let modalStore: ModalStore = getModalStore();
	let user: User;
	let programs: Program[] = [];

	session.subscribe(async (cur: any) => {
		user = cur?.user;
		await updateProgramList();
	});

	async function updateProgramList() {
		if (user) {
			programs = await listPrograms(user);
			console.log(programs)
		}
	}

	function createProgramModal(): void {
		const modal: ModalSettings = {
			type: 'component',
			component: 'createProgram',
			title: 'Program Designer',
			body: '',
			response: async (r) => {
				await updateProgramList();
			}
		};
		modalStore.trigger(modal);
	}

	async function onDeleteProgram(program: Program) {
		const confirmed = await createDeleteProgramModal(program);
		if (confirmed) {
			await deleteProgram(program.uid, user);
			await updateProgramList();

			const t: ToastSettings = {
				message: 'Program Deleted'
			};
			toastStore.trigger(t);
		} else {
			console.log('Deletion cancelled.');
		}
	}

	function createDeleteProgramModal(program: Program): Promise<boolean> {
		return new Promise<boolean>((resolve) => {
			const modal: ModalSettings = {
				type: 'confirm',
				title: 'Deleting ' + program.name,
				body: 'Are 	you sure you wish to delete this Program?',
				response: (r: boolean) => {
					resolve(r);
				}
			};
			modalStore.trigger(modal);
		});
	}

	function onRowSelected(program: Program) {
		goto('/home/programs/' + program.uid);
	}

	$: handler = new DataHandler(programs, { rowsPerPage: 10 });
	$: rows = handler.getRows();
</script>

<title>Designer - Coachub</title>

<div class="m-8 overflow-x-auto space-y-2">
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
				<tr class="cursor-pointer">
					<td on:click={() => onRowSelected(row)}>{row.name}</td>
					<td on:click={() => onRowSelected(row)}>{row.description}</td>
					<td on:click={() => onRowSelected(row)}>{row.rotations.length}</td>
					<td>
						<button
							class="focus:outline-none"
							on:click={(event) => {
								event.stopPropagation();
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
