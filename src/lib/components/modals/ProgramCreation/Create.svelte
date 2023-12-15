<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { getModalStore } from '@skeletonlabs/skeleton';

	export let parent: SvelteComponent;
	const modalStore = getModalStore();
	const formData = {
		name: '',
		description: '',
		rotationCount: ''
	};

	// We've created a custom submit function to pass the response and close the modal.
	function onFormSubmit(): void {
		if ($modalStore[0].response) $modalStore[0].response(formData);
		modalStore.close();
	}

	const cBase = 'card p-4 w-modal shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
	const cForm = 'border border-surface-500 p-4 space-y-4 rounded-container-token';
</script>

{#if $modalStore[0]}
	<div class="modal-example-form {cBase}">
		<header class={cHeader}>{$modalStore[0].title ?? '(title missing)'}</header>
		<article>{$modalStore[0].body ?? '(body missing)'}</article>
		<!-- Enable for debugging: -->
		<form class="modal-form {cForm}">
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
        <button class="btn {parent.buttonPositive}" on:click={onFormSubmit}>Create Program</button>
    </footer>
	</div>
{/if}
