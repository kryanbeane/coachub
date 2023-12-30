import { goto } from '$app/navigation';
import type { User } from 'firebase/auth';
import { createUser } from '../firebase/database.client';

export async function afterRegister(url: URL, user: User) {
    const route = url.searchParams.get('redirect') || '/home';
    await createUser(user)
    await goto(route);
}