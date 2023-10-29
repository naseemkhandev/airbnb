"use client";

import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<Link href="/">
			<Image src="/images/logo.png" alt="logo" width={90} height={90} />
		</Link>
	);
};

export default Logo;
