import React, { FC, SyntheticEvent } from 'react';


type InputType = {
	value: string;
	onChange: (e: SyntheticEvent) => void;
	type: 'text' | 'password',
}

export const Input: FC<InputType> = (props) => {
	return (
		<input {...props} />
	)
};


