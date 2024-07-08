import React from "react";
import { ModeToggle } from "../theme-toggle-button";
import Link from "next/link";
import { buttonVariants } from "./button";

function Navbar() {
	return (
		<nav className="flex justify-between py-5">
			<Link href="/">
				<h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
					Next Actions CRUD
				</h1>
			</Link>
			<div className="flex items-center gap-x-2">
				<Link href="/new" className={buttonVariants({ variant: "secondary" })}>
					Create Task
				</Link>
				<ModeToggle />
			</div>
		</nav>
	);
}

export default Navbar;
