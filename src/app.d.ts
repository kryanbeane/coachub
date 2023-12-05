import type { User } from 'firebase/auth';

declare global {
	namespace App {
		interface Locals {
			user: { id: string; email: string | undefined } | null;
		}
	}
}

export {};
