import { UserAPI } from './user';

describe('UserAPI', () => {
	afterEach(() => {
		global.fetch.mockRestore(); // Restore the original fetch implementation
	});

	it('returns all feedbacks', async () => {
		const mockResponse = {
			json: () => Promise.resolve([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }])
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await UserAPI.getAll();

		expect(response).toEqual([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
	});
	it('updates user', async () => {
		const mockResponse = {
			json: () => Promise.resolve({ id: 1, name: 'Item 1' })
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await UserAPI.update(1);

		expect(response).toEqual({ id: 1, name: 'Item 1' });
	});

	it('returns feedback by user id', async () => {
		const mockResponse = {
			json: () => Promise.resolve({ id: 1, name: 'Item 1', userId: 1 })
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await UserAPI.login({ password: 123, email: 'www@gmail.com' });

		expect(response).toEqual({ id: 1, name: 'Item 1', userId: 1 });
	});

	it('sets feedback', async () => {
		const mockResponse = {
			json: () => Promise.resolve({ id: 1, name: 'Item 1', userId: 1 })
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await UserAPI.signUp({
			password: 123,
			email: 'www@gmail.com',
			firstname: 'Andrii',
			lastname: 'Andrii'
		});

		expect(response).toEqual({ id: 1, name: 'Item 1', userId: 1 });
	});
});
