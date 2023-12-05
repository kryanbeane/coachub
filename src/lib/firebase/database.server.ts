import { db } from './firebase.server';

export async function getUser(userId: string) {
    const user = await db.collection('users').doc(userId).get();

    return user?.data();
}
