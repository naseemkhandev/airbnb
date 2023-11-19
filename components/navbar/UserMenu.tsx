"use client";

import { RxHamburgerMenu } from "react-icons/rx";

import UserAvatar from "../common/UserAvatar";
import { Button } from "../ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ToggleTheme from "../ToggleTheme";

const UserMenu = () => {
	return (
		<div className="text-sm font-semibold">
			<div className="flex items-center gap-3">
				<Button
					variant="ghost"
					className="rounded-full hover:bg-muted-foreground/10 md:block hidden"
				>
					Airbnb you home
				</Button>

				<DropdownMenu>
					<DropdownMenuTrigger>
						<Button
							variant="outline"
							className="cursor-pointer flex items-center gap-2 rounded-full md:pr-1 md:pl-3 md:py-[1.35rem] py-5 px-2.5 hover:bg-muted-foreground/5 dark:border-white/20"
						>
							<RxHamburgerMenu className="text-xl" />
							<div className="md:block hidden">
								<UserAvatar />
							</div>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="font-[700] py-2 px-0 min-w-[14rem] mr-5 md:mr-10 rounded-2xl mt-2">
						<DropdownMenuItem>Login</DropdownMenuItem>
						<DropdownMenuItem>Sign up</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Airbnb you home</DropdownMenuItem>
						<DropdownMenuItem>
							<ToggleTheme />
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</div>
	);
};

export default UserMenu;
