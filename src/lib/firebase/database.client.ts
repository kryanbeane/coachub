import { setDoc, collection, doc, getDoc, query, getDocs } from 'firebase/firestore';
import { db } from './firebase.client';
import type { User } from 'firebase/auth';
import { programConverter, type Program } from '$lib/data/program/program';

export async function createUser(user: User) {
	try {
		const users = collection(db, 'users');
		await setDoc(doc(users, user.uid), {
			uid: user.uid,
			email: user.email
		});
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export async function createProgram(program: Program, user: User) {
	try {
		const userRef = doc(db, 'users', user.uid);
		const userSnapshot = await getDoc(userRef);

		if (!userSnapshot.exists()) {
			throw new Error('User does not exist');
		}

		const programRef = doc(collection(userRef, 'programs'));
		await setDoc(programRef, programConverter.toFirestore(program));

		return { message: 'Program created successfully', programId: programRef.id };
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export async function deleteProgram(programId: string, user: User) {
	try {
		const programRef = doc(db, 'users', user.uid, 'programs', programId);
		await setDoc(programRef, { deleted: true }, { merge: true });

		return { message: 'Program deleted successfully' };
	} catch (e) {
		console.log(e);
		throw e;
	}
}

export async function fetchProgramsForUser(user: User): Promise<Program[]> {
	try {
		const querySnapshot = await getDocs(query(collection(db, 'users', user.uid, 'programs')));
		const programs = querySnapshot.docs
			.map((docSnapshot) => programConverter.fromFirestore(docSnapshot))
			.filter((p): p is Program => p !== undefined);
		return programs;
	} catch (err) {
		console.error('Error fetching programs:', err);
		throw err;
	}
}
