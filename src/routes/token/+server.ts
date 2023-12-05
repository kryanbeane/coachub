import { json } from '@sveltejs/kit';
import { auth } from '$lib/firebase/firebase.server';

export async function POST({ request, cookies }) {
    try {
        const requestBody = await request.json();
        const token = requestBody.token;
        const email = requestBody.email;

        if (!token) {
            return json({ message: 'Token is required' }, { status: 400 });
        }

        const verfiedToken = await auth.verifyIdToken(token, true);

        if (verfiedToken.email === email) {
            const maxAge = Math.round(verfiedToken.exp - Date.now() / 1000);
            cookies.set('jwt', token, { maxAge, path: '/' });
            return json({ message: 'success' }, { status: 200 });
        }

        return json({ message: 'Access Denied' }, { status: 403 });
    } catch (error) {
        console.error(error); // It's helpful to log the error for debugging
        return json({ message: 'Access Denied' }, { status: 403 });
    }
}
