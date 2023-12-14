import { setDoc, collection, doc } from 'firebase/firestore';
import { db } from './firebase.client';
import type { User } from 'firebase/auth';

export async function createUser(user: User) {
	try {
		const users = collection(db, 'users');
		console.log(users);
		console.log(user);
		await setDoc(doc(users, user.uid), {
			uid: user.uid,
			email: user.email
		});
	} catch (e) {
		console.log(e);
		throw e;
	}
}
