import { useEffect, useState } from 'react';
import { FeedbackAPI, FeedbackType } from '../api';
import { useAuth } from '../contexts/auth';
import { FeedbackCard } from './ReviewFeedbackCard';
import { useLayout } from '../contexts/layout';


export const Feedbacks = () => {
	const { user } = useAuth();
	const [{ isUpdatedFeedbacks }] = useLayout();
	const [data, setData] = useState<FeedbackType[]>([]);

	useEffect(() => {
		(async () => {
			setData(await FeedbackAPI.getAllByUserId(user?.id));
		})();

	}, [isUpdatedFeedbacks]);

	return <section className='flex flex-col gap-y-2 overflow-auto h-full'>
		{data?.map(item => <FeedbackCard key={item.id} {...item} />)}
	</section>;
};
