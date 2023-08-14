import React, { SyntheticEvent, forwardRef } from 'react';


type InputType = {
	value?: string;
	onChange?: (e: SyntheticEvent) => void;
	className?: string,
	name?: string,
	id?: string
	type: 'text' | 'password',
	withLabel?: boolean
	labelText?: string
};

export const Input = forwardRef<HTMLInputElement, InputType>(({ id, labelText, withLabel, ...rest }, ref) => {
	return (
		<>
			{withLabel && <label className='text-sm' htmlFor={id}>{labelText}</label>}
			<input {...rest} id={id} ref={ref} />
		</>
	);
});


