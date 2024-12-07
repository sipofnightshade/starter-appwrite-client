import { account, ID } from '$lib/appwrite/client';

export async function registerUserWithPassword(email: string, password: string) {
	return account.create(ID.unique(), email, password);
}

export async function loginUserWithPassword(email: string, password: string) {
	return account.createEmailPasswordSession(email, password);
}

export async function logoutUser() {
	return account.deleteSession('current');
}

export async function fetchLoggedInUser() {
	return account.get();
}

export async function sendVerificationEmail(redirectUrl: string) {
	return account.createVerification(redirectUrl);
}

export async function verifyEmail(userId: string, secret: string) {
	return account.updateVerification(userId, secret);
}

export async function recoverPassword(email: string, resetUrl: string) {
	return account.createRecovery(email, resetUrl);
}

export async function updateRecovery(userId: string, secret: string, password: string) {
	// can request users to type password twice and only return if they match
	return account.updateRecovery(userId, secret, password);
}
