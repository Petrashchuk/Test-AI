import React from 'react';
import { render } from '@testing-library/react';
import { ErrorMessage } from './ErrorMessage';

describe('ErrorMessage component', () => {
	it('renders the error message', () => {
		const errors = {
			field1: {
				type: 'required',
				message: 'This field is required.',
			},
			field2: {
				type: 'minLength',
				message: 'Minimum length is 5 characters.',
			},
		};

		const { getByText } = render(
			<ErrorMessage errors={errors} name="field1" />
		);

		expect(getByText('This field is required.')).toBeInTheDocument();
	});

	it('renders nothing when there is no error message', () => {
		const errors = {
			field1: {
				type: 'required',
				message: 'This field is required.',
			},
		};

		const { container } = render(
			<ErrorMessage errors={errors} name="field2" />
		);

		expect(container.firstChild).toBeNull();
	});

	// Add more test cases for handling different scenarios and edge cases
});
