import { REVIEWS_URL } from '../constants';


export type ReviewType = {
	id?:number;
	userId: number;
	rating: number,
	productId: number,
}

export class ReviewAPI {
	static async getAll(): Promise<ReviewType[]> {
		return (await fetch(REVIEWS_URL)).json();
	}

	static async getAllByUserId(userId?: number): Promise<ReviewType[]> {
		return (await fetch(`${REVIEWS_URL}?userId=${userId}`)).json();
	}

	static async getById(id: number | string): Promise<ReviewType> {
		return (await fetch(`${REVIEWS_URL}/${id}`)).json();
	}

	static async setReview(data: {
		rating: number;
		userId?: number;
		productId: number;
	}): Promise<ReviewType> {
		return (await fetch(`${REVIEWS_URL}`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'post',
			body: JSON.stringify(data)
		})).json();
	}
}
