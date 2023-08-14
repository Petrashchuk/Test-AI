import { Link } from 'react-router-dom'
import Logo from '../img/logo.svg';
import FB from '../img/fb.png';
import Ins from '../img/inst.png';
import Lnk from '../img/lnk.png';
import Twitter from '../img/tw.jpeg';
import React from 'react';


export const Footer = ()=>{
	return <footer className="bg-[#032541]">
		<div className="p-4 grid grid-cols-4 text-white justify-items-center">
		<div className="flex flex-col gap-2">
			<img src={Logo} alt='logo' height={30} width={150} />
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam ipsam itaque? Culpa dolor dolore magnam, perspiciatis possimus sapiente sunt?</p>
			<div className="flex gap-5">
				<img src={FB} width={30} height={30} alt='Facebook' className="rounded-full cursor-pointer" />
				<img src={Ins} width={30} height={30} alt='Instagram' className="rounded-full cursor-pointer" />
				<img src={Lnk} width={30} height={30} alt='Linkedin' className="rounded-full cursor-pointer" />
				<img src={Twitter} width={30} height={30} alt='Twitter' className="rounded-full cursor-pointer" />
			</div>
		</div>
		<div className="flex flex-col gap-y-3">
			<h4 className="uppercase font-medium">Catalog</h4>
			<ul>
				<li className="hover:text-green-300"><Link to="/">Link 1</Link></li>
				<li className="hover:text-green-300"><Link to="/">Link 2</Link></li>
				<li className="hover:text-green-300"><Link to="/">Link 3</Link></li>
				<li className="hover:text-green-300"><Link to="/">Link 4</Link></li>
			</ul>

		</div>
		<div className="flex flex-col gap-y-3">
			<h4 className="uppercase font-medium">About Us</h4>
			<ul>
				<li className="hover:text-green-300"><Link to="/">Link 1</Link></li>
				<li className="hover:text-green-300"><Link to="/">Link 2</Link></li>
				<li className="hover:text-green-300"><Link to="/">Link 3</Link></li>
				<li className="hover:text-green-300"><Link to="/">Link 4</Link></li>
			</ul>

		</div>
		<div className="flex flex-col gap-y-3">
			<h4 className="uppercase font-medium">Customer Service</h4>
			<ul>
				<li className="hover:text-green-300"><Link to="/">Link 1</Link></li>
				<li className="hover:text-green-300"><Link to="/">Link 2</Link></li>
				<li className="hover:text-green-300"><Link to="/">Link 3</Link></li>
				<li className="hover:text-green-300"><Link to="/">Link 4</Link></li>
			</ul>
		</div>
		</div>
		<div className="bg-red-700 flex justify-around text-center text-white p-1">
			www.themoviedb.org. All rights reserved. Privacy Policy
		</div>
	</footer>
}
