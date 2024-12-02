import { Layout } from "D:/Github Repos/aplikacje-internetowe/src/templates/Layout.js";
import { Link } from "react-router-dom";

export const Home = () => {
	return (

			<div className="">
				<h1 className="text-5xl font-bold mb-4">Strona główna</h1>
				<p className="text-xl mb-6 max-w-lg">
					Witaj na mojej stronie! To miejsce, gdzie znajdziesz wszystko, czego
					potrzebujesz.
				</p>
				<div className="flex flex-col gap-4">
					<Link
						to="/lab7"
						className="px-6 py-3 bg-gray-800 rounded-lg font-bold text-lg text-gray-100 hover:bg-gray-700 hover:text-white shadow-lg transition duration-300 transform hover:scale-105">
						Laboratorium 7
					</Link>
					<Link
						to="/lab8"
						className="px-6 py-3 bg-gray-800 rounded-lg font-bold text-lg text-gray-100 hover:bg-gray-700 hover:text-white shadow-lg transition duration-300 transform hover:scale-105">
						Laboratorium 8
					</Link>
					<Link
						to="/lab9"
						className="px-6 py-3 bg-gray-800 rounded-lg font-bold text-lg text-gray-100 hover:bg-gray-700 hover:text-white shadow-lg transition duration-300 transform hover:scale-105">
						Laboratorium 9
					</Link>
				</div>
			</div>

	);
};
