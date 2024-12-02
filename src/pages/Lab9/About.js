import { Layout } from "D:/Github Repos/aplikacje-internetowe/src/templates/Layout.js";

const About = () => {
	return (
		<div className="container mx-auto px-6 py-12">
			<div className="flex flex-col md:flex-row items-center md:items-start space-y-12 md:space-y-0">
				{/* Lewa kolumna z tekstem w szarym kontenerze */}
				<div className="md:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg text-white space-y-6 md:pr-10 text-left">
					<h1 className="text-4xl font-extrabold text-white leading-tight">
						Nazywam się Kacper Kobylecki
					</h1>
					<p className="text-lg text-white-300 leading-relaxed">
						Cześć! Jestem pasjonatem technologii, programowania oraz ciągłego
						odkrywania nowych możliwości w świecie IT. Uwielbiam dzielić się
						wiedzą i doświadczeniem z innymi, zawsze dążąc do rozwijania swoich
						umiejętności.
					</p>
					<p className="text-lg text-white-300 leading-relaxed">
						Moim celem jest budowanie aplikacji, które nie tylko działają
						sprawnie, ale także dostarczają użytkownikom wyjątkowe
						doświadczenia. Wierzę, że technologia ma ogromny potencjał, by
						uczynić świat lepszym miejscem.
					</p>
					<p className="text-lg text-white-300 leading-relaxed">
						W wolnym czasie lubię eksperymentować z nowymi frameworkami, uczyć
						się nowych języków programowania oraz pracować nad projektami, które
						poszerzają moje horyzonty.
					</p>
				</div>

				{/* Prawa kolumna ze zdjęciem bez tła */}
				<div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
					<img
						src="https://via.placeholder.com/400.png/"
						alt="Moje zdjęcie"
						className=" border-4 border-white shadow-lg"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
