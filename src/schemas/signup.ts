import { object, ref, string } from 'yup';

export const signupSchema = object({
	firstname:string().required('Firstname is required'),
	lastname:string().required('Lastname is required'),
	email: string().required('Email is required').email('Email is invalid'),
	passwordConfirmation: string()
		.oneOf([ref('password')], "Passwords don't match"),
	password: string().required('Password is required')
});
