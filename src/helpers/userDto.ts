import { UserType } from '../api';

export const userDto = ({ passwordConfirmation, ...rest }: UserType) => rest;
