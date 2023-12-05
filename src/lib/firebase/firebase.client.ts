import { browser } from '$app/environment';
import { getApps, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_APP_ID,
	measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

if (getApps().length == 0) {
    const app = initializeApp(firebaseConfig);
    if (browser) {
        getAnalytics(app)
    }
}

export const db = getFirestore()