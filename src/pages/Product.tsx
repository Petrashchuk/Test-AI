import { ProductsAPI, ProductType } from '../api';
import { Suspense } from 'react';
import { defer, Await, useLoaderData } from 'react-router-dom';
import { Loader } from '../components';

export const Product = () => {
	const { product } = useLoaderData() as { product: ProductType };
	return <>
		<Suspense fallback={<Loader />}>
			<Await resolve={product}>
				{resolvedProduct => {
					return <div>
						<img src={resolvedProduct.image} className='aspect-square rounded-t min-h-[266px] w-[300px]'
							 alt={resolvedProduct.name} />
						<p className='p-2 font-bold'>{resolvedProduct.name}</p>
						<div className='flex p-2 justify-between items-center'>
							<p className='text-yellow-300 text-4xl'>{resolvedProduct.ating}</p>
						</div>
					</div>;
				}}
			</Await>
		</Suspense>
	</>;
};

export const productLoader = ({ params }: any) => {
	const { id } = params;
	return defer({
		product: ProductsAPI.getById(id)
	});
};
