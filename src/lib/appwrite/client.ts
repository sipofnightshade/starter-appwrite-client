import { Client, Account, Databases } from 'appwrite';
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID } from '$env/static/private';

const client = new Client();
client
	.setEndpoint(APPWRITE_ENDPOINT) // Replace with your Appwrite endpoint
	.setProject(APPWRITE_PROJECT_ID); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID, Query, Permission, Role } from 'appwrite';
