import { setDoc, collection, doc } from 'firebase/firestore';
import { db } from './firebase.client';

export async function createUser(userId: string) {
    try {
        const users = collection(db, 'users');
        console.log(users)
        console.log(userId)
        await setDoc(doc(users, userId), {
            uid: userId
        })
    } catch (e) {
        console.log(e)
        throw e;
    }
}