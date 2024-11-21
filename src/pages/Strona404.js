import { Layout } from "D:/Github Repos/aplikacje-internetowe/src/templates/Layout.js";

export const Strona404 = () => {
	return (
		<Layout>
			<>
				<h1 className="text-5xl font-bold mb-4">
					Jak udało Ci się tutaj dotrzeć?
				</h1>
				<p className="text-xl mb-6 max-w-lg">Ta strona nie istnieje</p>
			</>
		</Layout>
	);
};
