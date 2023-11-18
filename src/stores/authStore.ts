import { writable } from "svelte/store";
import { auth } from '$lib/firebase/firebase.client';
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, useDeviceLanguage } from "firebase/auth";
import type { User } from 'firebase/auth';

interface AuthStore {
    isLoading: boolean;
    currentUser: User | null;
}

export const authStore = writable<AuthStore>({
    isLoading: true,
    currentUser: null
})

export const authHandlers = {
    signup: async (email: string, password: string) => {
        await createUserWithEmailAndPassword(auth, email, password)
    },
    login: async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password)
    },
    logout: async () => {
        await signOut(auth)
    },
    resetPassword: async (email: string) => {
        await sendPasswordResetEmail(auth, email)
    },
    updateEmail: async(email: string) => {
        await updateEmail(auth.currentUser!, email)
    },
    updatePassword: async (password: string) => {
        await updatePassword(auth.currentUser!, password)
    }
}