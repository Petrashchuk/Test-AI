import React, { FC, PropsWithChildren, SyntheticEvent } from 'react';


type ButtonType = PropsWithChildren<{
	onClick?: (e: SyntheticEvent) => void;
	type: 'submit' | 'button',
	value?: string
	className?: string
}>

export const Button = (props: ButtonType) => {
	return (
		<button {...props} />
	);
};


