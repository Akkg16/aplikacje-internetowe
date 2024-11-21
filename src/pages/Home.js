import { Layout } from "D:/Github Repos/aplikacje-internetowe/src/templates/Layout.js";

export const Home = () => {
	return (
		<Layout>
			<div className="">
				<h1 className="text-5xl font-bold mb-4">Strona główna</h1>
				<p className="text-xl mb-6 max-w-lg">
					Witaj na mojej stronie! To miejsce, gdzie znajdziesz wszystko, czego
					potrzebujesz.
				</p>
				<div className="flex flex-col gap-4">
					<a
						href="/aplikacje-internetowe/lab7"
						className="px-6 py-3 bg-gray-800 rounded-lg font-bold text-lg text-gray-100 hover:bg-gray-700 hover:text-white shadow-lg transition duration-300 transform hover:scale-105">
						Laboratorium 7
					</a>
					<a
						href="/aplikacje-internetowe/lab8"
						className="px-6 py-3 bg-gray-800 rounded-lg font-bold text-lg text-gray-100 hover:bg-gray-700 hover:text-white shadow-lg transition duration-300 transform hover:scale-105">
						Laboratorium 8
					</a>
				</div>
			</div>
		</Layout>
	);
};
