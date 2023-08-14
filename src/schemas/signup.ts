import { object, string } from 'yup';

export const loginSchema = object({
	email: string().required('Email is required').email('Email is invalid'),
	password: string().required('Password is required')
		.min(6, 'Password must be at least 6 characters')
		.max(40, 'Password must not exceed 40 characters'),
});
