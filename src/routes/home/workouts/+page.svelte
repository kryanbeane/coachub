<script lang="ts">
	import { db } from '$lib/firebase/firebase.client';
	import { session } from '$lib/firebase/session';
	import type { User } from 'firebase/auth';
	import { collection, getDocs, doc, query, where } from 'firebase/firestore';
	import { Program, programConverter } from '$lib/data/program/program';

	let user: User;
	let programs: (Program | undefined)[] = [];

	// Subscribe to session store
	session.subscribe(async (cur: any) => {
		user = cur?.user;
		if (user) {
			try {
				// Fetching user's workouts
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
</script>

<!-- Your HTML template -->
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
	<!-- ... -->
</dl>
