import ReactStars from 'react-rating-stars-component';
import { ProductType } from '../api';
import { ReviewModal } from './ReviewModal';
import { SyntheticEvent, useState } from 'react';
import { useAuth } from '../contexts/auth';
import { useNavigate } from 'react-router-dom';

export const Card = ({ rating, name, image, id }: ProductType) => {

	const { user } = useAuth();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();

	const onClose = () => setIsModalOpen(false);

	const handleReview = (e: SyntheticEvent) => {
		e.stopPropagation();
		setIsModalOpen(true);
	};

	const handleProductClick = () => {
		navigate('/product/' + id);
	};

	return <>
		<li onClick={handleProductClick}
			className='shadow-lg shadow-slate-400 rounded hover:scale-105 transition duration-500 cursor-pointer'>
			<img src={image} className='aspect-square rounded-t min-h-[266px]' alt={name} />
			<p className='p-2 font-bold'>{name}</p>
			<div className='flex p-2 justify-between items-center'>
				<ReactStars isHalf value={rating} />
				<button onClick={handleReview}
						className='bg-red-400 cursor-pointer hover:bg-red-600 rounded p-2 text-white'>
					Review
				</button>
			</div>
		</li>
		{isModalOpen && <ReviewModal productId={id} userId={user?.id} onClose={onClose} image={image} name={name} />}
	</>;
};
