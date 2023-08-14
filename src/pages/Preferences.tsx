import { useState } from 'react';
import clx from 'classnames';

import { Reviews, Feedbacks } from '../components';
import { UserInfo } from '../components/UserInfo';

type TabsType = 'user_info' | 'reviews' | 'feedbacks';

export const Preferences = () => {
	const [activeTab, setActiveTab] = useState<TabsType>('user_info');

	const handleActiveTab = async (activeTab: TabsType) => setActiveTab(activeTab)

	const Component = {
		user_info: UserInfo,
		reviews: Reviews,
		feedbacks: Feedbacks
	}[activeTab];


	return <main className='flex-1 grid grid-cols-[300px_1fr] gap-2 h-full'>
		<aside className='w-full border-r border-solid rounded gap-4'>
			<ul>
				<li onClick={() => handleActiveTab('user_info')}
					className={clx('border-b font-bold border-solid p-3 hover:bg-green-300 hover:text-white cursor-pointer', {
						'bg-green-500 text-white': activeTab === 'user_info'
					})}
				>
					User Info
				</li>
				<li onClick={() => handleActiveTab('reviews')}
					className={clx('border-b font-bold border-solid p-3 hover:bg-green-300 hover:text-white cursor-pointer', {
						'bg-green-500 text-white': activeTab === 'reviews'
					})}>
					Reviews
				</li>
				<li onClick={() => handleActiveTab('feedbacks')}
					className={clx('border-b font-bold border-solid p-3 hover:bg-green-300 hover:text-white cursor-pointer', {
						'bg-green-500 text-white': activeTab === 'feedbacks'
					})}>
					Feedbacks
				</li>
			</ul>
		</aside>
		<section>
			<Component />
		</section>
	</main>;
};
