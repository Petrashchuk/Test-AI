import { FeedbackAPI } from './feedbacks';

describe('Feedbacks', () => {
	afterEach(() => {
		global.fetch.mockRestore(); // Restore the original fetch implementation
	});

	it('returns all feedbacks', async () => {
		const mockResponse = {
			json: () => Promise.resolve([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]),
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await FeedbackAPI.getAll();

		expect(response).toEqual([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
	});
	it('returns feedback by id', async () => {
		const mockResponse = {
			json: () => Promise.resolve({ id: 1, name: 'Item 1' }),
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await FeedbackAPI.getById(1);

		expect(response).toEqual({ id: 1, name: 'Item 1' });
	});

	it('returns feedback by user id', async () => {
		const mockResponse = {
			json: () => Promise.resolve({ id: 1, name: 'Item 1',userId:1 }),
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await FeedbackAPI.getAllByUserId(1);

		expect(response).toEqual({ id: 1, name: 'Item 1',userId:1 });
	});

	it('sets feedback', async() => {
		const mockResponse = {
			json: () => Promise.resolve({ id: 1, name: 'Item 1',userId:1 }),
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await FeedbackAPI.setFeedback({text:"feedback",userId:1});

		expect(response).toEqual({ id: 1, name: 'Item 1',userId:1 });
	});
});
