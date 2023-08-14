import { USERS_URL } from '../constants';

export type UserType = {
	id?: number;
	password: string;
	email: string
	firstname: string;
	lastname: string;
	passwordConfirmation?: string;
}

export type LoginUserType = Pick<UserType, 'password' | 'email'>
export type SignUpUserType = Omit<UserType, 'id'>;
export class UserAPI {

	static async getAll(): Promise<UserType[]> {
		return (await fetch(USERS_URL)).json();
	}

	static async update(userId: number, data: Partial<UserType>): Promise<Response> {
		return (await fetch(`${USERS_URL}/${userId}`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'put',
			body: JSON.stringify(data)
		})).json();
	}

	static async login(data: LoginUserType) {
		return (await fetch(USERS_URL, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'post',
			body: JSON.stringify(data)
		})).json();
	}

	static async signUp(data: UserType) {
		return (await fetch(USERS_URL, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'post',
			body: JSON.stringify(data)
		})).json();
	}
}
