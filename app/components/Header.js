// app/components/Header.js
import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-blue-600 text-white py-4">
			<div className="container mx-auto flex justify-between items-center px-4">
				<h1 className="text-2xl font-bold">
					<Link href="/">Kacper Kobyłecki</Link>
				</h1>
				<nav>
					<ul className="flex space-x-4">
						<li>
							<Link href="/o-mnie" className="hover:text-gray-300">
								O mnie
							</Link>
						</li>
						<li>
							<Link href="/zainteresowania" className="hover:text-gray-200">
								Moje zainteresowania
							</Link>
						</li>
						<li>
							<Link href="/ulubiony-film" className="hover:text-gray-200">
								Ulubiony film
							</Link>
						</li>
						<li>
							<Link href="/kontakt" className="hover:text-gray-200">
								Kontakt
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
