export default function AboutPage() {
	return (
		<section className="flex flex-col lg:flex-row items-center justify-center gap-8 h-full">
			{/* Lewa kolumna: opis */}
			<div className="flex-1 flex flex-col justify-center items-center lg:items-start">
				<h1 className="text-3xl font-bold mb-4">O mnie</h1>
				<p className="text-gray-700 leading-relaxed text-center lg:text-left">
					Cześć! 👋 Nazywam się Kacper Kobylecki i jestem entuzjastą
					technologii, programowania oraz twórczości cyfrowej. Zajmuję się
					tworzeniem nowoczesnych aplikacji internetowych, które łączą
					funkcjonalność z estetycznym designem.
				</p>
				<p className="text-gray-700 leading-relaxed mt-4 text-center lg:text-left">
					Po godzinach pracy lubię spędzać czas przy pysznym jedzeniu — to jedna
					z moich małych życiowych przyjemności! 🍔🍣 Oprócz tego pasjonuję się
					**fotografią**, uwielbiam podróże, które pozwalają mi odkrywać nowe
					kultury, oraz gry planszowe, które łączą strategię z kreatywnością.
					Moją misją jest ciągłe rozwijanie się i doskonalenie swoich
					umiejętności, aby tworzyć aplikacje, które będą nie tylko intuicyjne,
					ale również inspirujące dla użytkowników. Miło mi Cię poznać! 🙂
				</p>
			</div>
			{/* Prawa kolumna: zdjęcie */}
			<div className="flex-1 flex justify-center items-center">
				<img
					src="/images/me.png"
					alt="Zdjęcie autora"
					className="rounded-lg shadow-lg w-64 h-64 object-contain"
				/>
			</div>
		</section>
	);
}
