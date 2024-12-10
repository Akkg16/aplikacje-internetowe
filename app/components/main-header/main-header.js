"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./main-header.module.css";
import logoImg from "@/assets/logo.png";

export default function MainHeader() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	return (
		<header className={styles.header}>
			<div className={styles.logoContainer}>
				<img src={logoImg.src} alt="Site Icon" className={styles.logo} />
				<span className={styles.siteName}>Food Blog</span>
			</div>
			<nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
				<ul className={styles.navList}>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="/meals">Meals</Link>
					</li>
					<li>
						<Link href="/meals/share">Share</Link>
					</li>
					<li>
						<Link href="/meals/community">Community</Link>
					</li>
				</ul>
			</nav>
			<div className={styles.hamburger} onClick={toggleMenu}>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
				<div className={styles.line}></div>
			</div>
		</header>
	);
}
