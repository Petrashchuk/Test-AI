import React from 'react';
import { loginSchema } from '../schemas';
import { Button, ErrorMessage, Input } from '../components';
import { useValidation } from '../hooks/useValidation';
import { Link, useNavigate } from 'react-router-dom';
import { LoginUserType, UserAPI } from '../api';
import { useAuth } from '../contexts/auth';


export const Login = () => {
	const navigation = useNavigate();
	const { setIsAuth, setUser } = useAuth();


	const { handleSubmit, register, errors, setError, reset } = useValidation<LoginUserType & { notFound?: string; }>({
		schema: loginSchema
	});

	const onSubmit = async (data: LoginUserType) => {
		try {
			//todo
			// const response = await UserAPI.login(data);

			const users = await UserAPI.getAll();
			const user = users.find((user) => user.email === data.email && user.password === data.password);
			if (user) {
				reset();
				setIsAuth(true);
				setUser(user);
				localStorage.setItem('isAuth', 'true');
				localStorage.setItem('user', JSON.stringify(user));
				navigation('/');
			} else {
				setError('notFound', {
					message: 'Email or password is invalid'
				});
			}
		} catch (e: any) {
			console.error(e.message);
		}
	};


	return <div className='bg-[#032541]  w-full h-screen flex items-center justify-center'>
		<div className='shadow-slate-900 shadow-lg bg-white px-6 py-6 flex flex-col gap-y-8 rounded-lg'>
			<h2 className='font-bold text-3xl'>Login</h2>
			<form className='flex flex-col gap-y-8' onSubmit={handleSubmit(onSubmit)}>
				<div>
					<Input withLabel labelText='Email' className='w-full border rounded-lg p-1' id='email'
						   type='text' {...register('email')} />
					<ErrorMessage errors={errors} name='email' />
				</div>
				<div>
					<Input withLabel labelText='Password' className='w-full border rounded-lg p-1' type='password'
						   id='password' {...register('password')} />
					<ErrorMessage errors={errors} name='password' />
				</div>


				<div className='flex flex-col gap-y-2'>
					<ErrorMessage errors={errors} name='notFound' />
					<Button className='w-full p-2 text-white font-bold bg-green-500 rounded-lg' type='submit'>
						Login
					</Button>
					<p className='text-center text-sm text-gray-500'>Need an account <Link
						className='underline uppercase font-bold' to='/signup'>sign up</Link></p>
				</div>
			</form>
		</div>
	</div>;
};


