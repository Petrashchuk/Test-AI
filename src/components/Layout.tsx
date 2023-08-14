import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { LayoutProvider } from '../contexts/layout';

export const Layout = () => {
	return <LayoutProvider>
		<section className='flex flex-col justify-between min-h-screen'>
			<Header />
			<Outlet />
			<Footer />
		</section>
	</LayoutProvider>;
};
