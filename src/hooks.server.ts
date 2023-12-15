import * as admin from 'firebase-admin';
import { redirect } from '@sveltejs/kit';
import svcAccount from '../coachubsvcaccount.json';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
	admin.initializeApp({
		credential: admin.credential.cert(svcAccount as admin.ServiceAccount)
	});
}

async function getUserFromToken(token: string) {
	try {
		const decodedToken = await admin.auth().verifyIdToken(token);
		return decodedToken;
	} catch (error) {
		console.error('Error verifying auth token', error);
		return null;
	}
}

export async function handle({ event, resolve }) {
	const protectRoutes = ['/home'];
	const url = event.url;

	const token = event.cookies.get('idToken');
	const user = token ? await getUserFromToken(token) : null;

	if (url.pathname === '/') {
		redirect(302, '/home');
	}

	if (!user && protectRoutes.includes(url.pathname)) {
		redirect(302, `/login?redirect=${url.pathname}`);
	}

	return await resolve(event);
}
