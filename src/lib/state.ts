import type { User } from './common';
import { writable } from 'svelte/store';

export const activeMessageUser = writable<string | null>(null);
export const users = writable<User[]>([
	{
		id: '0',
		username: 'John'
	},
	{
		id: '1',
		username: 'Jane'
	},
	{
		id: '2',
		username: 'Jack'
	}
] as User[]);
