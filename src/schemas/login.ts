import { object, string } from 'yup';

export const loginSchema = object({
	email: string().required('Email is required').email('Email is invalid'),
	password: string().required('Password is required'),
	notFound: string()
});
