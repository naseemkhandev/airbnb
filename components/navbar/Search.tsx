"use client";

import { LuSearch } from "react-icons/lu";

import { Button } from "../ui/button";

const Search = () => {
	return (
		<div className="border rounded-full pl-3 sm:pl-5 pr-1 py-1 w-full">
			<div className="flex items-center justify-between gap-5 md:gap-3 lg:gap-5 text-sm font-semibold">
				<div>Anywhere</div>
				<div className="border-x px-3 lg:px-5 sm:block hidden">Any Week</div>
				<div className="text-muted-foreground/70 flex items-center gap-3">
					<div className="hidden sm:block">Add Guests</div>
					<Button
						size="icon"
						className="bg-rose-500 hover:bg-rose-600 cursor-pointer text-lg"
					>
						<LuSearch />
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Search;
