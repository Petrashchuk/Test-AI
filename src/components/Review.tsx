import { useEffect, useState } from 'react';
import { ReviewAPI, ReviewType } from '../api';
import { useAuth } from '../contexts/auth';


const Card = ({ userId, id, productId, rating }: ReviewType) => {
	return <div className="w-full border border-solid p-6">
		{rating}
	</div>
};

export const ReviewFeedback = () => {
	const { user } = useAuth();
	const [data, setData] = useState<ReviewType[]>([]);

	useEffect(() => {
		(async () => {
			setData(await ReviewAPI.getAllByUserId(user?.id));
		})();

	}, []);

	return <section>
		{data.map(item => <Card key={item.id} {...item} />)}
	</section>;
};
