export const Layout = ({ children }) => {
	return (
		<div>
			<header className="bg-gray-800 text-white py-4">
				<nav className="container mx-auto flex justify-between items-center px-6">
					<h1 className="text-2xl font-bold">Kacper Kobylecki 20454</h1>
					<ul className="flex space-x-6">
						<li>
							<a
								href="/"
								className="nav-link hover:text-indigo-300 hover:bg-gray-700 px-3 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
								Strona Główna
							</a>
						</li>
					</ul>
				</nav>
			</header>
			<main className="flex flex-col items-center justify-center min-h-screen pt-16 pb-16 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-center">
				{children}
			</main>
		</div>
	);
};
