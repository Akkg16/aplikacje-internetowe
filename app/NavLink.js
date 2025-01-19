"use client"; // Używamy tej dyrektywy tylko w tym komponencie

import { usePathname } from "next/navigation";
import Link from "next/link";
import classes from "./nav-link.module.css";

export default function NavLink({ href, children }) {
	const pathname = usePathname(); // Pobieramy aktualną ścieżkę
	const isActive = pathname.startsWith(href); // Sprawdzamy, czy link jest aktywny

	return (
		<Link
			href={href}
			className={`${classes.navItem} ${isActive ? classes.active : ""}`} // Dodajemy klasę active, jeśli link jest aktywny
		>
			{children}
		</Link>
	);
}
