import { useEffect, useState } from 'react';
import { ReviewAPI, ReviewType } from '../api';
import { useAuth } from '../contexts/auth';
import { ReviewCard } from './ReviewFeedbackCard';


export const Reviews = () => {
	const { user } = useAuth();

	const [data, setData] = useState<ReviewType[]>([]);

	useEffect(() => {
		(async () => {
			setData(await ReviewAPI.getAllByUserId(user?.id));
		})();

	}, []);

	return <section className="flex flex-col gap-y-2 overflow-auto">
		{data?.map(item => <ReviewCard key={item.id} {...item} />)}
	</section>;
};
