<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { getProgram, listAllWorkouts } from '$lib/firebase/database.client';
	import { session } from '$lib/firebase/session';
	import type { Program } from '$lib/data/program/program';
	import type { User } from 'firebase/auth';
	import Search from '$lib/components/Table/Search/Search.svelte';
	import TableHeader from '$lib/components/Table/TableHeader/TableHeader.svelte';
	import { DataHandler } from '@vincjo/datatables';
	import type { Rotation } from '$lib/data/rotation/rotation';
	import { ListBox, ListBoxItem } from '@skeletonlabs/skeleton';
	import type { Workout } from '$lib/data/workout/workout';

	let programDetails: Program | null = null;
	let loading = true;
	let user: User | null = null;
	let selectedRotation: Rotation | null = null;
	let workoutList: Workout[] = [];

	session.subscribe((cur: any) => {
		user = cur?.user;
	});

	$: programId = $page.url.pathname.split('/').pop();

	let selectedRotationId: string | null = null;

	onMount(async () => {
		if (user && programId) {
			programDetails = await getProgram(programId, user, true);
			loading = false;
		} else {
			console.error('User not authenticated');
		}
	});

	$: if (programDetails && programDetails?.rotations?.length > 0) {
		if (!selectedRotationId) {
			selectedRotationId = sortedRotations[0].uid;
			updateWorkouts(sortedRotations[0]);
		}
	}

	$: if (selectedRotation) {
		updateWorkouts(selectedRotation);
	}

	async function onRotationSelected(rotation: Rotation) {
		selectedRotation = rotation;
		if (programId && user) {
			workoutList = await listAllWorkouts(rotation.uid, programId, user);
		}
	}

	async function updateWorkouts(rotation: Rotation) {
		if (programId && user) {
			workoutList = await listAllWorkouts(rotation.uid, programId, user);
		}
	}

	$: sortedRotations = (programDetails?.rotations ?? []).sort((a, b) =>
		a.name.localeCompare(b.name)
	);
	$: handler = new DataHandler(workoutList, { rowsPerPage: 10 });
	$: workouts = handler.getRows();
</script>

<title>{programDetails?.name}</title>

<!-- 
    Breadcrumbs
 -->
<ol class="breadcrumb m-4">
	<li class="crumb"><a class="anchor" href="/home">Home</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li class="crumb"><a class="anchor" href="/home/programs">Programs</a></li>
	<li class="crumb-separator" aria-hidden>&rsaquo;</li>
	<li>{programDetails?.name}</li>
</ol>

<!-- 
    Left Column: List of Rotations
 -->
<div class="grid grid-cols-[auto_1fr] gap-4 h-screen m-8">
	<div class="overflow-y-auto">
		<ListBox>
			{#each sortedRotations as rotation (rotation.uid)}
				<ListBoxItem
					on:click={() => onRotationSelected(rotation)}
					active="variant-ghost"
					class="mb-4"
					bind:group={selectedRotationId}
					name="medium"
					value={rotation.uid}>{rotation.name}</ListBoxItem
				>
			{/each}
		</ListBox>

		<div class="mt-auto">
			<button type="button" class="btn variant-ghost-primary"> Add Rotation </button>
		</div>
	</div>

	<!-- 
        Right column: Workouts in the selected rotation
     -->
	<div class="flex flex-col">
		<div class="overflow-x-auto space-y-2">
			<header class="flex justify-between">
				<div>
					<button class="btn variant-ghost mr-1" on:click={() => {}}> Add Workout </button>
				</div>
				<Search {handler} />
			</header>

			<table class="table table-hover table-compact w-full table-auto">
				<thead>
					<tr>
						<TableHeader {handler} orderBy="name">Name</TableHeader>
					</tr>
				</thead>
				<tbody>
					{#each $workouts as workout}
						<tr class="cursor-pointer">
							<td>{workout.name}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</div>
