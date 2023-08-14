import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useAuth } from '../contexts/auth'; // Import the context and mock it
import { useNavigate } from 'react-router-dom';
import { Card } from './Card';


jest.mock('../contexts/auth');
jest.mock('react-router-dom', () => ({

	useNavigate: jest.fn(),
}));

describe('Card component', () => {

	const mockUseAuth = useAuth as jest.MockedFunction<typeof useAuth>;

	beforeEach(() => {

		// Mock user context for the test
		mockUseAuth.mockReturnValue({ user: { id: '123' } });
	});

	it('renders the card with correct name and rating', () => {
		const { getByText, getByRole } = render(
			<Card id="1" name="Product 1" image="image-url" rating={4.5} />
		);

		expect(getByText('Product 1')).toBeInTheDocument();
		expect(getByRole('img')).toHaveAttribute('alt', 'Product 1');
		// You can further test other elements and attributes
	});

	it('opens the review modal when "Review" button is clicked', () => {
		const { getByText, getByRole } = render(
			<Card id="1" name="Product 1" image="image-url" rating={4.5} />
		);

		fireEvent.click(getByText('Review'));
		expect(getByRole('dialog')).toBeInTheDocument(); // Assuming the modal is a dialog
	});
	// Add more tests for other scenarios and interactions
});
