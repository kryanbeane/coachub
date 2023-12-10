import { goto } from '$app/navigation';
import { createUser } from '../firebase/database.client';

export async function afterRegister(url: URL, userId: string) {
    const route = url.searchParams.get('redirect') || '/home';
    await createUser(userId)
    await goto(route);
}