import { goto } from '$app/navigation';
import { sendJWTToken } from '../firebase/auth.client';
import { setUser } from '../firebase/database.client';

export async function afterLogin(url: URL, userId: string) {
    console.log("afterLogin", url, userId)
    const route = url.searchParams.get('redirect') || '/home';
    console.log("route", route)
    await setUser(userId)
    console.log("setUser")
    await sendJWTToken();
    console.log("sendJWTToken")
    await goto(route);
}