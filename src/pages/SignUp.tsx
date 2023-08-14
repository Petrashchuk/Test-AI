import React from 'react';
import { Button, ErrorMessage, Input } from '../components';
import { useValidation } from '../hooks/useValidation';
import { signupSchema } from '../schemas';
import { useNavigate, Link } from 'react-router-dom';
import { SignUpUserType, UserAPI } from '../api';
import { useAuth } from '../contexts/auth';
import { userDto } from '../helpers';
import { UserForm } from '../components/UserForm';

export const SignUp = () => {
	const navigation = useNavigate();

	const { setIsAuth, setUser } = useAuth();

	const { handleSubmit, register, errors } = useValidation<SignUpUserType>({
		schema: signupSchema
	});

	const onSubmit = async (user: SignUpUserType) => {
		const data = userDto(user);
		try {
			//todo
			const user = await UserAPI.signUp(data);
			setUser(user);
			setIsAuth(true);
			localStorage.setItem('isAuth', 'true');
			localStorage.setItem('user', JSON.stringify(user));
			navigation('/');
		} catch (e: any) {
			console.error(e.message);
		}
	};


	return (
		<div className='bg-[#032541] w-full h-screen flex items-center justify-center'>
			<div className='shadow-slate-900 shadow-lg bg-white px-6 py-6 flex flex-col gap-y-8 rounded-lg'>
				<h2 className='font-bold text-3xl'>Sign Up</h2>
				<UserForm errors={errors} onSubmit={handleSubmit(onSubmit)} className='p-12' register={register} />
			</div>
		</div>
	);
};

