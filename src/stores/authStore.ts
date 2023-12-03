import { writable } from 'svelte/store';
import {
	getAuth,
	signInWithRedirect,
	GoogleAuthProvider,
	onAuthStateChanged,
	getRedirectResult,
	signOut,
	type User
} from 'firebase/auth';
import { browser } from '$app/environment';
import { auth } from '../lib/firebase/firebase.client';

interface AuthStore {
	isLoading: boolean;
	currentUser: User | null;
}

export const authStore = writable<AuthStore>({ isLoading: true, currentUser: null });

auth.app;

const provider = new GoogleAuthProvider();
const auth2 = getAuth();

export const signInWithGoogle = () => {
	signInWithRedirect(auth2, provider);
};

export const signOutUser = async () => {
	await signOut(auth2);
	authStore.set({ isLoading: false, currentUser: null });
	if (browser) {
		window.location.href = '/login';
	}
};

export const handleRedirectResult = async () => {
	authStore.update((state) => ({ ...state, isLoading: true }));
	try {
		const result = await getRedirectResult(auth2);
		if (result) {
			// Sign-in succeeded
			authStore.update((state) => ({ ...state, isLoading: false, currentUser: result.user }));
			if (browser) {
				window.location.href = '/home';
			}
		} else {
			// No user, set up observer for auth state changes
			onAuthStateChanged(auth, (user) => {
				authStore.update((state) => ({ ...state, isLoading: false, currentUser: user }));
				if (user && browser) {
					window.location.href = '/home';
				}
			});
		}
	} catch (error) {
		console.error('Error handling redirect result', error);
		authStore.update((state) => ({ ...state, isLoading: false }));
	}
};

if (browser) {
	handleRedirectResult();
}
