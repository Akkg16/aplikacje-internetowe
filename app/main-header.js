import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
import NavLink from "./NavLink"; // Importujemy nowy komponent NavLink
import Image from "next/image";
import Link from 'next/link';
export default function MainHeader() {
	return (
		<header className={classes.header}>
			<Link className={classes.mainlogo} href="/">
				<Image
					src={logoImg.src}
					alt="A plate with food on it"
					width={100}
					height={100}
					priority={false}
				/>
				<span className={classes.logoText}>NextLevel Food</span>
			</Link>
			<nav className={classes.nav}>
				<NavLink href="/meals">Browse Meals</NavLink>
				<NavLink href="/community">Foodies Community</NavLink>
			</nav>
		</header>
	);
}
