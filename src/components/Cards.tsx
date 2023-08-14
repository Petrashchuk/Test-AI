import { ProductType } from '../api';
import { Card } from './Card';
import { useAsyncValue } from 'react-router-dom';

export const Cards = () => {
	const products = useAsyncValue() as ProductType[];
	return <section className='flex-auto p-6'>
		<ul data-testid="card-component" className='grid grid-cols-5 gap-4 justify-items-center'>
			{products.map(product => <Card key={product.id} {...product} />)}
		</ul>

	</section>;
};
