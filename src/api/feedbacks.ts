import { FEEDBACKS_URL } from '../constants';


export type FeedbackType = {
	id?: number;
	userId: number;
	text: string;
}

export class FeedbackAPI {
	static async getAll(): Promise<FeedbackType[]> {
		const dd = (await fetch(FEEDBACKS_URL));
		return dd.json();
	}

	static async getAllByUserId(userId?: number): Promise<FeedbackType[]> {
		return (await fetch(`${FEEDBACKS_URL}?userId=${userId}`)).json();
	}

	static async getById(id: number | string): Promise<FeedbackType> {
		return (await fetch(`${FEEDBACKS_URL}/${id}`)).json();
	}

	static async setFeedback(data: {
		text: string;
		userId: number;
	}): Promise<FeedbackType> {
		return (await fetch(`${FEEDBACKS_URL}`, {
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'post',
			body: JSON.stringify(data)
		})).json();
	}
}
