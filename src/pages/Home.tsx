import React, { Suspense } from 'react';
import { defer, useLoaderData, Await } from 'react-router-dom';
import { ProductsAPI } from '../api';
import { Loader } from '../components';
import { Cards } from '../components/Cards';

const Home = () => {

	// @ts-ignore
	const { products } = useLoaderData();

	return <Suspense fallback={<Loader/>}>
		<Await resolve={products}>
			<Cards />
		</Await>
	</Suspense>;
};

export const productsLoader = async () => {
	return defer({
		products: ProductsAPI.getAll(),
	});

};


export {
	Home
};

