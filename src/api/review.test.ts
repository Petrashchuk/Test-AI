import { ReviewAPI } from './review';

describe('ReviewAPI', () => {
	afterEach(() => {
		global.fetch.mockRestore(); // Restore the original fetch implementation
	});

	it('returns all review', async () => {
		const mockResponse = {
			json: () => Promise.resolve([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]),
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await ReviewAPI.getAll();

		expect(response).toEqual([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
	});
	it('returns review by id', async () => {
		const mockResponse = {
			json: () => Promise.resolve({ id: 1, name: 'Item 1' }),
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await ReviewAPI.getById(1);

		expect(response).toEqual({ id: 1, name: 'Item 1' });
	});

	it('returns review by user id', async () => {
		const mockResponse = {
			json: () => Promise.resolve({ id: 1, name: 'Item 1',userId:1 }),
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await ReviewAPI.getAllByUserId(1);

		expect(response).toEqual({ id: 1, name: 'Item 1',userId:1 });
	});

	it('sets review', async() => {
		const mockResponse = {
			json: () => Promise.resolve({ id: 1, name: 'Item 1',userId:1 }),
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await ReviewAPI.setReview({text:"review",userId:1});

		expect(response).toEqual({ id: 1, name: 'Item 1',userId:1 });
	});
});
