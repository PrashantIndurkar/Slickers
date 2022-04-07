import React from 'react';
import { LogoIcon, WishlistIcon } from '../assets/icons';
import {
	HeartIcon,
	ShoppingBagIcon,
	UserCircleIcon,
} from '@heroicons/react/outline';

const Navbar = () => {
	return (
		<div className="mt-4 mx-4 flex items-center justify-between md:mx-20">
			<div className="flex items-center gap-2">
				<LogoIcon />
				<h1 className="text-xl font-semibold">Slickers</h1>
			</div>
			<div className="flex gap-3 cursor-pointer">
				<HeartIcon className="h-6 w-6" />
				<ShoppingBagIcon className="h-6 w-6" />
				<UserCircleIcon className="h-6 w-6" />
			</div>
		</div>
	);
};

export default Navbar;
