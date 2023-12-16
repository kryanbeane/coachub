<script lang="ts">
	import { session } from '$lib/firebase/session';
	import type { User } from 'firebase/auth';
	import type { Program } from '$lib/data/program/program';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalStore } from '@skeletonlabs/skeleton';
	import { fetchProgramsForUser } from '$lib/firebase/database.client';
	import Search from '$lib/components/Search/Search.svelte';
	import TableHeader from '$lib/components/TableHeader/TableHeader.svelte';
	import TableHeaderFilter from '$lib/components/TableHeaderFilter/TableHeaderFilter.svelte';
	import RowCount from '$lib/components/RowCount/RowCount.svelte';
	import Pagination from '$lib/components/Pagination/Pagination.svelte';
	import RowsPerPage from '$lib/components/RowsPerPage/RowsPerPage.svelte';
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

<div class="m-4">
	<button class="btn variant-ringed-surface" on:click={createProgramModal}> Design Program </button>
</div>
<hr class="border-t-2" />

<div class="mx-[10%] my-4 overflow-x-auto space-y-2">
	<header class="flex justify-between">
		<Search {handler} />
		<RowsPerPage {handler} />
	</header>

	<table class="table table-hover table-compact w-full table-auto">
		<thead>
			<tr>
				<TableHeader {handler} orderBy="name">Name</TableHeader>
				<TableHeader {handler} orderBy="description">Description</TableHeader>
				<TableHeader {handler} orderBy="rotationCount">Rotation Count</TableHeader>
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