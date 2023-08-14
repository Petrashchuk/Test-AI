import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AuthGuard, Layout } from '../components';
import { privateRouters } from './private';
import { Login, SignUp } from '../pages';


export const router = createBrowserRouter(createRoutesFromElements(
	<>
		<Route path='/' element={<AuthGuard />}>
			<Route element={<Layout />}>
				{privateRouters.map((item, index) => <Route key={index} {...item} />)}
			</Route>
		</Route>
		<Route path='/login' element={<Login />} />
		<Route path='/signup' element={<SignUp />} />
		<Route path='*' element={<div>Not Found</div>} />
	</>
));
