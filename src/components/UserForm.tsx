import { Input } from './Input';
import { ErrorMessage } from './ErrorMessage';
import { Button } from './Button';
import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';


type UserFormType<T extends FieldValues, R extends FieldErrors> = {
	className?: string
	onSubmit: (data: T) => void;
	register: UseFormRegister<T>
	errors: UseFormRegister<R>
}

export const UserForm = <T extends FieldValues, R extends FieldErrors>({
																		   register,
																		   onSubmit,
																		   errors
																	   }: UserFormType<T, R>) => {
	return (
		<form className='flex flex-col p-12 gap-y-8' onSubmit={onSubmit}>
			<div>
				<Input withLabel labelText='First Name' className='w-full border rounded-lg p-1' id='firstname'
					   type='text' {...register('firstname')} />
				<ErrorMessage errors={errors} name='firstname' />
			</div>

			<div>
				<Input withLabel labelText='Last Name' className='w-full border rounded-lg p-1' id='lastname'
					   type='text' {...register('lastname')} />
				<ErrorMessage errors={errors} name='lastname' />
			</div>

			<div>
				<Input withLabel labelText='Email' className='w-full border rounded-lg p-1' id='email'
					   type='text' {...register('email')} />
				<ErrorMessage errors={errors} name='email' />
			</div>
			<div>
				<Input withLabel labelText='Password' className='w-full border rounded-lg p-1' id='password'
					   type='password' {...register('password')} />
				<ErrorMessage errors={errors} name='password' />
			</div>
			<div>
				<Input withLabel labelText='Confirm Password' className='w-full border rounded-lg p-1'
					   id='passwordConfirmation'
					   type='password' {...register('passwordConfirmation')} />
				<ErrorMessage errors={errors} name='passwordConfirmation' />
			</div>
			<div className='flex flex-col gap-y-2'>
				<Button className=' p-2 text-white font-bold bg-green-500 rounded-lg' type='submit'>
					Update
				</Button>
			</div>
		</form>
	);
};
