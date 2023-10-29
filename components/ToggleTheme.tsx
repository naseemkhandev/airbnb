"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { HiOutlineSun } from "react-icons/hi";
import { TbMoon } from "react-icons/tb";

const ToggleTheme = () => {
	const { theme, setTheme } = useTheme();

	return (
		<div
			className="flex items-center justify-between"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
		>
			<p className="w-full flex-1 block mr-[130px]">
				{theme !== "light" ? <span>Dark</span> : <span>Light</span>}
			</p>
			<span className="text-xl">
				{theme !== "light" ? <TbMoon /> : <HiOutlineSun />}
			</span>
		</div>
	);
};
export default ToggleTheme;
