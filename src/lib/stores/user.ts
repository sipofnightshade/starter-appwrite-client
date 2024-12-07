import { writable } from 'svelte/store';
import { fetchLoggedInUser } from '$lib/appwrite/auth/email';

export const user = writable(null);

export async function initializeUser() {
	try {
		const loggedInUser = await fetchLoggedInUser();
		user.set(loggedInUser);
	} catch (error) {
		user.set(null);
	}
}

export function clearUser() {
	user.set(null);
}
