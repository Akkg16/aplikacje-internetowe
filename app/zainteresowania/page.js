export default function InterestsPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-6 h-full container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4">Moje zainteresowania</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
				{/* Lista zainteresowań */}
				<div className="bg-white p-4 rounded-lg shadow-md text-center">
					<h2 className="text-lg font-semibold mb-2">Technologie</h2>
					<p className="text-gray-700 leading-tight">
						Programowanie, aplikacje webowe, React, Next.js
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md text-center">
					<h2 className="text-lg font-semibold mb-2">Fotografia</h2>
					<p className="text-gray-700 leading-tight">
						Portrety, krajobrazy, fotografia uliczna
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md text-center">
					<h2 className="text-lg font-semibold mb-2">Podróże</h2>
					<p className="text-gray-700 leading-tight">
						Odkrywanie nowych miejsc, kultura, przyroda
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md text-center">
					<h2 className="text-lg font-semibold mb-2">Gry planszowe</h2>
					<p className="text-gray-700 leading-tight">
						Strategiczne i logiczne gry planszowe z przyjaciółmi
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md text-center">
					<h2 className="text-lg font-semibold mb-2">Sport</h2>
					<p className="text-gray-700 leading-tight">
						Siatkówka, bieganie, fitness, aktywność na świeżym powietrzu
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md text-center">
					<h2 className="text-lg font-semibold mb-2">Kultura</h2>
					<p className="text-gray-700 leading-tight">
						Muzyka, sztuka, literatura i teatr
					</p>
				</div>
			</div>
		</section>
	);
}
