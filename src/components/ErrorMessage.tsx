import React from 'react';
import { FieldValues, FieldName } from 'react-hook-form';
import { ErrorMessage as ErrorMsg, FieldValuesFromFieldErrors } from '@hookform/error-message';


type ErrorMessageType<T> = {
	name: FieldName<FieldValuesFromFieldErrors<T>>,
	errors: T
}

export const ErrorMessage = <T extends FieldValues>({ errors, name }: ErrorMessageType<T>) => {
	return (
		<ErrorMsg errors={errors} name={name}
				  render={({ message }) => <p className='text-red-500 text-bold'>{message}</p>} />
	);
};
