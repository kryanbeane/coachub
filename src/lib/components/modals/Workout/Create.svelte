<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';
	import { createProgram, createWorkout } from '$lib/firebase/database.client';
	import { Program } from '$lib/data/program/program';
	import { session } from '$lib/firebase/session';
	import type { User } from 'firebase/auth';
	import { Workout } from '$lib/data/workout/workout';

	export let parent: SvelteComponent;

	const modalStore = getModalStore();
	const formData = {
		name: undefined,
		description: undefined,
		focus: undefined
	};

	let user: User;

	session.subscribe((cur: any) => {
		user = cur?.user;
	});

	function onCreateProgram(): void {
		if (!formData.name || !formData.description || !formData.focus) {
			return;
		}

		let workout = new Workout(formData.name, formData.description, formData.focus, []);

		console.log('Creating program:', workout);
		createWorkout(workout, rotationId, program.uid, user)
			.then(() => {
				if ($modalStore[0].response) $modalStore[0].response(formData);
				modalStore.close();
			})
			.catch((error) => {
				console.error('Error creating program:', error);
			});
	}
</script>

{#if $modalStore[0]}
	<div class="modal-example-form card p-4 w-modal shadow-xl space-y-4">
		<header class="text-2xl font-bold">{$modalStore[0].title ?? '(title missing)'}</header>
		<article>{$modalStore[0].body ?? '(body missing)'}</article>

		<form class="modal-form border border-surface-500 p-4 space-y-4 rounded-container-token">
			<label class="label">
				<span>Name</span>
				<input
					class="input"
					type="text"
					bind:value={formData.name}
					placeholder="Betty's Booty Builder v2..."
				/>
			</label>
			<label class="label">
				<span>Description</span>
				<textarea
					class="textarea"
					bind:value={formData.description}
					placeholder="Program description..."
				/>
			</label>
			<div class="flex gap-4">
				<label class="label w-40">
					<span>Number of Rotations</span>
					<input
						class="input"
						type="number"
						bind:value={formData.rotationCount}
						placeholder="# rotations..."
					/>
				</label>
			</div>
			<label class="label">
				<span>Assign to Client</span>
				<input class="input" type="text" placeholder="Available in Alpha..." disabled={true} />
			</label>
		</form>
		<!-- prettier-ignore -->
		<footer class="modal-footer {parent.regionFooter}">
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
        <button class="btn {parent.buttonPositive}" on:click={onCreateProgram}>Create Program</button>
    </footer>
	</div>
{/if}
