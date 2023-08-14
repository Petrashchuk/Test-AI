import { ProductsAPI } from './products';

describe('ProductsAPI', () => {
	afterEach(() => {
		global.fetch.mockRestore(); // Restore the original fetch implementation
	});
	it('returns all products', async () => {
		const mockResponse = {
			json: () => Promise.resolve([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]),
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await ProductsAPI.getAll();

		expect(response).toEqual([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
	});
	it('returns by id', async () => {
		const mockResponse = {
			json: () => Promise.resolve({ id: 1, name: 'Item 1' }),
		};
		const mockFetchPromise = Promise.resolve(mockResponse);
		global.fetch = jest.fn().mockReturnValue(mockFetchPromise);
		const response = await ProductsAPI.getById(1);

		expect(response).toEqual({ id: 1, name: 'Item 1' });
	});
});
