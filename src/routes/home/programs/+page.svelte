<script lang="ts">
	import { session } from '$lib/firebase/session';
	import type { User } from 'firebase/auth';
	import type { Program } from '$lib/data/program/program';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalStore } from '@skeletonlabs/skeleton';
	import { fetchProgramsForUser } from '$lib/firebase/database.client';
	import Search from '$lib/components/Table/Search/Search.svelte';
	import TableHeader from '$lib/components/Table/TableHeader/TableHeader.svelte';
	import RowCount from '$lib/components/Table/RowCount/RowCount.svelte';
	import Pagination from '$lib/components/Table/Pagination/Pagination.svelte';
	import RowsPerPage from '$lib/components/Table/RowsPerPage/RowsPerPage.svelte';
	import { DataHandler } from '@vincjo/datatables';

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

	$: handler = new DataHandler(programs, { rowsPerPage: 10 });
	$: rows = handler.getRows();
</script>


<div class="mx-4 my-4 overflow-x-auto space-y-2">
	<header class="flex justify-between">
		<div>
			<button class="btn variant-ringed-surface mr-1" on:click={createProgramModal}> Design Program </button>
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
				</tr>
			{/each}
		</tbody>
	</table>

	<footer class="flex justify-between">
		<RowCount {handler} />
		<Pagination {handler} />
	</footer>
</div>
