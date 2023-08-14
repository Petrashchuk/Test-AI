import { useAuth } from '../contexts/auth';
import { useValidation } from '../hooks/useValidation';
import React from 'react';
import { signupSchema } from '../schemas';
import { SignUpUserType, UserAPI } from '../api';
import { userDto } from '../helpers';
import { UserForm } from './UserForm';

export const UserInfo = () => {
	const { user, setUser } = useAuth();

	const onSubmit = async (user: SignUpUserType) => {
		try {
			const data = userDto(user);
			const updatedUser = await UserAPI.update(data.id!, data);
			setUser(updatedUser);
			localStorage.setItem('user', JSON.stringify(updatedUser));
		} catch (e: any) {
			console.error(e);
		}
	};

	const { handleSubmit, register, errors } = useValidation<SignUpUserType>({
		schema: signupSchema,
		defaultValues: user!
	});

	return <UserForm errors={errors} onSubmit={handleSubmit(onSubmit)} className='p-12' register={register} />;
};

