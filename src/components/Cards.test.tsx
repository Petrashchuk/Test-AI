import React from 'react';
import { render } from '@testing-library/react';
import { Cards } from './Cards';
import { useAsyncValue } from 'react-router-dom'; // Mock this hook

jest.mock('react-router-dom', () => ({
	useAsyncValue: jest.fn(),
	useNavigate: jest.fn(),

}));

describe('Cards component', () => {
	const mockUseAsyncValue = useAsyncValue as jest.MockedFunction<typeof useAsyncValue>;

	it('renders a list of cards', () => {
		// Mock data for useAsyncValue hook
		const mockProducts = [
			{ id: '1', name: 'Product 1', image: 'image1.jpg', rating: 4.5 },
		];

		// Mock the useAsyncValue hook to return the mockProducts data
		mockUseAsyncValue.mockReturnValue(mockProducts);

		const { getAllByTestId } = render(<Cards />);

		// Assert that the correct number of cards are rendered
		const cardElements = getAllByTestId('card-component');
		expect(cardElements.length).toBe(1);
	});

	// Add more test cases for handling different scenarios related to useAsyncValue
});
