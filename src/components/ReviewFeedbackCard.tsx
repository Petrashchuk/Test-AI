import { useEffect, useState } from 'react';
import Rating from 'react-rating-stars-component';
import { ProductsAPI, ProductType } from '../api';

type ReviewCardType = {
	productId: number;
	rating: number
}

type FeedbackCardType = {
	text: string;
}


export const ReviewCard = ({ productId, rating }: ReviewCardType) => {
	const [product, setProduct] = useState<ProductType>();

	useEffect(() => {
		(async () => {
			setProduct(await ProductsAPI.getById(productId));
		})();
	}, []);

	return <div className='w-full border border-solid p-6'>
		<img src={product?.image} width={100} height={150} alt='image' />
		<p>{product?.name}</p>
		<Rating value={rating} />
	</div>;
};


export const FeedbackCard = ({ text }: FeedbackCardType) => {
	return <div className='w-full border border-solid p-6'>
		{text}
	</div>;
};
