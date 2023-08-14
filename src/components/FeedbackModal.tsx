import { useState } from 'react';
import { FeedbackAPI } from '../api';
import { useAuth } from '../contexts/auth';
import { useLayout } from '../contexts/layout';

type ModalType = {
	onClose: () => void;
}


export const FeedbackModal = ({ onClose }: ModalType) => {
	const [feedback, setFeedback] = useState('');
	const [{ isUpdatedFeedbacks }, dispatch] = useLayout();

	const { user } = useAuth();

	const onSend = async () => {
		try {
			await FeedbackAPI.setFeedback({
				text: feedback,
				userId: user?.id
			});
			dispatch({ payload: !isUpdatedFeedbacks, type: 'update_feedbacks' });
		} catch (e: any) {
			console.error(e.message);
		} finally {
			onClose();
		}
	};


	return (
		<div className='relative z-10' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
			<div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>

			<div className='fixed inset-0 z-10 overflow-y-auto'>
				<div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>

					<div
						className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
						<div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
							<div className='sm:flex sm:items-center'>
								<div
									className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10'>

									<svg className='h-6 w-6 text-green-600' xmlns='http://www.w3.org/2000/svg'
										 fill='none' viewBox='0 0 24 24'
										 strokeWidth='1.5' stroke='currentColor' aria-hidden='true'>
										<path strokeLinecap='round' strokeLinejoin='round'
											  d='M4.5 12.75l6 6 9-13.5'></path>
									</svg>
								</div>
								<div className='mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left'>
									<h3 className='text-base font-semibold leading-6 text-gray-900'
										id='modal-title'>Feedback</h3>
								</div>
							</div>
							<div className='mt-2'>
								<textarea value={feedback} onChange={(e) => setFeedback(e.target.value)}
										  className='border border-solid w-full p-2'
										  placeholder='Write your feedback' />
							</div>
						</div>
						<div className='bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
							<button type='button'
									className='inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto'
									onClick={onClose}>Close
							</button>
							<button type='button'
									className='mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto'
									onClick={onSend}>Send
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
