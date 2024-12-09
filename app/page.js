import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 font-[var(--font-geist-sans)]">
			{/* Główne przyciski nawigacyjne */}
			<div className="flex flex-col sm:flex-row gap-4">
				<Link
					href="/o-mnie"
					className="rounded-lg bg-blue-600 text-white px-6 py-3 shadow-md hover:bg-blue-700 transition">
					O mnie
				</Link>
				<Link
					href="/kontakt"
					className="rounded-lg bg-green-600 text-white px-6 py-3 shadow-md hover:bg-green-700 transition">
					Kontakt
				</Link>
				<Link
					href="/zainteresowania"
					className="rounded-lg bg-yellow-600 text-white px-6 py-3 shadow-md hover:bg-yellow-700 transition">
					Zainteresowania
				</Link>
				<Link
					href="/ulubiony-film"
					className="rounded-lg bg-red-600 text-white px-6 py-3 shadow-md hover:bg-red-700 transition">
					Ulubiony Film
				</Link>
			</div>

			{/* Stopka */}
			<footer className="mt-12 text-sm text-gray-500">
				<p>Stworzone z wykorzystaniem Next.js i Tailwind CSS</p>
			</footer>
		</div>
	);
}
