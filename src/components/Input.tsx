import React,{FC} from 'react';

interface Book {
	title: string;
	author: string;
	pages: number;
}

type InputType = {
	value:string;
}


export const Input:FC<> = () => {
	return <div>Input</div>;
};


