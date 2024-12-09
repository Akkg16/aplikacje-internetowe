export default function FavoriteMoviePage() {
	return (
		<section className="flex flex-col items-center justify-center gap-8 h-screen px-4 pt-8 pb-8">
			<h1 className="text-3xl font-bold mb-4">Mój ulubiony film</h1>
			<div className="flex flex-col md:flex-row items-center md:items-center bg-white p-4 rounded-lg shadow-md w-full max-w-6xl">
				{/* Plakat filmu */}
				<div className="w-48 h-72 md:w-64 md:h-96 mb-4 md:mb-0 flex items-center justify-center">
					<img
						src="./images/movie-poster.jpg"
						alt="Plakat filmu"
						className="w-full h-full object-cover rounded-lg shadow-md"
					/>
				</div>

				{/* Sekcja z opisem */}
				<div className="flex-1 md:ml-6 flex items-center justify-center text-center md:text-left p-2">
					<div>
						<h2 className="text-2xl font-bold mb-2">Incepcja (2010)</h2>
						<p className="text-gray-700 leading-relaxed mb-2">
							Incepcja to amerykański film science fiction w reżyserii
							Christophera Nolana. Opowiada historię Domina Coba, specjalisty od
							kradzieży snów, który ma wykonać misję niemożliwą — wszczepienie
							myśli. Pełna akcji, zaskakujących zwrotów akcji i efektów
							wizualnych.
						</p>
						<a
							href="https://www.imdb.com/title/tt1375666/"
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-blue-600 text-white px-3 py-1 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
							Zobacz na IMDb
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
