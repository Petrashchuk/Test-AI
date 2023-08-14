import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

export const AuthGuard = () => {
	const { isAuth } = useAuth();

	return isAuth ? <Outlet /> : <Navigate to='/login' />;
};



