import React, { SyntheticEvent, useEffect, useState } from 'react';
import { FeedbackModal } from './FeedbackModal';
import Logo from '../img/logo.svg';
import Menu from '../img/menu.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/auth';

export const Header = () => {
	const { setIsAuth, user } = useAuth();
	const navigation = useNavigate();
	const [displayMenu, setDisplayMenu] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleLogOut = () => {
		localStorage.removeItem('isAuth');
		setIsAuth(false);
		navigation('/');
	};

	const onClose = () => setIsModalOpen(false);

	const handleBurgerClick = (e: SyntheticEvent) => {
		e.stopPropagation();
		setDisplayMenu(true);
	};

	useEffect(() => {
		const handleWindowClick = () => setDisplayMenu(false);
		window.addEventListener('click', handleWindowClick);
		return () => window.removeEventListener('click', handleWindowClick);
	}, []);

	return (
		<header className='bg-[#032541] grid items-center grid-cols-[1fr_100px] p-2'>
			<nav className='text-white p-4 flex gap-x-3'>
				<img src={Logo} alt='logo' height={30} width={150} />
				<ul className='flex gap-x-8'>
					<li className="hover:text-green-300">
						<NavLink to='/'>Home</NavLink>
					</li>
					<li className="hover:text-green-300">
						<NavLink to='/about'>About</NavLink>
					</li>
					<li className="hover:text-green-300">
						<NavLink to='/blog'>Blog</NavLink>
					</li>
				</ul>
			</nav>
			<div className='relative grid'>
				<button type='button' onClick={handleBurgerClick} className='bg-white w-8 h-8 rounded-full'>
					<img src={Menu} alt='Menu' className='rounded-full' />
				</button>
				{displayMenu && <>
					<div
						className='bg-white shadow-slate-600 shadow-lg z-10 absolute rounded translate-y-[3rem] -translate-x-[1rem] -left-1/2 '>
						<ul>
							<li className='border-b border-solid p-3 w-max'>
								<p className='font-bold'>{user?.firstname} {user?.lastname}</p>
							</li>
							<li onClick={() => {
								navigation('/preferences');
							}} className='border-b border-solid p-3 hover:bg-[#032541] hover:text-white cursor-pointer'>
								Preferences
							</li>
							<li onClick={() => setIsModalOpen(true)}
								className='border-b cursor-pointer border-solid p-3 hover:bg-[#032541] hover:text-white'>
								Feedback
							</li>
							<li onClick={handleLogOut} className='p-3 hover:bg-[#032541] hover:text-white cursor-pointer'>
								Log Out
							</li>
						</ul>
					</div>
				</>
				}
			</div>
			{isModalOpen && <FeedbackModal onClose={onClose} />}
		</header>
	);
};


