<script lang="ts">
	import '../../app.postcss';
	import { auth } from '$lib/firebase/firebase.client';
	import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { session } from '$lib/firebase/session';
	import { page } from '$app/stores';
	import { afterRegister } from '$lib/helpers/route.helper';

	let email: string = '';
	let password: string = '';

	async function handleRegister() {
		await createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
                console.log(result)
				const { user } = result;
				session.update((cur: any) => {
					return {
						...cur,
						user,
						loggedIn: true,
						loading: false
					};
				});
				goto('/home');
			})
			.catch((error) => {
				throw new Error(error);
			});
	}

    async function onLoginWithGoogle(e: Event) {
		try {
			const user = await loginWithGoogle();
			await afterRegister($page.url, user.uid);
		} catch (error: unknown) {
			if (
				['auth/invalid-email', 'auth/user-not-found', 'auth/wrong-password'].includes(
					error as string
				)
			) {
				console.log(error)
				return;
			}
			console.log(error)
		}
	}

	async function loginWithGoogle() {
		let user = await signInWithPopup(auth, new GoogleAuthProvider())
			.then((userCredential) => {
				const retrievedUser = userCredential?.user;
				session.set({
					loggedIn: true,
					user: retrievedUser
				});

				return retrievedUser;
			})
			.catch((error: Error) => {
				throw error;
			});
		return user;
	}
</script>

<div class="flex items-center justify-center min-h-screen">
	<div class="card p-10 max-w-lg w-full mx-auto rounded-lg text-center">
		<h1 class="text-4xl font-bold text-black dark:text-white">
			coac<span
				class="bg-gradient-to-br from-primary-500 to-primary-300 bg-clip-text text-transparent"
				>hub</span
			>
		</h1>

		<form on:submit={handleRegister} class="text-slate-700 my-4">
			<input
				bind:value={email}
				type="email"
				placeholder="Email"
				class="input-group my-2 text-white"
			/>
			<div class="input-group input-group-divider grid-cols-[1fr_auto] text-white">
				<input bind:value={password} type="password" placeholder="Password" />
			</div>
            <button type="submit" class="btn btn-outline variant-ringed content-center text-white mt-4"
            >Register</button>
		</form>


		<div class="text-slate-50">or</div>

		<div class="mt-4">
			<button
				on:click={onLoginWithGoogle}
				type="button"
				class="btn btn-outline variant-ringed flex justify-center items-center w-full"
			>
				<img
					class="inline mr-2"
					src="https://raw.githubusercontent.com/gist/twolfson/8f578c0720df7fc87f29e4d8395cf76b/raw/cee86d79725205756e742469b5f02dacf30a09a7/logo-from-builder.optimized.svg"
					width="20"
					height="20"
					alt="Google Logo"
				/>
				<span>Continue with Google</span>
			</button>
		</div>	</div>
</div>
