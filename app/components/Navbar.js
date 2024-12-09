import Link from "next/link";

export default function Navbar() {
	return (
		<nav>
			<ul>
				<li>
					<Link href="/o-mnie">O mnie</Link>
				</li>
				<li>
					<Link href="/moje-zainteresowania">Moje zainteresowania</Link>
				</li>
				<li>
					<Link href="/ulubiony-film">Ulubiony film</Link>
				</li>
				<li>
					<Link href="/kontakt">Kontakt</Link>
				</li>
			</ul>
		</nav>
	);
}
