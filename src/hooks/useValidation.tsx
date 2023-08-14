import { useForm, FieldValues, DefaultValues } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ObjectSchema } from 'yup';

type ValidationType<T extends FieldValues> = {
	schema: ObjectSchema<T>
	defaultValues?: DefaultValues<T> | undefined
}

export const useValidation = <T extends FieldValues, >({ schema, defaultValues }: ValidationType<T>) => {
	const {
		register,
		handleSubmit,
		getValues,
		setError,
		reset,
		formState: { errors }
	} = useForm({
		defaultValues,
		resolver: yupResolver(schema)
	});


	return {
		reset,
		setError,
		errors,
		getValues,
		handleSubmit,
		register
	};
};
