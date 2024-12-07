import { account, ID } from '$lib/appwrite/client';

export async function registerUserWithMagicURL(email: string, verifyUrl: string) {
	return account.createMagicURLToken(ID.unique(), email, verifyUrl);
}

export async function loginUserWithMagicURL() {
	const urlParams = new URLSearchParams(window.location.search);
	const secret = urlParams.get('secret');
	const userId = urlParams.get('userId');

	if (!secret || !userId) {
		return null;
	}

	return account.createSession(userId, secret);
}
