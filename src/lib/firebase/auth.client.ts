import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

export async function loginWithGoogle() {
    const auth = getAuth();
    console.log("got the auth: ", auth)
    const userCredential = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log("got the userCredential: ", userCredential)
    return userCredential.user;
}

export async function logout() {
    await signOut(getAuth());
    await fetch('/logout')
}

export async function sendJWTToken() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
        return;
    }

    const token = await user.getIdToken(true);
    await fetch('/token', {
        method: 'POST',
        body: JSON.stringify({ token, email: user.email })
    })
}
