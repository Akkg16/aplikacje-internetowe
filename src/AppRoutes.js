import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Strona404 } from "./pages/Strona404";
import { Lab7 } from "./pages/Lab7";
import { Lab8 } from "./pages/Lab8";

export const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/lab7" element={<Lab7 />} />
			<Route path="/lab8" element={<Lab8 />} />
			<Route path="*" element={<Strona404 />} />
		</Routes>
	);
};
