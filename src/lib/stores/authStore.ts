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
import { auth } from '../firebase/firebase.client';

interface AuthStore {
	isLoading: boolean;
	currentUser: User | null;
}

export const authStore = writable<AuthStore>({ isLoading: true, currentUser: null });

const provider = new GoogleAuthProvider();
const authentication = getAuth();

export const signInWithGoogle = () => {
	signInWithRedirect(authentication, provider);
};

export const signOutUser = async () => {
	await signOut(authentication);
	authStore.set({ isLoading: false, currentUser: null });
	if (browser) {
		window.location.href = '/login';
	}
};

export const handleRedirectResult = async () => {
	authStore.update((state) => ({ ...state, isLoading: true }));
	try {
		const result = await getRedirectResult(authentication);
		if (result) {
			// Sign-in succeeded
			console.log("successful log in")
			authStore.update((state) => ({ ...state, isLoading: false, currentUser: result.user }));
			if (browser) {
				window.location.href = '/home';
			}
		} else {
			onAuthStateChanged(auth, (user) => {
				authStore.update((state) => ({ ...state, isLoading: false, currentUser: user }));
				if (user && browser && window.location.pathname !== '/home') {
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
