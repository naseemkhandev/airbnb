"use client";

import Link from "next/link";
import Image from "next/image";
import { SiAirbnb } from "react-icons/si";

import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

const Navbar = () => {
	return (
		<div className="border-b py-4">
			<div className="large-container flex items-center justify-between gap-3 sm:gap-5">
				<div className="md:block hidden">
					<Logo />
				</div>
				<div className="flex items-center gap-3 sm:gap-5 md:w-fit w-full">
					<Link href="/" className="md:hidden block">
						<SiAirbnb className="text-3xl sm:text-4xl text-rose-500" />
					</Link>
					<Search />
				</div>
				<UserMenu />
			</div>
		</div>
	);
};

export default Navbar;
