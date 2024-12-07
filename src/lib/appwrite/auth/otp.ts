import { account, ID } from '$lib/appwrite/client';

export async function registerUserWithOTP(email: string, useSecurityPhrase = false) {
	return account.createEmailToken(ID.unique(), email, useSecurityPhrase);
}

export async function loginUserWithOTP(userId: string, otp: string) {
	return account.createSession(userId, otp);
}

export function getSecurityPhraseMessage(securityPhrase: string): string {
	return `Security Phrase: Please ensure the phrase "${securityPhrase}" matches the one in your email to avoid phishing attacks.`;
}
