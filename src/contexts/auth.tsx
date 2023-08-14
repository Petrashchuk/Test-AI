import { createContext, PropsWithChildren, useContext, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { UserType } from '../api';


type AuthContextType = {
	isAuth: boolean,
	user: UserType | null,
	setUser: Dispatch<SetStateAction<UserType>>
	setIsAuth: Dispatch<SetStateAction<boolean>>
}


const AuthContext = createContext<AuthContextType>({
	isAuth: false,
	user: null,
	setIsAuth: (value) => value,
	setUser: (value) => value
});


export const AuthProvider = ({ children }: PropsWithChildren) => {
	const [isAuth, setIsAuth] = useState(!!localStorage.getItem('isAuth'));
	const savedUser = localStorage.getItem('user');
	const [user, setUser] = useState<UserType>(savedUser ? JSON.parse(savedUser) : null);


	return <AuthContext.Provider value={{ isAuth, setIsAuth, user, setUser }}>
		{children}
	</AuthContext.Provider>;
};


export const useAuth = () => useContext(AuthContext);
